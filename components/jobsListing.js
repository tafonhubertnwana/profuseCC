"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const JobListings = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "New York",
      description: "Develop responsive web applications using React.js and Next.js. Collaborate with designers to implement pixel-perfect UIs and optimize frontend performance. Minimum 3 years of experience required."
    },
    {
      title: "UX/UI Designer",
      type: "Contract",
      location: "Remote",
      description: "Create intuitive user interfaces and engaging user experiences. Conduct user research, create wireframes and prototypes, and work closely with development teams. Proficiency in Figma and Adobe XD required."
    },
    {
      title: "Backend Engineer",
      type: "Full Time",
      location: "San Francisco",
      description: "Build scalable backend services using Node.js and Python. Design and optimize databases, implement APIs, and ensure system reliability. Experience with cloud platforms (AWS/GCP) preferred."
    },
    {
      title: "DevOps Specialist",
      type: "Full Time",
      location: "Austin",
      description: "Implement CI/CD pipelines, manage cloud infrastructure, and automate deployment processes. Strong knowledge of Docker, Kubernetes, and Terraform required. 5+ years of DevOps experience."
    },
    {
      title: "Data Scientist",
      type: "Part Time",
      location: "Boston",
      description: "Analyze complex datasets, build machine learning models, and generate actionable insights. Proficiency in Python, R, and SQL required. PhD or Master's degree in related field preferred."
    },
    {
      title: "Product Manager",
      type: "Full Time",
      location: "Chicago",
      description: "Lead product development from conception to launch. Gather requirements, define roadmaps, and coordinate between engineering, design, and marketing teams. MBA or equivalent experience preferred."
    },
    {
      title: "Cybersecurity Analyst",
      type: "Full Time",
      location: "Washington DC",
      description: "Monitor systems for security breaches, implement protective measures, and respond to incidents. Certifications like CISSP or CEH preferred. Government clearance may be required."
    },
    {
      title: "Technical Writer",
      type: "Contract",
      location: "Remote",
      description: "Create clear documentation for APIs, developer guides, and technical specifications. Ability to translate complex technical concepts into user-friendly content required."
    }
  ];

  const [showAllJobs, setShowAllJobs] = useState(false);
  const displayedJobs = showAllJobs ? jobs : jobs.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Platform Support Specialist</h1>
      
      <div className="space-y-6">
        {displayedJobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border-t border-t-gray-200 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <span className="bg-blue-100 text-[#FF0000] px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
              </div>
              <span className="text-gray-600">{job.location}</span>
            </div>
            
            <p className="text-gray-700 mb-6">{job.description}</p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF0000] text-white px-6 py-2 rounded-md hover:bg-[#FF0000] transition-colors"
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>

      {!showAllJobs && jobs.length > 3 && (
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setShowAllJobs(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-[#FF0000] text-[#FF0000] rounded-md hover:bg-[#FF0000] hover:text-white transition-colors"
          >
            View All Jobs ({jobs.length})
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default JobListings;