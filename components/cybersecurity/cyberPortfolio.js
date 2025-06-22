import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BusinessDomains from '../businessDomain';

const Portfolio = () => {
  




  return (
    <div className="">
     
      {/* Industrial Core Competence */}
      <section className="container xl:max-w-7xl w-full mx-auto my-10 p-4">
        <h2 className="text-3xl  font-bold mb-8">Our Industrial Core Competence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Healthcare */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image 
                src="/industry/cyber-9.webp" 
                alt="Healthcare" 
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                Data security and confidentiality are crucial requirements for healthcare providers. By providing you with a safe and well-integrated internal software solution that safeguards your patients' personal information, we at ProfuseCC keep you one step ahead of global standards.
              </p>
            </div>
          </motion.div>

          {/* Service-Based Organizations */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image 
                src="/industry/cyber-10.webp" 
                alt="Service-Based Organizations" 
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Service-Based Organizations</h3>
              <p className="text-gray-600">
                We approach your needs by talking to you about your unique requirements. This platform can help you improve security by helping you understand your present procedures and technologies. You can use Technology solutions to assist in solving complex issues.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* Business Protection Section */}
      <section className="container xl:max-w-7xl w-full mx-auto my-10 p-4">
        <h2 className="text-3xl  font-bold mb-4">
          We don't just Protect Customers and Users. We Also Protect your Business
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your business can benefit greatly from our cyber security services in both monetary and non-monetary ways. Enhancing your security posture will prevent unauthorized access to sensitive, proprietary, and secret corporate information. The correct cyber security practices and policies can boost employee productivity by reducing computer system downtime and enhancing website uptime. Increase the equipment's lifespan and save replacement expenses by safeguarding computers and electronics from viruses. If you boost consumer confidence, you can keep existing clients and draw in new ones.
        </p>

        <h3 className="text-2xl font-bold mb-4">Risk Assessment and Compliance Services</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {/* HIPAA Compliance Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4">
              <Image 
                src="/industry/cyber-15.png" 
                alt="HIPAA Compliance Services" 
                width={64}
                height={64}
                className='filter grayscale brightness-75'
              />
            </div>
            <h3 className="text-xl font-bold mb-4">HIPAA Compliance Services</h3>
            <p className="text-gray-600">
              Healthcare institutions continue to be valuable targets for cybercriminals and identity thieves. Because of this, safeguarding patient information and healthcare information systems are subject to stringent regulations. CSS is a HIPAA compliance expert advisor.
            </p>
          </div>

          {/* CMMC Compliance Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4">
              <Image 
                src="/industry/cyber-16.png" 
                alt="CMMC Compliance Services" 
                width={64}
                height={64}
                className='filter grayscale brightness-75'
              />
            </div>
            <h3 className="text-xl font-bold mb-4">CMMC Compliance Services</h3>
            <p className="text-gray-600">
              We are here to assist Federal and subcontractors with planning and navigating the challenging certification environment. We provide assessments of CMMC readiness as well as professional advising services.
            </p>
          </div>

          {/* Compliance Services SOC 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4">
              <Image 
                src="/industry/cyber-17.png" 
                alt="Compliance Services SOC 2" 
                width={64}
                height={64}
                className='filter grayscale brightness-75'
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Compliance Services SOC 2</h3>
            <p className="text-gray-600">
              We provide advice and SOC2 gap analysis to ensure that the SOC2 attestation audit turns out as well as possible. Your cyber security measures are optimized with the help of CSS consultants.
            </p>
          </div>

          {/* PCI Compliance Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4">
              <Image 
                src="/industry/cyber-18.png" 
                alt="PCI Compliance Services" 
                width={64}
                height={64}
                className='filter grayscale brightness-75'
              />
            </div>
            <h3 className="text-xl font-bold mb-4">PCI Compliance Services</h3>
            <p className="text-gray-600">
              We offer various services to support your attainment and maintenance of PCI compliance. These services for PCI-compliant firms include PCI gap analyses, annual AOCs, help with SAQs, program design for cyber security, and penetration testing.
            </p>
          </div>
        </div>
      </section>

      {/* Security Assessment */}
      <section className="container xl:max-w-7xl w-full mx-auto my-10 p-4">
        <h3 className="text-2xl font-bold mb-4">Security Assessment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Penetration Testing */}
          <div className="bg-[#FF0000] p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4">
              <Image 
                src="/industry/cyber-20.png" 
                alt="Penetration Testing" 
                width={64}
                height={64}
                className='filter grayscale brightness-75'
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Penetration Testing</h3>
            <p className="text-white">
              This real-world illustration illustrates how an attacker could circumvent security measures and obtain elevated privileges in sensitive systems.
            </p>
          </div>

          {/* Application Security Assessment */}
          <div className="bg-[#FF0000] p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4">
              <Image 
                src="/industry/cyber-21.png" 
                alt="Application Security Assessment" 
                width={64}
                height={64}
                className='filter grayscale brightness-75'
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Application Security Assessment</h3>
            <p className="text-white">
              A thorough search for flaws in business logic and vulnerabilities in implementations in all types of applications, large or small, cloud-based and mobile and embedded.
            </p>
          </div>

          {/* Payment Systems Security Assessment */}
          <div className="bg-[#FF0000] p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4">
              <Image 
                src="/industry/cyber-22.png" 
                alt="Payment Systems Security Assessment" 
                width={64}
                height={64}
                className='filter grayscale brightness-75'
              />
            </div>
            <h3 className="text-xl text-white font-bold mb-4">Payment Systems Security Assessment</h3>
            <p className="text-white">
              To find vulnerabilities and probable fraud scenarios that could result in financial transaction manipulation, analyze various payment systems' hardware and software components.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solution */}
      <section className="">
s          <BusinessDomains />
        
      </section>

    
    </div>
  );
};

export default Portfolio;