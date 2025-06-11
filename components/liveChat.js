import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaComment, FaTimes, FaUserCircle } from 'react-icons/fa';
import { IoChatbubbles } from "react-icons/io5";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [emailProvided, setEmailProvided] = useState(false);
  const [conversationState, setConversationState] = useState('initial');
  const [userEmail, setUserEmail] = useState('');

  // Initial bot message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: 'Welcome to ProfuseCC! We are a customer communication innovator with years of experience delivering exceptional service. To assist you, please provide your email address so we can help you and follow up if needed.',
          sender: 'bot'
        }
      ]);
      setConversationState('awaiting_email');
    }
  }, [isOpen]);

  const storeEmailAndSendConfirmation = async (email) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }
  
      return {
        success: true,
        existing: result.existing || false,
        ...result
      };
  
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const sendConfirmationEmail = async (email) => {
  const startTime = Date.now();
  console.log(`Starting email send to ${email}`);

  try {
    const response = await fetch('/api/chat/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' // Explicitly ask for JSON response
      },
      body: JSON.stringify({ email }),
    });

    const responseTime = Date.now() - startTime;
    console.log(`API response received in ${responseTime}ms`, response);

    if (!response.ok) {
      // First try to parse as JSON, if that fails, get the text
      let errorData;
      try {
        errorData = await response.json();
      } catch (jsonError) {
        const text = await response.text();
        console.error('Failed to parse error response as JSON:', text);
        throw new Error(text || `Request failed with status ${response.status}`);
      }
      
      console.error('Email API error response:', {
        status: response.status,
        errorData
      });
      
      throw new Error(
        errorData.message || 
        errorData.error ||
        `Email failed with status ${response.status}`
      );
    }

    return await response.json();

  } catch (error) {
    console.error('Complete email sending error:', {
      error: error.toString(),
      message: error.message,
      stack: error.stack,
      duration: Date.now() - startTime
    });
    
    // Provide more user-friendly error messages
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Network error - please check your internet connection');
    } else if (error.message.includes('Unexpected token')) {
      throw new Error('Server response format error - our team has been notified');
    } else {
      throw new Error(
        `We couldn't send the confirmation email. ` +
        `Our team will still contact you at ${email}`
      );
    }
  }
};
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
  
    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    setInputValue('');
  
    try {
      if (conversationState === 'awaiting_email') {
        if (!inputValue.includes('@') || !inputValue.includes('.')) {
          setMessages(prev => [
            ...prev,
            { text: 'Please enter a valid email address', sender: 'bot' }
          ]);
          return;
        }
  
        setMessages(prev => [
          ...prev,
          { text: 'Processing your request...', sender: 'bot' }
        ]);
  
        const result = await storeEmailAndSendConfirmation(inputValue);
  
        setMessages(prev => [
          ...prev.filter(m => m.text !== 'Processing your request...'),
          result.existing
            ? { text: '✓ We already have your email', sender: 'bot' }
            : { text: '✓ Thank you for your email!', sender: 'bot' },
          { text: '✓ Confirmation sent to your inbox', sender: 'bot' },
          { text: 'Our team will respond within 24 hours', sender: 'bot' }
        ]);
  
        setEmailProvided(true);
        setConversationState('email_received');
      } else {
        setMessages(prev => [
          ...prev,
          { text: 'Message received!', sender: 'bot' },
          { text: 'We\'ll respond via email shortly', sender: 'bot' }
        ]);
      }
    } catch (error) {
      setMessages(prev => [
        ...prev.filter(m => m.text !== 'Processing your request...'),
        { text: '⚠ Something went wrong', sender: 'bot' },
        { text: error.message.includes('already exists') 
            ? 'We already have your email on file' 
            : error.message,
          sender: 'bot' 
        },
        { text: 'Our team will contact you soon', sender: 'bot' }
      ]);
    }
  };
  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
      {/* Chat toggle button */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#FF0000] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#FF0000]-700 transition-all flex items-center"
          aria-label="Open chat"
        >
          <IoChatbubbles className="text-xl md:text-2xl" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-[90vw] h-[80vh] sm:w-96 sm:h-[32rem] flex flex-col" 
             style={{ maxWidth: 'calc(100vw - 2rem)' }}>
          {/* Chat header with agent info */}
          <div className="bg-[#FF0000] text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <Image 
                src="/assets/testemonial-3.png" 
                alt="User Avatar" 
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2"
              />
              <div>
                <h3 className="font-semibold text-sm md:text-base">ProfuseCC Support</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              aria-label="Close chat"
              className="hover:bg-white hover:bg-opacity-20 p-1 rounded-full"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex ${message.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'} items-end max-w-xs md:max-w-md`}>
                  {/* Avatar */}
                  {message.sender === 'bot' ? (
                    <Image 
                      src="/assets/testemonial-3.png" 
                      alt="Bot Avatar" 
                      width={32}
                      height={32}
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full mr-2"
                    />
                  ) : (
                    <div className="ml-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <FaUserCircle className="text-gray-600 text-lg md:text-xl" />
                    </div>
                  )}
                  
                  {/* Message bubble */}
                  <div
                    className={`px-3 py-2 text-sm md:text-base rounded-lg ${message.sender === 'bot' 
                      ? 'bg-gray-200 text-gray-800 rounded-bl-none' 
                      : 'bg-[#FF0000] text-white rounded-br-none'}`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="p-3 border-t">
            <div className="flex">
              <input
                type={conversationState === 'awaiting_email' ? 'email' : 'text'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={
                  conversationState === 'awaiting_email' 
                    ? 'Your email address...' 
                    : 'Type your message...'
                }
                className="flex-1 border rounded-l-lg px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#FF0000]-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#FF0000] text-white px-3 md:px-4 py-2 rounded-r-lg hover:bg-[#FF0000]-700 text-sm md:text-base"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;