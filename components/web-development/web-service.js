import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  const services = [
    {icon: "/assets/display-code.png",
      title: "Front-end development",
      description: "ProfuseCC uses innovative technologies to seamlessly align your business with customer requirements. Our front-end experts transform UI/UX designs into responsive, fast, and robust web pages, optimized for exceptional performance across all web-oriented devices.",
    },
    {
      icon: "/assets/screen-shield.png",
      title: "Back-end development",
      description: "Our expert team ensures secure, scalable, and efficient back-end solutions that seamlessly integrate with your front-end, providing a solid foundation for your digital success.",
    },
    {
      icon: "/assets/square-terminal.png",
      title: "UX/UI design",
      description: "Our UX/UI designs deliver engaging experiences that leave a lasting impact. With a user-centered approach and design thinking workshops, ProfuseCC creates seamless interactions that align your company’s goals with your customers’ needs.",
    },
    {
      icon: "/assets/users-alt.png",
      title: "Technology consulting & audit",
      description: "From comprehensive system evaluations to expert advice on optimal technology stacks, our team can ensure stable operations and successful performance for your web solutions. Trust our experts to identify issues, review ongoing tech operations, and generate improvement plans tailored to your specific needs.",
    },
    {
      icon: "/assets/quality.png",
      title: "Quality assurance",
      description: "At ProfuseCC, we combine industry-leading practices with our extensive expertise in manual and automated testing to ensure flawless performance, appealing user experiences, and visually stunning web solutions.",
    },
    {
      icon: "/assets/back-up.png",
      title: "Database administration & development",
      description: "Unlock the potential of your business data. Our expert team offers comprehensive DBA services, including architecture and modeling, performance analytics, and data warehouse administration, empowering your business to leverage its data assets for optimal growth and success.",
    },
    {
      icon: "/assets/system-cloud.png",
      title: "Architecture design",
      description: "Our expert team combines industry-leading practices with innovative thinking to create robust and scalable architectural solutions that align with your business objectives.",
    },

    {
      icon: "/assets/api.png",
      title: "Cloud and DevOps",
      description: "Experience the power of integrating development, operations, and quality assurance in one service. ProfuseCC delivers scalable and secure cloud solutions that not only meet your business needs but also accelerate your time to market, giving you a competitive edge in the digital landscape.",
    },
    {
      icon: "/assets/user-headset.png",
      title: "Support services",
      description: "ProfuseCC provides pre-support software audits, optimization, and a full spectrum of maintenance services, including proactive, adaptive, preventive, and corrective measures. We are here to ensure the stability and continuous improvement of your web solutions, providing you with the support you need for sustainable success.",
    },
    {
      icon: "/assets/analyse.png",
      title: "Security services",
      description: "We prioritize the protection of your digital assets. Our expert team employs industry-leading practices and cutting-edge technologies to identify vulnerabilities, implement robust security measures, and safeguard your systems from potential threats.",
    },
    {
      icon: "/assets/optimization.png",
      title: "Infrastructure services",
      description: "At ProfuseCC, we recognize the vital role infrastructure plays in supporting your business goals. Our specialists excel in modeling hardware elements and their relationships within your enterprise, ensuring that your tech solutions align seamlessly and actively drive your success.",
    },
    {
      icon: "/assets/lightbulb-on.png",
      title: "Technology and innovation",
      description: "We fuel technological advancements and foster innovation. With our expertise in cutting-edge technologies such as AR, IoT, Blockchain, BI, and more, we empower businesses to embrace the forefront of innovation.",
    },
  ];

  const sliderSettings
  = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="">
      <h2 className="text-3xl text-orange-600 font-semibold tracking-wide uppercase">
        WEB DEVELOPMENT SERVICES ON OFFER
      </h2>
    </div>
    <div className="mt-10">
        <motion.div
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:  0.2 }}
          className="" // Increased height to ensure image visibility
        >
      <Slider {...sliderSettings} className=""> {/* Add gap between slides */}
        {services.map((service) => (
            <div key={service.id} className="px-3">
              <div className='relative w-full border-2 gap-4 h-[450px] bg-white overflow-visible'>

              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Image
                  src={service.icon}
                  alt="Service Icon"
                  width={80} // Increased width for better visibility
                  height={80} // Increased height for better visibility
                  className="bg-orange-300/50 p-4 object-contain" // Added rounded-full for a circular look
                />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-12">{service.title}</h3>
              <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            </div>
        ))}
      </Slider>
        </motion.div>
    </div>
  </div>
</div>
  );
};

export default Services;