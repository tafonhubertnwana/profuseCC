'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import { Menu } from '@headlessui/react';
import { FaAnglesDown } from "react-icons/fa6";

const ITEMS = ['FRONTEND', 'BACKEND', 'DATABASES', 'INTEGRATIONS', 'DEVOPS', 'QUALITY ASSURANCE', 'ADVANCED TECHNOLOGIES', 'TOOLS'];

const SERVICES ={
  FRONTEND: [
    {name: "HTML5", icon: "/assets/html.webp"},
    {name: "CSS", icon: "/assets/css.webp"},
    {name: "JavaScript", icon: "/assets/js.webp"},
    {name: "TypeScript", icon: "/assets/typescript.png"},
    {name: "React", icon: "/assets/react.webp"},
    {name: "Next.js", icon: "/assets/next.png"},
    {name: "TailwindCSS", icon: "/assets/tailwind.png"},
    {name: "Bootstrap", icon: "/assets/bootstrap.png"},
    {name: "Material-UI", icon: "/assets/material-ui.png"},
    {name: "Framer-Motion", icon: "/assets/framer-motion.png"},
    {name: "Redux", icon: "/assets/redux.png"},
  
  ],
  BACKEND: [
    {name: "Node.js", icon: "/assets/node.png"},
    {name: "Express", icon: "/assets/express.png"},
    {name: "Python", icon: "/assets/python.png"},
    {name: "Django", icon: "/assets/django.png"},
    {name: "Flask", icon: "/assets/flask.png"},
  
    {name: "Spring Boot", icon: "/assets/spring.png"},
    {name: "NestJS", icon: "/assets/nestjs.png"},
    {name: "FastAPI", icon: "/assets/fastapi.png"},
    
  ],
  DATABASES: [
    {name: "PostgreSQL", icon: "/assets/postgre.jpeg"},
    {name: "MongoDB", icon: "/assets/mongo.jpeg"},
    {name: "MySQL", icon: "/assets/sql.png"},
    {name: "Firebase", icon: "/assets/firebase.png"},
    {name: "Redis", icon: "/assets/redis.png"},
    {name: "SQLite", icon: "/assets/sqlite.png"},
    {name: "Elasticsearch", icon: "/assets/elasticsearch.png"},
    {name: "DynamoDB", icon: "/assets/dynamodb.png"}
  ],
  INTEGRATIONS: [
    {name: "REST APIs", icon: "/assets/rest.png"},
    {name: "GraphQL", icon: "/assets/graphql.png"},
    {name: "WebSockets", icon: "/assets/websocket.png"},
    {name: "OAuth", icon: "/assets/oauth.png"},
    {name: "JWT", icon: "/assets/jwt.png"},
    {name: "Stripe API", icon: "/assets/stripe.png"},
    {name: "PayPal API", icon: "/assets/paypal.png"},
    {name: "Twilio API", icon: "/assets/twilio.png"}
  ],
  DEVOPS: [
    {name: "Docker", icon: "/assets/docker.png"},
    {name: "Kubernetes", icon: "/assets/kubernetes.png"},
    {name: "CI/CD Pipelines", icon: "/assets/ci-cd.png"},
    {name: "Jenkins", icon: "/assets/jenkins.png"},
    {name: "GitHub Actions", icon: "/assets/github-actions.png"},
    {name: "GitLab CI/CD", icon: "/assets/gitlab.png"},
    {name: "AWS", icon: "/assets/aws.png"},
    {name: "Azure", icon: "/assets/azure.png"},
    {name: "Google Cloud", icon: "/assets/gcp.png"},
    {name: "Terraform", icon: "/assets/terraform.png"},
   
  ],
  'QUALITY ASSURANCE': [
    {name: "Jest", icon: "/assets/jest.png"},
    {name: "Cypress", icon: "/assets/cypress.png"},
    {name: "Selenium", icon: "/assets/selenium.png"},
    {name: "Mocha", icon: "/assets/mocha.png"},
    
    {name: "Testing Library", icon: "/assets/testing-library.jpeg"},
    {name: "JUnit", icon: "/assets/junit.png"},
    {name: "Postman", icon: "/assets/postman.png"},
    {name: "JMeter", icon: "/assets/jmeter.png"}
  ],
  'ADVANCED TECHNOLOGIES': [
    {name: "AI/ML", icon: "/assets/ai-ml.jpeg"},
    {name: "Blockchain", icon: "/assets/blockchain.png"},
    {name: "IoT", icon: "/assets/iot.png"},
    {name: "Web3", icon: "/assets/web3.png"},
    {name: "Solidity", icon: "/assets/solidity.jpeg"},
    {name: "TensorFlow", icon: "/assets/tensorflow.png"},
    {name: "PyTorch", icon: "/assets/pytorch.png"}
  ],
  TOOLS: [
    {name: "Git", icon: "/assets/git.png"},
    {name: "VS Code", icon: "/assets/vscode.jpeg"},
    {name: "Webpack", icon: "/assets/webpack.png"},
    {name: "Canvas", icon: "/assets/canvas.jpeg"},
    {name: "JPT NoteBook", icon: "/assets/notebook.png"},
    {name: "ESLint", icon: "/assets/eslint.png"},
    {name: "Prettier", icon: "/assets/prettier.png"},
    {name: "Figma", icon: "/assets/figma.png"},
    {name: "Adobe XD", icon: "/assets/adobe-xd.png"},
    {name: "Jira", icon: "/assets/jira.png"},
    {name: "Trello", icon: "/assets/trello.png"},
    {name: "Slack", icon: "/assets/slack.png"}
  ]
}

