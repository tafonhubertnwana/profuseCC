import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function GenerativeAISlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For larger tablets and small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For standard tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        },
      },
    ],
  };

  const services = [
    {
      id: 1,
      title: 'Generative AI Consulting',
      description:
        'What are the potential use cases for generative AI within my organization? What AI technology and tools to choose? Are there any untapped opportunities in the AI solutions I am already using? ProfuseCC will guide you through all your concerns and help you maximize the benefits of generative AI for your business innovation.',
      image: '/assets/generative-ai.webp',
    },
    {
      id: 2,
      title: 'Generative AI Model Customization',
      description:
        'Do you need to tailor your AI system to their specific industry requirements, unique data, regulatory standards, and performance goals? We specialize in fine-tuning open-source models to meet customer needs, delivering exceptional results in RAG, NL-SQL, and other generative AI applications.',
      image: '/assets/generative-ai-2.webp',
    },
    {
      id: 3,
      title: 'Generative AI Integration',
      description:
        'Without expert knowledge, businesses integrating generative AI may face challenges related to quality control, data privacy, bias, legal compliance, etc. Our team seamlessly integrates existing generative AI products and APIs with your customer landscape, ensuring a secure, cost-effective, and efficient deployment of advanced generative AI solutions.',
      image: '/assets/generative-ai-3.webp',
    },
    {
      id: 4,
      title: 'AI workshops',
      description:
        'We conduct tailored design thinking sessions that help you grasp your AI opportunities, aligning them with customer needs for user-centric solutions. By outlining the AI value potential tailored to your business, we evaluate and prioritize ideas to structure a customer-centric adoption plan with tangible strategies.',
      image: '/assets/generative-ai-4.webp',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container xl:max-w-7xl mx-auto p-2"
      >
        <h1 className="text-4xl font-bold text-left text-gray-900 mb-8">
          OUR GENERATIVE AI SERVICES
        </h1>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Slider {...settings} className="mx-2">
              {services.map((service) => (
                <div key={service.id} className="px-2"> {/* Add horizontal padding for gap */}
                  <div className="relative bg-black h-[550px] border-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={250}
                      height={250}
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-white pb-4">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}