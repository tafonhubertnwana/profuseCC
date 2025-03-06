import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Front-end development",
      description: "LeverX uses innovative technologies to seamlessly align your business with customer requirements. Our front-end experts transform UI/UX designs into responsive, fast, and robust web pages, optimized for exceptional performance across all web-oriented devices.",
    },
    {
      title: "Back-end development",
      description: "Our expert team ensures secure, scalable, and efficient back-end solutions that seamlessly integrate with your front-end, providing a solid foundation for your digital success.",
    },
    {
      title: "UX/UI design",
      description: "Our UX/UI designs deliver engaging experiences that leave a lasting impact. With a user-centered approach and design thinking workshops, LeverX creates seamless interactions that align your company’s goals with your customers’ needs.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">WEB DEVELOPMENT SERVICES ON OFFER</h2>
        </div>
        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;