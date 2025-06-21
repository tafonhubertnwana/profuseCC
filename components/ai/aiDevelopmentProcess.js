import { motion } from "framer-motion";
import Image from "next/image";

const AIDevelopmentProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Book a Free Discovery Call",
      description: "Start with a conversation. We listen to your challenges, goals, and vision to understand how AI can make a real difference for your business.",
    },
    {
      number: "2",
      title: "Get Expert AI Developers",
      description: "Our team of skilled AI developers takes the reins, using the latest technologies and models to create a tailored AI solution that fits your needs.",
    },
    {
      number: "3",
      title: "Build & Scale",
      description: "Once the AI is developed and optimized, we help you deploy, monitor, and scale it to deliver maximum impact, continuously improving to meet new challenges.",
    },
  ];

  const benefits = [
    {
      title: "Years of Hands-On AI Experience",
      description: "With a proven track record, we've built and deployed AI solutions that solve real-world challenges across multiple industries.",
    },
    {
      title: "No More AI Bias",
      description: "Our AI models are designed to be fair, ethical, and unbiased, ensuring accurate and responsible decision-making.",
    },
    {
      title: "Faster, Smarter AI Models",
      description: "We fine-tune AI for top-notch performance, so you get quick, reliable, and efficient results without delays.",
    },
    {
      title: "Handles Big Data with Ease",
      description: "Our AI solutions process massive amounts of data smoothly, helping you uncover insights without slowdowns.",
    },
    {
      title: "Built to Scale",
      description: "Whether you're a startup or an enterprise, our AI solutions grow with you, ensuring they remain fast and efficient as your business expands.",
    },
    {
      title: "Easy Integration, Zero Disruptions",
      description: "Our AI seamlessly fits into your existing systems, so you can boost efficiency without any downtime.",
    },
    {
      title: "Rock-Solid Security & Compliance",
      description: "Your AI is protected against cyber threats and built to comply with global data security regulations.",
    },
  ];

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
      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h3 
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our AI Development Process in 3 Simple Steps
          </motion.h3>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold mb-6">
                  {step.number}
                </span>
                <h4 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://www.cisin.com/images/hitechTbImg.jpg"
                alt="software development services"
                width={1000}
                height={667}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-8 text-gray-800">
                Why We Are the Right Artificial Intelligence Development Partner
              </h3>
              <p className="text-lg mb-8 text-gray-600">
                Smarter AI starts with the right team. With deep experience and cutting-edge tech, we make AI work the way it should.
              </p>

              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-lg font-semibold text-gray-800">{benefit.title}</strong>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIDevelopmentProcess;