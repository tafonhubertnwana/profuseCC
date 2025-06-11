'use client';
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import { useEffect, useState } from 'react';
import { databases, Query } from '@/lib/appwrite';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Testimonials from '@/components/testimonial';
import LogoCarousel from "@/components/LogoCarousel";
import { useRouter } from 'next/navigation';

export default function RelatedProjectDetail({ params }) {
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Get the id from params
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the specific related project
        const projectResponse = await databases.getDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_PROJECT_FORM_ID,
          id
        );
        
        setProject(projectResponse);

        // Fetch other projects in the same category
        const relatedResponse = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_PROJECT_FORM_ID,
          [
            Query.equal('label', projectResponse.label),
            Query.limit(3),
            Query.notEqual('$id', id)
          ]
        );
        
        setRelatedProjects(relatedResponse.documents);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleRelatedProjectClick = (e, id) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    router.push(`/project/${id}`);
  };

  if (loading || !project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading project...</p>
      </div>
    );
  }

  return (
    <>
      <section>
        <Navbar />
        <HeroSection
          title="Project Details"
          description="Explore the details of this project and our work process"
          backgroundImage="/assets/project.png"
          breadcrumb="Projects / Details"
        />
      </section>
      
      <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6">
        <div className="container xl:max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <button 
              onClick={() => router.back()}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Projects
            </button>
          </div>

          {/* Full Width Image */}
         <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-24">
        {/* Main Project Image */}
        <Image
          src={project.imageUrl}
          alt={project.projectTitle}
          fill
          className="object-cover"
           priority
            />
      </div>
      {/* Specifications Panel - Overlapping the image */}
      <div className="absolute -bottom-96 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
       <div className="bg-white p-6 rounded-lg shadow-xl ">
  <div>
    <h3 className="text-xl font-semibold mb-4 text-black">Project Specifications</h3>
    <ul className="space-y-4 flex justify-between">
      <li>
        <span className="font-medium block text-black">Client:</span> 
        <span className="text-[#FF0000]">{project.client || 'Not specified'}</span>
      </li>
      <li>
        <span className="font-medium block text-black">Category:</span> 
        <span className="text-[#FF0000]">{project.label}</span>
      </li>
      <li>
        <span className="font-medium block text-black">Completion Date:</span> 
        <span className="text-[#FF0000]">{new Date(project.$createdAt).toLocaleDateString()}</span>
      </li>
      {project.technologies && (
        <li>
          <span className="font-medium block text-black">Technologies:</span> 
          <span className="text-[#FF0000]">{project.technologies}</span>
        </li>
      )}
    </ul>
  </div>

  {project.projectLink && (
    <div className="self-end">
      <Link 
        href={project.projectLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors text-center"
      >
        View Live Project
      </Link>
    </div>
  )}
</div>
      </div>

          {/* Project Content */}
          <div className="">
           

            {/* Project Details - Right Column */}
            <div className="">
              <span className="inline-block bg-[#FF0000] text-white text-sm px-3 py-1 rounded-full mb-4">
                {project.label}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">{project.projectTitle}</h1>
              
              <div className="prose prose-invert max-w-none">
  {project.projectDetail.split('\n\n').map((paragraph, index) => (
    <p key={index} className={`text-lg ${index === 0 ? 'mb-4' : 'mb-6'}`}>
      {paragraph}
    </p>
  ))}
</div>

              {/* Gallery Section - if you have multiple images */}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.galleryImages.map((image, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.projectTitle} - ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">More {project.label} Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.$id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative overflow-hidden shadow-lg pb-20 group"
                  >
                    <Link 
                      href={`/projects/${relatedProject.$id}`}
                      className="block group"
                      onClick={(e) => handleRelatedProjectClick(e, relatedProject.$id)}
                    >
                      <div className="relative h-48 w-full overflow-hidden ">
                        <Image
                          src={relatedProject.imageUrl}
                          alt={relatedProject.projectTitle}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-10 bg-[#FF0000] bg-opacity-90 p-4 w-3/4 mx-auto group-hover:bg-opacity-100 transition-all duration-300">
                      
                        <h3 className="mt-3 text-lg font-semibold ">
                          {relatedProject.projectTitle}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {relatedProject.label}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <section>
        <Testimonials />
        <LogoCarousel />
      </section>
    </>
  );
}