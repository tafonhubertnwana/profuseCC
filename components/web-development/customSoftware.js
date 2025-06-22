import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const serviceItems = [
  {
    id: 1,
    title: "Enterprise Software Development",
    icon: "/industry/soft-9.png",
    description: "Enterprise software development is a part of our custom software development services. It is essential for driving efficiency, boosting productivity, and encouraging innovation within large organizations.",
    details: "Our experienced developers employ cutting-edge technologies and programming languages like Java, .NET, and Python to design secure, scalable software architectures. To streamline workflows, we incorporate containerization through Docker, orchestration via Kubernetes, and development frameworks like React."
  },
  {
    id: 2,
    title: "Software Product Development",
    icon: "/industry/soft-10.png",
    description: "Our custom software developers provide software product development services that are all about turning innovative ideas into market-ready products.",
    details: "Our custom software developers handle every step of the development process-from gathering requirements and analyzing systems to design, coding, testing, migration, and deployment. We use Python, Ruby on Rails, and React, to deliver high-quality custom software."
  },
  {
    id: 3,
    title: "API Development",
    icon: "/industry/soft-11.png",
    description: "Robust APIs are key to enabling remote access to products or devices and ensuring seamless communication with cloud-based backend systems.",
    details: "Our custom software developers excels in designing and deploying high-performance APIs using RESTful and GraphQL frameworks. Each API includes detailed documentation with Swagger and undergoes rigorous testing with Postman to meet compliance and security standards."
  },
  {
    id: 4,
    title: "SaaS Development",
    icon: "/industry/soft-12.png",
    description: "Software as a Service (SaaS) is a widely adopted cloud-based model that enables users to access applications online without requiring installation or local storage.",
    details: "Our custom software developers utilize advanced technologies such as microservices architecture, serverless computing, and containerization to develop scalable custom SaaS solutions."
  },
  {
    id: 5,
    title: "Software Integration Services",
    icon: "/industry/soft-13.png",
    description: "Software integration simplifies workflows by linking different systems so they can communicate and share information effortlessly.",
    details: "Our integration specialists leverage top platforms like MuleSoft, Apache Camel, and Dell Boomi to connect your applications without a hitch."
  },
  {
    id: 6,
    title: "Custom Software Security",
    icon: "/industry/soft-14.png",
    description: "Security is at the core of all our custom software development services.",
    details: "Every custom software we develop undergoes penetration testing with automated tools, both prior to launch and following any updates. Our modern, containerized approach to app development simplifies vulnerability testing."
  }
];

