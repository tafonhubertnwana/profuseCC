import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
} from "@react-email/components";

export default function ConsultationEmail({
  firstName,
  lastName,
  email,
  phoneNumber,
  company,
  interest,
  date,
  time,
  comments,
}) {
  return (
    <Html>
      <Head />
      <Preview>New Consultation Request</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Consultation Request</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {firstName} {lastName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Phone:</strong> {phoneNumber}
            </Text>
            <Text style={text}>
              <strong>Company:</strong> {company || "N/A"}
            </Text>
            <Text style={text}>
              <strong>Area of Interest:</strong> {interest}
            </Text>
            <Text style={text}>
              <strong>Date:</strong> {date}
            </Text>
            <Text style={text}>
              <strong>Time:</strong> {time}
            </Text>
            {comments && (
              <Text style={text}>
                <strong>Comments:</strong> {comments}
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const h1 = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const section = {
  padding: "24px",
  border: "1px solid #eaeaea",
  borderRadius: "5px",
};

const text = {
  margin: "0 0 10px 0",
  fontSize: "14px",
  lineHeight: "1.4",
  color: "#666666",
};