import { motion } from "framer-motion";
import Image from "next/image";
import { FaProjectDiagram, FaChartPie, FaCogs, FaUsers } from "react-icons/fa";

const steps = [
  { id: 1, title: "Select A Project", icon: '/assets/process-icon-1.png' },
  { id: 2, title: "Project Analysis", icon: '/assets/process-icon-1.png' },
  { id: 3, title: "Start a Project", icon: '/assets/process-icon-1.png' },
  { id: 4, title: "Deliver to Success", icon: '/assets/process-icon-1.png' },
];

export default function WorkProcess() {
  return (
    <div className="flex flex-col items-center text-center p-10">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-blue-600 font-semibold">WORK PROCESS</motion.p>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-3xl font-bold mt-2">
        Working Process For <span className="text-blue-600">Technology</span>
      </motion.h2>
      
      <div className="flex flex-wrap justify-center items-center mt-10 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex flex-col items-center max-w-xs"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="relative flex items-center justify-center w-24 h-24 rounded-full border border-gray-300 shadow-lg"
              whileHover={{
                rotate: 360,
                transition: { duration: 2, repeat: Infinity, ease: "linear" },
              }}
            >
              <Image 
                src={step.icon} 
                alt={step.title} 
                width={75} 
                height={75}
                className="rounded-full"
              />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">{step.id}</span>
            </motion.div>
            <h3 className="font-bold text-lg mt-4">{step.title}</h3>
            <p className="text-gray-500 text-sm mt-2">We have the technology and IT expertise to develop.</p>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes dottedCircle {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .dotted-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px dashed #3b82f6;
          border-radius: 50%;
          animation: dottedCircle 5s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hovered .dotted-circle {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}