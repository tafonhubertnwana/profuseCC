
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
  Tailwind,
} from '@react-email/components';
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
    <Tailwind>

      <Html>
        <Head />
        <Preview>Thank you for Consulting  us!</Preview>
        <Body className="bg-white font-sans">
          <Container className="mx-auto p-6 max-w-2xl">
            <Section className="bg-black rounded-t-lg p-6">
                <Heading as="h1" className="text-2xl font-bold text-white mb-2">
                  Thank you for reaching out, {lastName}!
                </Heading>
                <Text className="text-white">
                  We've received your message and our team will get back to you shortly.
                </Text>
              </Section>
              <Section  className="border border-t-0 border-gray-200 rounded-b-lg p-6">
              <Heading as="h2" className="text-lg font-semibold mb-4">
                  Your Consultation Details:
                </Heading>
                <Text className="mb-2">
                <span className="font-medium">Name:</span> {firstName} {lastName}
              </Text>
              <Text className="mb-2">
              <span className="font-medium">Email:</span> {email}
              </Text>
              <Text className="mb-2">
              <span className="font-medium">Phone:</span> {phoneNumber}
              </Text>
              <Text className="mb-2">
              <span className="font-medium">Company:</span>  {company || "N/A"}
              </Text>
              <Text className="mb-2">
              <span className="font-medium">Area of Interest:</span> {interest}
              </Text>
              <Text className="mb-2">
              <span className="font-medium">Date:</span> {date}
              </Text>
              <Text className="mb-2">
              <span className="font-medium">Time:</span> {time}
              </Text>
              {comments && (
                <Text className="mb-2">
                  <span className="font-medium">Comments:</span> {comments}
                </Text>
              )}
              <Hr className="my-6 border-gray-200" />

  <Text className="text-gray-600 text-sm">
    This is an automated message. Please do not reply directly to this email.
  </Text>
              </Section>
            
          
            <Section className="mt-6 text-center text-gray-500 text-xs">
                          <Text>
                            © {new Date().getFullYear()} Your ProfuseCC. All rights reserved.
                          </Text>
                          <Text className="mt-1">
                            <Link target="_blank" href="https://profusecc.ai" className="text-red-600">
                              Visit our website
                            </Link>
                            {' | '}
                            <Link target="_blank" href="https://profusecc.ai/private-policy" className="text-red-600">
                              Privacy Policy
                            </Link>
                             {' | '}
                            <Link target="_blank" href="https://g.page/r/Cde6OzY64HTSEBM/review" className="text-red-600">
                              Google Review
                            </Link>
                          </Text>
                        </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

