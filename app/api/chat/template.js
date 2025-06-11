import { Html, Head, Body, Container, Section, Text, Link } from '@react-email/components';

export const ChatEmailTemplate = ({ email }) => (
  <Html>
    <Head>
      <title>Thank you for contacting ProfuseCC</title>
      <meta name="description" content="We've received your message and will respond shortly" />
    </Head>
    <Body style={main}>
      <Container style={container}>
        <Section style={logo}>
          <Text style={logoText}>ProfuseCC</Text>
        </Section>
        
        <Section style={content}>
          <Text style={paragraph}>Hello,</Text>
          <Text style={paragraph}>
            Thank you for reaching out to ProfuseCC. We've received your message from 
            the email address <strong>{email}</strong> and our team will get back to 
            you within 24 hours.
          </Text>
          <Text style={paragraph}>
            If you have any urgent inquiries, please don't hesitate to reply to this email.
          </Text>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            © {new Date().getFullYear()} ProfuseCC. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const logo = {
  textAlign: 'center',
  marginBottom: '40px',
};

const logoText = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#FF0000',
};

const content = {
  padding: '0 40px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333333',
  margin: '20px 0',
};

const footer = {
  marginTop: '40px',
  borderTop: '1px solid #e5e5e5',
  paddingTop: '20px',
};

const footerText = {
  fontSize: '12px',
  color: '#999999',
  textAlign: 'center',
};