const technologyItems = [
  {
    id: 1,
    title: "Python",
    icon: "/industry/soft-15.png",
    hoverIcon: "/images/empLogo1_H.png",
    description: "Get exceptional web and mobile solutions from a top-tier development team specializing in Python.",
    highlights: [
      "Python Expertise: Our team has in-depth knowledge of Python and follows industry best practices.",
      "Proven Success: With a strong track record, we consistently deliver outstanding Python projects.",
      "Customized Solutions: We take the time to understand your unique needs and develop tailored solutions."
    ]
  },
  {
    id: 2,
    title: "PHP",
    icon: "/industry/soft-16.png",
    hoverIcon: "/images/empLogo2_H.png",
    description: "PHP is a powerful server-side scripting language built for flexibility in web design and development.",
    highlights: [
      "Extensive PHP Knowledge: Our team brings years of experience in building PHP-based solutions.",
      "Personalized Approach: We design applications that align with your specific requirements."
    ]
  },
  {
    id: 3,
    title: "Microsoft",
    icon: "/industry/soft-17.png",
    hoverIcon: "/images/empLogo3_H.png",
    description: "Empower your organization with custom software development services using Microsoft technologies.",
    highlights: [
      "Web Applications: Crafting custom web applications to elevate user experience.",
      "Enterprise Solutions: Developing scalable, robust software for business operations.",
      "Portal Development: Building streamlined, user-focused portals."
    ]
  },
  {
    id: 4,
    title: "Java",
    icon: "/industry/soft-18.png",
    hoverIcon: "/images/empLogo4_H.png",
    description: "Our custom software developers excel in crafting custom Java applications tailored to your business objectives.",
    highlights: [
      "Versatile Applications: From mobile and desktop apps to advanced management systems.",
      "Java Expertise: Deep understanding of Java's capabilities.",
      "Competitive Advantage: Solutions that give you a clear edge in the market."
    ]
  },
  {
    id: 5,
    title: "Mobile",
    icon: "/industry/soft-19.png",
    hoverIcon: "/images/empLogo5_H.png",
    description: "As your dedicated partner in mobile app development, we provide end-to-end services.",
    highlights: [
      "All Types of Apps: From consumer apps to enterprise solutions.",
      "Comprehensive Support: From concept to launch and ongoing support."
    ]
  },
  {
    id: 6,
    title: "eCommerce",
    icon: "/industry/soft-20.png",
    hoverIcon: "/images/empLogo6_H.png",
    description: "Our eCommerce development services are designed to adapt to your market needs.",
    highlights: [
      "Customer-Centric: Intuitive, user-friendly apps that boost sales.",
      "Operational Efficiency: Integrated inventory, shipping, and key functions.",
      "Fast Market Entry: Swift, efficient launch of your marketplace."
    ]
  },
  {
    id: 7,
    title: "Open Source",
    icon: "/industry/soft-21.png",
    hoverIcon: "/images/empLogo7_H.png",
    description: "We leverage proven open-source technologies to build custom software.",
    highlights: [
      "Tailored Solutions: Built specifically for your requirements.",
      "Expert Development Team: Skilled in creating transformative solutions.",
      "Cost-Effective: High-quality solutions at competitive prices."
    ]
  },
  {
    id: 8,
    title: "SAP",
    icon: "/industry/soft-22.png",
    hoverIcon: "/images/empLogo8_H.png",
    description: "We understand that SAP implementations can be complex.",
    highlights: [
      "Deep Understanding: We analyze your business to tailor the ideal SAP setup.",
      "Smooth Transition: Risk-free, seamless rollout.",
      "Cost Efficiency: Streamlined SAP processes for long-term savings."
    ]
  },
  {
    id: 9,
    title: "IOT",
    icon: "/industry/soft-23.png",
    hoverIcon: "/images/empLogo9_H.png",
    description: "Our custom IoT software is tailored to address specific industry challenges.",
    highlights: [
      "Custom IoT Solutions: Designed for your unique business needs.",
      "Complete Integration: Manage both software and hardware.",
      "Results-Driven: Enhancing efficiency and performance."
    ]
  },
  {
    id: 10,
    title: "AI/ BI",
    icon: "/industry/soft-24.png",
    hoverIcon: "/images/empLogo10_H.png",
    description: "Harness the power of AI to transform your operations.",
    highlights: [
      "Real Problem-Solving: Address your unique business challenges.",
      "Enhanced Efficiency: Automate tasks and improve decision-making.",
      "Improved Customer Experiences: Better interactions and relationships."
    ]
  },
  {
    id: 11,
    title: "Cloud",
    icon: "/industry/soft-25.png",
    hoverIcon: "/images/empLogo11_H.png",
    description: "Embrace the cloud to streamline your business and work smarter.",
    highlights: [
      "Modernize Processes: Replace outdated systems with cloud solutions.",
      "Secure Access: Access data securely from anywhere.",
      "Increased Productivity: Automate tasks and focus on growth."
    ]
  },
  {
    id: 12,
    title: "Blockchain",
    icon: "/industry/soft-26.png",
    hoverIcon: "/images/empLogo12_H.png",
    description: "We go beyond building blockchain systems-we help you determine if blockchain is right for you.",
    highlights: [
      "Transparent Transactions: Complete visibility into processes.",
      "Reliable Automation: Speed up and secure processes.",
      "Data Security: Enhanced protection with blockchain."
    ]
  }
];

