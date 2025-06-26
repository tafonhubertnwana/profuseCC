'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CloudFeaturesAndStrategies = () => {
  const characteristics = [
    {
      title: "Self-service on-demand",
      description: "Cloud computing services do not require human administrators. Users can provision, monitor, and manage their computing resources as they need."
    },
    {
      title: "Broad network connectivity",
      description: "Computing services can be accessed over both standard networks and heterogeneous devices."
    },
    {
      title: "Rapid elasticity",
      description: "Computing services must have IT resources that can scale quickly and as often as necessary. It is provided whenever the user requires it and scaled out when it is no longer required."
    },
    {
      title: "Resource pooling",
      description: "IT resources (e.g. servers, storage, networks, applications, services, and storage) are shared among multiple applications and occupants non committedly. The same physical resource can serve multiple clients."
    },
    {
      title: "Measured service",
      description: "Each application and each occupant are tracked to determine how many resources were used. This will give the user and the resource provider an overview of the usage. This information is used for monitoring billing and efficient use of the resource."
    },
    {
      title: "Multi-tenancy",
      description: "Cloud computing can support multiple tenants (users and organizations) using a shared resource set."
    },
    {
      title: "Virtualization",
      description: "Cloud computing providers utilize virtualization technology to abstract the underlying hardware resources from users and present them to them as logical resources."
    }
  ];

  const strategies = [
    {
      icon: '/icons/migration.png',
      title: "MIGRATION",
      description: "Move existing or new applications to your chosen cloud platform to gain better connectivity and reduce performance issues."
    },
    {
      icon: '/icons/consultation.png',
      title: "CONSULTATION",
      description: "It is important to have industry knowledge to select the best cloud platform, architecture, and technology."
    },
    {
      icon: '/icons/deployment.png',
      title: "DEPLOYMENT",
      description: "You can rely on multiple cloud providers, such as AWS and Microsoft, OpenStack, VMware, or OpenStack, for multiple applications."
    },
    {
      icon: '/icons/maintenance.png',
      title: "MAINTENANCE",
      description: "Cyber Infrastructure, CIS, protects your Cloud software environment even in production. We manage cloud assets, monitoring and hardware configuration, and performance optimization."
    },
    {
      icon: '/icons/devops.png',
      title: "DEVOPS",
      description: "CIS uses DevOps to maximize continuous innovation, integration, and development. We manage our internal processes and integrate your internal IT teams."
    },
    {
      icon: '/icons/recovery.png',
      title: "DISASTER RECOVERY",
      description: "CISIN develops innovative disaster recovery plans that minimize data loss and provide the best availability for cloud-based applications."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const strategyItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="bg-white">
      {/* Characteristics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cloud Computing Essential Characteristics
          </motion.h3>
          
          <motion.ul 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {characteristics.map((feature, index) => (
              <motion.li 
                key={index}
                variants={listItemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-500 group-hover:border-blue-600">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Strategies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cloud Adoption Strategies
          </motion.h3>
          
          <motion.ul 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {strategies.map((strategy, index) => (
              <motion.li 
                key={index}
                variants={strategyItemVariants}
                whileHover="hover"
              >
                <div className="h-full bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="mb-6 w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Image 
                      src={strategy.icon} 
                      alt={strategy.title.toLowerCase().replace(' ', '-')} 
                      width={64} 
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider">
                    {strategy.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {strategy.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </div>
  );
};

export default CloudFeaturesAndStrategies;