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

export default function TestimonialEmailTemplate({ 
  name, 
  email, 
  review, 
  rating, 
  position = '', 
  company = '' 
}) {
  // Create star rating display
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>New testimonial submission from {name}</Preview>
        <Body className="bg-white font-sans">
          <Container className="mx-auto p-6 max-w-2xl">
            <Section className="bg-black rounded-t-lg p-6">
              <Heading as="h1" className="text-2xl font-bold text-white mb-2">
                New Testimonial Received!
              </Heading>
              <Text className="text-white">
                You've received a new testimonial submission from {name}.
              </Text>
            </Section>

            <Section className="border border-t-0 border-gray-200 rounded-b-lg p-6">
              <Heading as="h2" className="text-lg font-semibold mb-4">
                Testimonial Details:
              </Heading>

              <div className="mb-4">
                <Text className="font-medium mb-1">Rating:</Text>
                <div className="text-2xl">
                  {renderStars()} 
                  <span className="ml-2 text-sm text-gray-600">
                    ({rating}/5)
                  </span>
                </div>
              </div>

              <Text className="mb-2">
                <span className="font-medium">Name:</span> {name}
              </Text>

              {email && (
                <Text className="mb-2">
                  <span className="font-medium">Email:</span> {email}
                </Text>
              )}

              {position && (
                <Text className="mb-2">
                  <span className="font-medium">Position:</span> {position}
                </Text>
              )}

              {company && (
                <Text className="mb-2">
                  <span className="font-medium">Company:</span> {company}
                </Text>
              )}

              <Hr className="my-4 border-gray-200" />

              <div className="mb-4">
                <Text className="font-medium mb-1">Testimonial:</Text>
                <Text className="whitespace-pre-line bg-gray-50 p-4 rounded">
                  {review}
                </Text>
              </div>

              <Hr className="my-6 border-gray-200" />

              <Text className="text-gray-600 text-sm">
                This testimonial was submitted through your website's testimonial form.
              </Text>
            </Section>

            <Section className="mt-6 text-center text-gray-500 text-xs">
              <Text>
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </Text>
              <Text className="mt-1">
                <Link target="_blank" href="https://profusecc.ai" className="text-red-600">
                  Visit our website
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