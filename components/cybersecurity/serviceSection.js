import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function CyberSecurity() {
  const securityServices = [
    {
      title: "Smart Security Operations Center",
      description: "Complete Range of Sophisticated Security Capabilities",
      image: "/assets/api.png" // Replace with your actual image path
    },
    {
      title: "Cyber Security Assessment",
      description: "Making You Ready for Real-Life Security Attacks",
      image: "/assets/api.png" // Replace with your actual image path
    },
    {
      title: "Hacking Simulation",
      description: "Test How Secure You Really Are",
      image: "/assets/api.png" // Replace with your actual image path
    },
    {
      title: "Employee Training",
      description: "Train Your Employees to be the First Line of Defense",
      image: "/assets/api.png" // Replace with your actual image path
    }
  ];

  return (
    <>
      <Head>
        <title>Cyber Security Solutions | ProfuseCC</title>
        <meta name="description" content="Complete IT Security Solutions from ProfuseCC, the leading name in Cyber Security" />
      </Head>

      <main className="min-h-screen bg-[#FF0000]">
        {/* Hero Section */}
        <section className="container xl:max-w-6xl mx-auto p-4">
          <div className="text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Your Business Assets Are <span className="text-black">'Secure'</span> With ProfuseCC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-white"
            >
              You are only making it easier for cyber security to slip your mind. Are you willing to take that chance?
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl mb-12 text-white"
            >
              We are <span className="font-bold text-black">ProfuseCC</span>, the leading name in the Cyber Security Companies offering you complete IT Security Solutions.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className=" p-6 border "
              >
                <div className="relative h-12 w-12 mb-4  overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                     className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Why ProfuseCC Section */}
          <div className="">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8 text-left text-white"
            >
              Why ProfuseCC For Cyber Security?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" py-4 "
            >
              <p className="mb-4 text-white">
                ProfuseCC is a cyber security service provider with experience in various investigative and criminal security solutions. Our team of ethical hackers has the expertise and technical background needed to guarantee the security of your business's internal internet-based activities.
              </p>
              <p className="mb-4 text-white">
                A worry-free corporate life is now possible thanks to sterile technological solutions that combat today's cyber threats. With our design knowledge and the best security technologies, we can offer Cyber Security as a Service to safeguard your business operations. Corporate training, cyber security evaluation, and advisory are all examples of cybersecurity solutions.
              </p>
              <p className="font-semibold text-white">
                Our main competencies are healthcare, telecommunications, financial services, and industrial production.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}