const TechnologyStack = () => {
 
  const [selectedItem, setSelectedItem] = useState(ITEMS[0]);
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="container xl:max-w-7xl mx-auto p-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-[#FF0000] mb-6">
            TECHNOLOGY STACK
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            Explore our comprehensive technology stack designed to deliver cutting-edge solutions for your business needs.
          </p>
        </motion.div>

        <div className="container xl:max-w-6xl mx-auto pt-10">
               <div className="md:grid md:grid-cols-2 gap-8 flex flex-col">
               <div className="space-y-3 text-left hidden md:block">
         {ITEMS.map((item, index) => (
           <motion.p 
             key={index} 
             className={`font-medium cursor-pointer px-4 py-2 rounded-md transition-colors ${
               selectedItem === item 
                 ? 'bg-[#FF0000] text-white'  // Active item style
                 : 'text-white hover:bg-gray-200 hover:text-black'  // Inactive item style
             }`} 
             initial={{ opacity: 0, x: -20 }} 
             animate={{ opacity: 1, x: 0 }} 
             transition={{ delay: index * 0.1, duration: 0.5 }} 
             onClick={() => setSelectedItem(item)}
           >
             {item}
           </motion.p>
         ))}
       </div>
                {/* Mobile Dropdown */}
       <div className="md:hidden">
         <Menu as="div" className="relative">
           <Menu.Button className="w-full bg-gray-700 text-white px-4 py-2 rounded-md text-left flex justify-between items-center">
             {selectedItem}
             <FaAnglesDown className="h-5 w-5" />
           </Menu.Button>
           <Menu.Items className="absolute left-0 mt-2 w-full bg-gray-700 text-white rounded-md shadow-lg overflow-hidden">
             {ITEMS.map((item, index) => (
               <Menu.Item key={index}>
                 {({ active }) => (
                   <div 
                     className={`px-4 py-3 transition-colors ${
                       selectedItem === item 
                         ? 'bg-[#FF0000] text-white font-medium'  // Active item style (matches desktop)
                         : active 
                           ? 'bg-gray-600 text-white'  // Hover state
                           : 'text-gray-200'  // Default state
                     }`}
                     onClick={() => setSelectedItem(item)}
                   >
                     {item}
                   </div>
                 )}
               </Menu.Item>
             ))}
           </Menu.Items>
         </Menu>
       </div>
       
       <motion.div 
         className="bg-white shadow-md rounded-lg p-6 flex justify-center items-center flex-wrap" 
         initial={{ opacity: 0 }} 
         animate={{ opacity: 1 }} 
         transition={{ delay: 0.5, duration: 0.5 }}
       >
         {selectedItem && SERVICES[selectedItem]?.map((service, index) => (
           <motion.div 
             key={index} 
             className="text-center text-pink-600 flex flex-col items-center w-32 h-32" 
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ delay: index * 0.1, duration: 0.5 }}
           >
             <div className="text-4xl">
               <Image src={service.icon} alt={service.name} width={45} height={45} />
             </div>
             <p className="mt-2 text-gray-800 font-medium">{service.name}</p>
           </motion.div>
         ))}
       </motion.div>
               </div>
             </div>
      </div>
    </section>
  );
};

export default TechnologyStack;