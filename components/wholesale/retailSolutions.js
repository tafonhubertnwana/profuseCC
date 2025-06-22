import { motion } from 'framer-motion';
import Image from 'next/image';

const RetailSolutions = () => {
  const solutions = [
    {
      title: "Ecommerce App Development",
      description: "Feature-rich ecommerce development solutions that allow you to take your retail business to digital platforms while rendering your users with out of the box app experiences.",
      icon: "/industry/whole-9.webp",
    },
    {
      title: "Web Application and Portal",
      description: "Efficient and secure, ecommerce shopping portals design and development services allowing you to cater user-friendly and highly customized shopping experiences to your buyers.",
      icon: "/industry/whole-10.webp",
    },
    {
      title: "B2B eCommerce Solutions",
      description: "We empower your business to business online commerce by giving you a single dashboard that manages your content, orders, inventory, ecommerce shopping cart, billing and even supply chain.",
      icon: "/industry/whole-11.webp",
    },
    {
      title: "B2C eCommerce Solutions",
      description: "Easy to use and secure, we provide you feature-rich development of mobile apps and web portals that give your users dependable platforms to shop from.",
      icon: "/industry/whole-12.webp",
    },
    {
      title: "Full-cycle ERP/CRM Solutions",
      description: "A new age retail mobility solution for exceptional customer relation management and enterprise resource planning systems that allow you to reach your full potential with data and analytics.",
      icon: "/industry/whole-13.webp",
    },
    {
      title: "POS Systems Integration",
      description: "We do a secure point of sale system integration with our ecommerce portal development at the point of inventory, retail ecommerce solutions and ecommerce stores.",
      icon: "/industry/whole-14.webp",
    },
    {
      title: "Inventory Management Solutions",
      description: "A customized inventory management solution allows you to manage your inventory in one go as per your unique needs and requirements.",
      icon: "/industry/whole-15.webp",
    },
    {
      title: "SaaS Enablement",
      description: "A robust software as a service platform that gives you the scalability to take on ecommerce challenges while providing you custom solutions as per your unique needs.",
      icon: "/industry/whole-16.webp",
    },
    {
      title: "Supply Chain Management",
      description: "A feature-rich supply chain management system that gives you the power to manage and take control of your supply chain and always stay ahead in the ecommerce league.",
      icon: "/industry/whole-17.webp",
    },
    {
      title: "IT systems in retail",
      description: "Information systems are the tools, hardware and software that help retailers achieve success in a dynamic environment. They serve several functions including planning, inventory control, managing budgets and sales goals, and also with point of sale transactions and logistics.",
      icon: "/industry/whole-18.webp",
    },
    {
      title: "IoT Retail Solutions",
      description: "IoT Solutions for the Retail Industry. Internet of Things (IoT) solutions are emerging to help retailers personalize the shopping experience. These innovations are supported by high-speed and low-power connectivity improvements.",
      icon: "/industry/whole-19.webp",
    },
    {
      title: "ICT retail",
      description: "Innovations and developments in information and communication technology (ICT) lead to significant and continuous changes in the retail industry. ICT has become crucial for the operations of retail companies and substantially influences their success.",
      icon: "/industry/whole-20.webp",
    }
  ];

  const features = [
    {
      title: "Easy to Access Solutions",
      description: "We make sure the technology doesn't become a complication and our products are easy to use. Our approach is towards efficiency while reducing the perpetual complexities of technology to give you robust vendor management, back-end management inventory management and more.",
      icon: "/industry/whole-21.webp",
    },
    {
      title: "Easy Customization",
      description: "We make sure your unique needs are met with high-end technology and dependable solutions. we don't believe in providing you the cookie-cutter solutions and that reflects in our shopping portal development. We celebrate the uniqueness of our products.",
      icon: "/industry/whole-22.webp",
    },
    {
      title: "Futuristic Solutions",
      description: "We give you the agility and scalability to continuously wish for more in your products. Given the use of cutting-edge technology you don't have to worry about going outdated, you can always leverage our on-going migration, upgradation services to avoid building things from scratch.",
      icon: "/industry/whole-23.webp",
    },
    {
      title: "Comprehensive Support",
      description: "We believe in long term relations and your project is just a start. We help you throughout your business lifecycle where you can come to us for any given assistance needed for our delivered product in terms of maintenance.",
      icon: "/industry/whole-24.webp",
    }
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="container xl:max-w-7xl mx-auto p-4">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Solutions - Retail IT for Retailers
        </motion.h2>

       <motion.p 
  className="text-md mb-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  The retail industry is increasingly adopting advanced IT solutions to enhance efficiency, security, and customer experience. Technologies like NSX Advanced Load Balancer, APEX Cloud Services, and VMware Cloud Foundation offer scalable and secure infrastructure, while tools like Carbon Black ensure robust data protection. Retailers must choose solutions that align with their business size, product types, and customer needs. Key features to consider include versatile payment processing, real-time inventory tracking, and strong customer support options such as live chat or email assistance.
</motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-[#FF0000] text-white p-6 border-2 hover:bg-white hover:text-black transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image 
                    src={solution.icon} 
                    alt={solution.title}
                    layout="fill"
                    objectFit="contain filter grayscale brightness-75"
                  />
                </div>
                <h3 className="text-xl font-bold">{solution.title}</h3>
              </div>
              <p className="">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 ">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="  bg-black  p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#FF0000] p-3  mr-4">
                    <Image 
                      src={feature.icon} 
                      alt={feature.title}
                          width={24}
                    height={24}
                      className='h-12 w-12 filter grayscale brightness-75'
                    />
                  </div>
                  <h3 className="text-xl text-white font-bold">{feature.title}</h3>
                </div>
                <p className="text-white">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RetailSolutions;