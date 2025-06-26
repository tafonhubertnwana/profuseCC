'use client';
import { motion } from "framer-motion";

const AIServicesSection = () => {
  // Animation variants for the first section
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

  // Tech stack data
  const techStack = [
    {
      title: "Machine Learning & Deep Learning",
      icon: "/assets/ai-1.png",
      tools: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "XGBoost"],
    },
    {
      title: "Natural Language Processing (NLP)",
      icon: "/assets/ai-1.png",
      tools: ["SpaCy", "NLTK", "BERT", "GPT Models"],
    },
    {
      title: "Computer Vision",
      icon: "/assets/ai-1.png",
      tools: ["OpenCV", "YOLO", "Detectron2", "Dlib"],
    },
    {
      title: "AI Cloud Platforms & Services",
      icon: "/assets/ai-1.png",
      tools: [
        "Google AI Platform",
        "AWS AI & ML Services",
        "Microsoft Azure AI",
        "IBM Watson",
      ],
    },
    {
      title: "AI Model Deployment & Optimization",
      icon: "/assets/ai-1.png",
      tools: ["ONNX", "MLflow", "Triton Inference Server", "Kubeflow"],
    },
    {
      title: "General AI Development Languages",
      icon: "/assets/ai-1.png",
      tools: ["Python", "R", "Java", "C++"],
    },
    {
      title: "Specialized AI Languages",
      icon: "/assets/ai-1.png",
      tools: ["Julia", "Scala", "Lisp", "Prolog"],
    },
    {
      title: "Data Engineering & Pipeline Tools",
      icon: "/assets/ai-1.png",
      tools: ["Apache Airflow", "Apache Spark", "Kafka", "Pandas", "Snowflake"],
    },
    {
      title: "AI Testing & Monitoring Tools",
      icon: "/assets/ai-1.png",
      tools: [
        "Evidently AI",
        "WhyLabs",
        "Great Expectations",
        "Fiddler AI",
        "Weights & Biases",
      ],
    },
  ];

  return (
    <>
      {/* First Section */}
      <section className="pt-24 pb-24 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16"
          >
            The Growing Need for AI in Today's Digital World
          </motion.h2>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <motion.li variants={itemVariants}>
              <div className="bg-gray-800 p-8 rounded-lg h-full">
                <p className="text-white text-lg">
                  <strong className="text-4xl font-bold text-blue-400">72%</strong>{" "}
                  of organizations have integrated AI, reflecting a growing global
                  shift toward AI adoption.
                </p>
              </div>
            </motion.li>

            <motion.li variants={itemVariants}>
              <div className="bg-gray-800 p-8 rounded-lg h-full">
                <p className="text-white text-lg">
                  By 2030, the AI technology market is anticipated to exceed{" "}
                  <strong className="text-4xl font-bold text-blue-400">
                    1.8 trillion
                  </strong>{" "}
                  U.S. dollars, marking significant expansion.
                </p>
              </div>
            </motion.li>

            <motion.li variants={itemVariants}>
              <div className="bg-gray-800 p-8 rounded-lg h-full">
                <p className="text-white text-lg">
                  A survey found that{" "}
                  <strong className="text-4xl font-bold text-blue-400">59%</strong>{" "}
                  of organizations experienced revenue growth, while{" "}
                  <strong className="text-4xl font-bold text-blue-400">42%</strong>{" "}
                  saw a decrease in operational costs after adopting AI.
                </p>
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            The Tech Behind Our Artificial Intelligence Development Services
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-16"
          >
            Behind every great AI solution is an even greater tech stack. With our
            custom artificial intelligence development services, we use the best in
            the business to turn raw data into real intelligence.
          </motion.p>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techStack.map((tech, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={tech.icon}
                      alt={tech.title}
                      width={48}
                      height={48}
                      className="mr-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800">
                      {tech.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
};

export default AIServicesSection;