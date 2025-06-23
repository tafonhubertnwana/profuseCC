import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const LogisticsSolutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>ProfuseCC Logistics & Transportation Solutions</title>
        <meta name="description" content="Comprehensive logistics and transportation management solutions" />
      </Head>

      <div className="py-12 container mx-auto px-4 xl:max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-start"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="font-extrabold text-gray-900 sm:tracking-tight text-3xl">
              Benefits Of <span className="text-[#FF0000]">ProfuseCC Logistics</span> & Transportation Solutions
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-lg text-gray-500">
              At an affordable price, you can manage all your logistics operations and transactions on a single database across users, offices and functions, languages, countries and multiple languages.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[ // Repeating content blocks via an array
              {
                img: '/industry/log-27.png',
                alt: 'Operational Efficiency',
                title: 'Stay Connected To Increase Operational Efficiency',
                text: 'The application monitors and manages the driver\'s trips. It also ensures that commercial motor vehicles such as cars, vans, trucks, special vehicles and trailers perform well. Diverse organizations can make better deProfuseCCions about asset and capital planning.',
              },
              {
                img: '/industry/log-28.png',
                alt: 'Customer Demands',
                title: 'Respond Proactively To Customer Demands',
                text: 'Connect with your users in an interactive way that responds instantly to regulatory and inventory requirements. You can manage your business with an easy-to-use backend while your customers get an interactive booking platform.',
              },
              {
                img: '/industry/log-29.png',
                alt: 'Vehicle Tracking',
                title: 'Vehicle Tracking Application',
                text: 'With your smartphone, you can intelligently track the location of vehicles and your workforce. Our GPS fleet management and vehicle tracking solutions for smartphones provide you with a real-time map of your site.',
              },
            ].map((item, i) => (
              <motion.section
                key={i}
                variants={itemVariants}
                className="bg-white p-8 rounded-sm shadow-lg "
              >
                <div className="">
                  <div className="flex justify-center">
                    <div className="relative w-40 h-40">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        className="object-contain filter grayscale brightness-75"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LogisticsSolutions;
