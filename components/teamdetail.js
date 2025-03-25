// import { GetStaticProps, GetStaticPaths } from "next";
// import { notFound } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import teamMembers from "@/utils/teamMembers.json";
// import Link from "next/link";

// export default function TeamDetail({ params }) {
//  const { id } = params;

//   // Ensure the ID is a string for comparison
//   const member = teamMembers.find((m) => m.id.toString() === id);

//   if (!member) return notFound();

//   return (
//     <section className="py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div 
//           className="grid md:grid-cols-2"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Image
//             src={member.image}
//             alt={member.name}
//             width={400}
//             height={400}
//             className="object-cover rounded-md"
//           />
//           <div className="md:p-6 py-6 w-full">
//             <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
//             <p className="text-gray-500">{member.role}</p>
//             <p className="text-gray-600 mt-4">{member.bio}</p>

//             <div className="mt-6 flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0">
//               <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
//                 <FaPhoneAlt className="text-red-500" />
//                 <span className="text-gray-700">{member.contacts.phone}</span>
//               </div>
//               <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
//                 <FaEnvelope className="text-red-500" />
//                 <span className="text-gray-700">{member.contacts.email}</span>
//               </div>
//             </div>

//             <div className="mt-6 flex space-x-4">
//               <Link href={member.socials.facebook} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600">
//                 <FaFacebookF className="text-gray-500 hover:text-white" />
//               </Link>
//               <Link href={member.socials.twitter} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-400">
//                 <FaTwitter className="text-gray-500 hover:text-white" />
//               </Link>
//               <Link href={member.socials.linkedin} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-700">
//                 <FaLinkedinIn className="text-gray-500 hover:text-white" />
//               </Link>
//               <Link href={member.socials.pinterest} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-600">
//                 <FaPinterestP className="text-gray-500 hover:text-white" />
//               </Link>
//             </div>

//             <div className="mt-6 flex items-center space-x-2">
//               <div className="rounded-full border-red-500 border-2 p-3">
//                 <FaMapMarkerAlt className="text-red-500" />
//               </div>
//               <span className="text-gray-700">{member.contacts.address}</span>
//             </div>
//           </div>
//         </motion.div>

//         <div className="py-10">
//           <h2 className="text-2xl font-bold mb-6">My Skills</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {member.skills.map((skill, index) => (
//               <div key={index} className="flex items-center">
//                 <div className="w-full">
//                   <p className="text-gray-600">{skill.name}</p>
//                   <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-1">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${skill.percentage}%` }}
//                       transition={{ duration: 1 }}
//                       className="absolute top-0 left-0 h-full bg-red-600 rounded-lg"
//                     ></motion.div>
//                   </div>
//                 </div>
//                 <span className="ml-4 text-gray-700 font-semibold">{skill.percentage}%</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

