'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const industries = [
  { 
    name: 'Retail & Wholesale', 
    icon: '/assets/cart-shopping-fast.png',
    link: '/industry/wholesale-retail' 
  },
  { 
    name: 'Industrial Manufacturing', 
    icon: '/assets/air-pollution.png',
    link: '/industry/industrial-manufacturing' 
  },
  { 
    name: 'Banking & Finance', 
    icon: '/assets/growth-chart-invest.png',
    link: '/industry/banking-finance' 
  },
  { 
    name: 'Healthcare', 
    icon: '/assets/hands-brain.png',
    link: '/industry/healthcare' 
  },
  { 
    name: 'Transportation & Logistics', 
    icon: '/assets/shipping-fast.png',
    link: '/industry/transportation-logistics' 
  },
  { 
    name: 'Real Estate', 
    icon: '/assets/picaxe-minning.png',
    link: '/industry/real-estate' 
  },
  { 
    name: 'Education', 
    icon: '/assets/test.png',
    link: '/industry/education' 
  },
  { 
    name: 'Telecommunication', 
    icon: '/assets/capsules.png',
    link: '/industry/telecommunication' 
  },
];

export function IndustriesList({ excludeCurrent = false, currentIndustry = '' }) {
  const filteredIndustries = excludeCurrent 
    ? industries.filter(industry => industry.link !== currentIndustry)
    : industries;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  container xl:max-w-7xl mx-auto p-2">
      {filteredIndustries.map((industry, index) => (
        <motion.li
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 rounded-lg shadow-md"
        >
          <Link 
            href={industry.link} 
            className="p-4 flex items-center gap-4 w-full h-full"
            aria-label={`Learn more about ${industry.name}`}
          >
            <span className="text-2xl">
              <Image 
                src={industry.icon} 
                alt="" 
                width={40} 
                height={40} 
                aria-hidden="true"
              />
            </span>
            <span className="font-semibold">{industry.name}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default function BusinessDomains() {
  return (
    <section 
      className="bg-red-700 text-white py-16 px-6"
      aria-labelledby="business-domains-heading"
    >
      <div className="container xl:max-w-7xl  mx-auto p-2">
        <header className="text-left">
          <h2 
            id="business-domains-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
          >
            WE SUPPORT YOUR BUSINESS DOMAIN
          </h2>
          <p className="sm:max-w-xl lg:max-w-2xl mb-8 text-base sm:text-lg">
            With more than 8 years of collaboration with different industries, we possess deep
            expertise in the challenges each industry faces and know how to cope with them using innovations.
            Here are the industries we serve:
          </p>
        </header>

        <IndustriesList />
      </div>
    </section>
  );
}