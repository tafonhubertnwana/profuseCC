import { motion } from 'framer-motion';
import Image from 'next/image';

const CloudServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const features = [
    {
      image: "/assets/cloud-1.png",
      title: "Enhanced Productivity",
      description:
        "Deliver high-quality work anywhere, from any internet-connected device.",
    },
    {
      image: "/assets/cloud-2.png",
      title: "Improved Data Security",
      description:
        "Keep your business data safe with effective, up-to-date cybersecurity and backup solutions.",
    },
    {
      image: "/assets/cloud-3.png",
      title: "Massive Cost Savings",
      description: "Save big on hardware maintenance and electricity costs.",
    },
    {
      image: "/assets/cloud-4.png",
      title: "Ongoing Expert Management",
      description:
        "Stay efficient and ahead of the curve with routine software upgrades and updates.",
    },
    {
      image: "/assets/cloud-5.png",
      title: "24/7 Support",
      description:
        "Work with confidence knowing that the Prodigy Technology Solutions teams are on standby to solve any of your IT problems.",
    },
  ];
  return (
    <>
     <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src="/assets/aws-img.jpg"
                alt="Cloud Services"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              Agility is at the heart of today’s business success. That’s why organizations of all sizes are adopting cloud technology – so their teams can easily and securely collaborate and deliver quality work anywhere, on any internet-connected device. But without expert planning and execution, cloud migration can easily expose you to data breaches and create expensive, productivity-sapping problems.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    <motion.div
      className="my-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left mb-8"
            variants={itemVariants}
          >
            With ProfuseCC’ Cloud Services, you’ll enjoy:
          </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <motion.div className="space-y-6" variants={itemVariants}>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white border-b-2 border-orange-400 flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-16 h-16">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center w-full"
          variants={itemVariants}
        >
          <Image
            src="/assets/aws-img-1.jpg"
            alt="Cloud Services"
            width={500}
            height={500}
            className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default CloudServices;