import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const WeLeadInPage = () => {
  const leadItems = [
    {
      id: 1,
      title: "Smart Security Operations Center",
      description: "Get ahead of your security threats by residing in the most cutting-edge security systems. We deliver real intelligence from our security operations center. It is easy to adapt and monitor, actively respond to cyber incidents, gather intelligence systems, analyze important security aspects, etc.",
      image: "/industry/cyber-5.webp",
      alt: "Software Development Services"
    },
    {
      id: 2,
      title: "Cyber Security Evaluation",
      description: "We at CIS are sensitive to your organization's weaknesses and loopholes in cyber defenses. We can help you strengthen your security by analyzing potential threats and laying strong solutions to possible attacks.",
      image: "/industry/cyber-6.jpg",
      alt: "Software Development Services"
    },
    {
      id: 3,
      title: "Simulated Hacking Realistic",
      description: "We protect sensitive and confidential information at all costs. We offer practical IT solutions to protect your confidential information. Ethical hacking protects your Cyber security solutions company's data, internal information and organization processes from cyber threats.",
      image: "/industry/cyber-7.webp",
      alt: "Software Development Services"
    },
    {
      id: 4,
      title: "Training for employees",
      description: "IT Security Solutions can be integral to any organization's cyber security system. Training and educating your employees to support and contribute to security is important.",
      image: "/industry/cyber-8.jpg",
      alt: "Software Development Services"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>We Lead In | Your Company Name</title>
        <meta name="description" content="Discover our leading services in security operations, cyber security evaluation, ethical hacking, and employee training." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-7xl p-2">
        <motion.h2 
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We lead In
        </motion.h2>

        <motion.div 
          className="mt-16 space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {leadItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              variants={itemVariants}
            >
              <div className="w-full md:w-1/2">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={680}
                    height={380}
                    className="rounded-sm shadow-sm object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default WeLeadInPage;