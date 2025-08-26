'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentProcessor({ paymentData, onPaymentComplete, onCancel }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });
  const [errors, setErrors] = useState({});

  const validateCard = () => {
    const newErrors = {};

    if (!cardData.cardNumber.replace(/\s/g, '')) {
      newErrors.cardNumber = 'Card number is required';
    } else if (cardData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }

    if (!cardData.expiryDate) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(cardData.expiryDate)) {
      newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
    }

    if (!cardData.cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (cardData.cvv.length < 3) {
      newErrors.cvv = 'Please enter a valid CVV';
    }

    if (!cardData.cardholderName.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(' ') : v;
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    return v;
  };

  const handleInputChange = (field, value) => {
    let formattedValue = value;

    if (field === 'cardNumber') formattedValue = formatCardNumber(value);
    else if (field === 'expiryDate') formattedValue = formatExpiryDate(value);
    else if (field === 'cvv') formattedValue = value.replace(/[^0-9]/g, '').substring(0, 4);

    setCardData(prev => ({ ...prev, [field]: formattedValue }));

    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const simulatePayment = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const success = Math.random() > 0.1;
    if (success) {
      const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      return { success: true, transactionId };
    } else {
      return { success: false };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateCard()) return;

    setIsProcessing(true);

    try {
      const result = await simulatePayment();
      onPaymentComplete(result.success, result.transactionId);
    } catch (error) {
      console.error('Payment processing error:', error);
      onPaymentComplete(false);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment</h2>
          <p className="text-gray-600">Complete your purchase securely</p>
        </div>

        {/* Payment Summary */}
        <div className="bg-[#FF0000] text-white rounded-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold">Total Amount</span>
            <span className="text-3xl font-bold">${paymentData.price}</span>
          </div>
          <div className="text-sm opacity-90">
            {paymentData.serviceName} - {paymentData.tierName}
          </div>
          <div className="text-sm opacity-75 mt-1">Customer: {paymentData.name}</div>
        </div>

        {isProcessing ? (
          <div className="text-center py-12">
            <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Processing Payment...</h3>
            <p className="text-gray-600">Please don't close this window</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Cardholder Name *</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.cardholderName ? 'input-error' : ''}`}
                value={cardData.cardholderName}
                onChange={(e) => handleInputChange('cardholderName', e.target.value)}
              />
              {errors.cardholderName && <span className="text-error text-sm mt-1">{errors.cardholderName}</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Card Number *</span>
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.cardNumber ? 'input-error' : ''}`}
                value={cardData.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                maxLength={19}
              />
              {errors.cardNumber && <span className="text-error text-sm mt-1">{errors.cardNumber}</span>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Expiry Date *</span>
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.expiryDate ? 'input-error' : ''}`}
                  value={cardData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  maxLength={5}
                />
                {errors.expiryDate && <span className="text-error text-sm mt-1">{errors.expiryDate}</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">CVV *</span>
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.cvv ? 'input-error' : ''}`}
                  value={cardData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  maxLength={4}
                />
                {errors.cvv && <span className="text-error text-sm mt-1">{errors.cvv}</span>}
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <span className="text-sm font-medium text-green-900">Secure & Encrypted</span>
                  <p className="text-xs text-green-700">256-bit SSL encryption protects your data</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button type="button" onClick={onCancel} className="bg-white font-bold text-black border-2 border-[#FF0000] p-4  flex-1">
                Cancel
              </button>
              <button type="submit" className="bg-[#FF0000] font-bold p-4 text-white flex-1">
                Pay ${paymentData.price}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