const advantages = [
  {
    id: 1,
    title: "Full product ownership",
    icon: "/industry/soft-1.png",
    hoverIcon: "/images/bcsLogo1_H.png"
  },
  {
    id: 2,
    title: "Guaranteed software quality",
    icon: "/industry/soft-2.png",
    hoverIcon: "/images/bcsdLogo4_H.png"
  },
  {
    id: 3,
    title: "Flexibility in utilizing your custom software",
    icon: "/industry/soft-3.png",
    hoverIcon: "/images/bcmsLogo6_H.png"
  },
  {
    id: 4,
    title: "Use of advanced tech stacks",
    icon: "/industry/soft-4.png",
    hoverIcon: "/images/bcmsLogo5_H.png"
  },
  {
    id: 5,
    title: "Transparent communication and reporting",
    icon: "/industry/soft-5.png",
    hoverIcon: "/images/bcsdLogo2_H.png"
  },
  {
    id: 6,
    title: "Reliable after-sales support",
    icon: "/industry/soft-6.png",
    hoverIcon: "/images/bbiLogo1_H.png"
  },
  {
    id: 7,
    title: "Consistent agile delivery",
    icon: "/industry/soft-7.png",
    hoverIcon: "/images/btcsLogo6_H.png"
  },
  {
    id: 8,
    title: "Proven success in creating MVPs",
    icon: "/industry/soft-8.png",
    hoverIcon: "/images/helpDeskSLogo6_H.png"
  }
];

export default function CustomSoftware() {
  return (
    <>
      <Head>
        <title>Custom Software Development Services | ProfuseCC</title>
        <meta name="description" content="Boost your business's digital transformation with our custom software development services. Enterprise solutions, SaaS, API development and more." />
      </Head>

      {/* Hero Section */}
      <section className=" py-10  px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="container xl:max-w-7xl mx-auto p-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl  font-bold mb-6">
              Boost Your Business's Digital Transformation with Custom Software Development Service
            </h1>
            <p className="mb-4 ">
              We offer custom software and mobile app development for both desktop (web) and mobile devices. Our services include a full-cycle software development from conception to implementation to maintenance.
            </p>
            <p className="">
              Our software developers craft custom software solutions that meticulously follow your unique business processes, so the end product can bring real tangible value to your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="container xl:max-w-7xl mx-auto p-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceItems.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className=" p-3  mr-4">
                      <Image src={service.icon} alt={service.title} width={150} height={150} className="w-12 h-12 filter grayscale brightness-75" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FF0000]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-gray-600">{service.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="container xl:max-w-7xl mx-auto p-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Technologies We Use to Provide Custom Software Development Service
            </h2>
            <p className="text-lg md:text-xl max-w-4xl">
              Discover the tools we use for custom software development services that help you achieve your goals.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologyItems.map((tech) => (
              <motion.div
                key={tech.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-[#FF0000]  backdrop-filter backdrop-blur-lg rounded-sm p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="relative group">
                    <Image src={tech.icon} alt={tech.title} width={150} height={150}  className="w-12 h-12 group-hover:opacity-0 transition-opacity filter grayscale brightness-75" />
                    <Image src={tech.hoverIcon} alt={tech.title} width={150} height={150}  className="w-12 h-12 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-white">{tech.title}</h3>
                </div>
                <p className="text-opacity-90 mb-4 text-white">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-white">
                      <svg className="w-4 h-4 text-white mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-opacity-80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FF0000]">
        <div className="container xl:max-w-7xl mx-auto p-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl text-white md:text-4xl font-bold  mb-4">
              Why Choose ProfuseCC for Custom Software Development Services?
            </h2>
            <p className="text-lg text-white max-w-4xl mb-6">
              As a dedicated custom software development company, ProfuseCC provides high-quality, custom software solutions for web and mobile platforms. Our in-house teams handle everything from design and development to deployment and maintenance, always aligned with clearly defined requirements.
            </p>
            <p className="text-lg text-white max-w-4xl">
              Our custom software development services include requirements gathering, ideation, system architecture for iterative releases, creating clean, testable code, and rigorous quality testing. What sets our custom software development services apart is our commitment to building scalable, robust software products through quality engineering, modern app modernization techniques, and a steadfast focus on agile and CI/CD principles throughout the development lifecycle.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl text-white font-bold ">
              Key Advantages Working with ProfuseCC:
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {advantages.map((advantage) => (
              <motion.div
                key={advantage.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative group mb-4">
                    <Image src={advantage.icon} alt={advantage.title} width={150} height={150} className="w-14 h-14  transition-opacity filter grayscale brightness-50" />
                  </div>
                  <h4 className="text-lg font-semibold ">{advantage.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}