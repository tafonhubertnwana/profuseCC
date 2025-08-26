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
      
      <div className="min-h-screen bg-black text-white py-8 md:py-16 px-4 sm:px-6">
        <div className="container mx-auto xl:max-w-6xl">
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

          {loading ? (
            <div className="flex justify-center items-center py-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <>
              {/* Full Width Image */}
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px] rounded-lg overflow-hidden mb-16 md:mb-24">
                <Image
                  src={project.imageUrl}
                  alt={project.projectTitle}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Specifications Panel */}
              <div className="relative bg-white p-4 md:p-6 rounded-lg shadow-xl mb-12 -mt-8 md:-mt-16 mx-2 md:mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    <div>
                      <span className="font-medium block text-black text-sm md:text-base">author</span> 
                      <span className="text-[#FF0000] text-sm md:text-base">{project.client || 'Not specified'}</span>
                    </div>
                    <div>
                      <span className="font-medium block text-black text-sm md:text-base">Category:</span> 
                      <span className="text-[#FF0000] text-sm md:text-base">{project.label}</span>
                    </div>
                    <div>
                      <span className="font-medium block text-black text-sm md:text-base">Date:</span> 
                      <span className="text-[#FF0000] text-sm md:text-base">{new Date(project.$createdAt).toLocaleDateString()}</span>
                    </div>
                    {project.technologies && (
                      <div>
                        <span className="font-medium block text-black text-sm md:text-base">Technologies:</span> 
                        <span className="text-[#FF0000] text-sm md:text-base">{project.technologies}</span>
                      </div>
                    )}
                  </div>
                  
                  {project.projectLink && (
                    <div className="md:self-end">
                      <Link 
                        href={project.projectLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block w-full md:w-auto text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-sm transition-colors"
                      >
                        View Live Project
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="mb-16">
                <span className="inline-block bg-[#FF0000] text-white text-sm px-3 py-1 rounded-full mb-4">
                  {project.label}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">{project.projectTitle}</h1>
                
                <div className="prose prose-invert max-w-none">
                  {project.projectDetail.split('\n\n').map((paragraph, index) => (
                    <p key={index} className={`text-base sm:text-lg ${index === 0 ? 'mb-4' : 'mb-6'}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Gallery Section */}
                {project.galleryImages && project.galleryImages.length > 0 && (
                  <div className="mt-12 md:mt-16">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.galleryImages.map((image, index) => (
                        <div key={index} className="relative h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
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

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="mt-12 md:mt-24">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">More {project.label} Projects</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedProjects.map((relatedProject, index) => (
                      <motion.div
                        key={relatedProject.$id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative overflow-hidden shadow-lg pb-16 group"
                      >
                        <Link 
                          href={`/projects/${relatedProject.$id}`}
                          className="block group"
                          onClick={(e) => handleRelatedProjectClick(e, relatedProject.$id)}
                        >
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={relatedProject.imageUrl}
                              alt={relatedProject.projectTitle}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 bg-[#FF0000] bg-opacity-90 p-4 w-3/4 mx-auto group-hover:bg-opacity-100 transition-all duration-300">
                            <h3 className="text-base sm:text-lg font-semibold">
                              {relatedProject.projectTitle}
                            </h3>
                            <p className="text-gray-200 text-xs sm:text-sm mt-1">
                              {relatedProject.label}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </>
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