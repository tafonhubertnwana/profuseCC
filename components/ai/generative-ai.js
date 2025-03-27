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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const services = [
    {
      title: 'Generative AI Consulting',
      description:
        'What are the potential use cases for generative AI within my organization? What AI technology and tools to choose? Are there any untapped opportunities in the AI solutions I am already using? ProfuseCC will guide you through all your concerns and help you maximize the benefits of generative AI for your business innovation.',
      image: '/assets/generative-ai.webp',
    },
    {
      title: 'Generative AI Model Customization',
      description:
        'Do you need to tailor your AI system to their specific industry requirements, unique data, regulatory standards, and performance goals? We specialize in fine-tuning open-source models to meet customer needs, delivering exceptional results in RAG, NL-SQL, and other generative AI applications.',
      image: '/assets/generative-ai-2.webp',
    },
    {
      title: 'Generative AI Integration',
      description:
        'Without expert knowledge, businesses integrating generative AI may face challenges related to quality control, data privacy, bias, legal compliance, etc. Our team seamlessly integrates existing generative AI products and APIs with your customer landscape, ensuring a secure, cost-effective, and efficient deployment of advanced generative AI solutions.',
      image: '/assets/generative-ai-3.webp',
    },
    {
      title: 'AI workshops',
      description:
        'We conduct tailored design thinking sessions that help you grasp your AI opportunities, aligning them with customer needs for user-centric solutions. By outlining the AI value potential tailored to your business, we evaluate and prioritize ideas to structure a customer-centric adoption plan with tangible strategies.',
      image: '/assets/generative-ai-4.webp',
    },
 
  ];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container xl:max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-left text-gray-900 mb-8">
        OUR GENERATIVE AI SERVICES
      </h1>
      <div>

          <motion.div
          
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.2 }}
            className="" // Set equal width and height
          >
        <Slider {...settings} className=""> {/* Add gap between slides */}
          {services.map((service) => (
            <div  key={service.id} className="relative bg-black container xl:max-w-6xl border-2 gap-10 h-[550px] ">

              <Image
                src={service.image}
                alt='generative-ai'
                width={250}
                height={250}
                className="w-full h-44 object-cover  "
              />
              <div className='p-6 '>

                <h2 className="text-2xl font-semibold text-white mb-4 px-4">
                  {service.title}
                </h2>
                <p className="text-white  px-4 pb-4">{service.description}</p>
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
