'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { databases, Query } from '@/lib/appwrite';
import { FiArrowRight } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';

const LIMIT = 6; // Projects per page
const categories = ['AI Solutions', 'Cloud Infrastructure', 'Data Analytics', 'IoT', 'web design', 'all']; // Add your actual categories here

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const queries = [
          Query.limit(LIMIT),
          Query.offset((currentPage - 1) * LIMIT),
          Query.orderDesc('$createdAt')
        ];
        
        if (searchTerm.trim() !== '') {
          queries.push(Query.search('projectTitle', searchTerm));
        }
        
        if (selectedCategory !== 'all') {
          queries.push(Query.equal('label', selectedCategory));
        }
        
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_PROJECT_FORM_ID,
          queries
        );
        
        setProjects(response.documents);
        setTotal(response.total);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage, searchTerm, selectedCategory]);

  if (loading) {
    return (
      <section className="bg-black text-white py-16 px-6">
        <div className="container xl:max-w-6xl mx-auto text-center">
          <p>Loading projects...</p>
          
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="container xl:max-w-6xl mx-auto">
        <div className="mb-12">
  {/* Mobile View (stacked) */}
  <div className="md:hidden space-y-4">
    <div className="relative">
      <label htmlFor="search" className="block text-sm font-medium mb-1">Search</label>
      <div className="relative">
        <input
          type="text"
          id="search"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full px-4 pl-10 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
    
    <div>
      <label htmlFor="category-mobile" className="block text-sm font-medium mb-1">Category</label>
      <select
        id="category-mobile"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Desktop View (side by side) */}
  <div className="hidden md:grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
    <div className="relative">
      <label htmlFor="search-desktop" className="block text-sm font-medium mb-1">Search</label>
      <div className="relative">
        <input
          type="text"
          id="search-desktop"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full px-4 pl-10 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
    
    <div className="w-64">
      <label htmlFor="category-desktop" className="block text-sm font-medium mb-1">Category</label>
      <select
        id="category-desktop"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  </div>
</div>
        <div className="text-center">
          <p className="text-[#FF0000] font-medium">Enterprise AI & Cloud Platform</p>
          <h2 className="text-3xl font-bold mt-2">Powering Businesses with Intelligent Cloud Infrastructure</h2>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <motion.div
      key={project.$id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative overflow-hidden shadow-lg pb-20 group"
    >
      <Link href={`/project/${project.$id}`}>
        <div className="relative h-64 w-full">
          <Image 
            src={project.imageUrl} 
            alt={project.projectTitle} 
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-x-0 bottom-10 bg-[#FF0000] bg-opacity-90 p-4 w-3/4 mx-auto group-hover:bg-opacity-100 transition-all duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-sm font-semibold">{project.label}</p>
              <h3 className="text-xl font-bold mt-2 text-white">{project.projectTitle}</h3>
            </div>
            <div className="transform group-hover:translate-x-2 transition-transform duration-300">
              <FiArrowRight className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  ))}
</div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded ${currentPage === page ? 'bg-[#FF0000]' : 'bg-gray-800'}`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}