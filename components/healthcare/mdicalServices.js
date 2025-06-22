import SolutionsGrid from '@/components/customized/solutionGrid';

export default function MedicalSolutions() {
  const bankingData = {
    title: "Our Medical Software Development Services",
    items: [
      {
        title: "Hospital Management System",
        description: "From making remote appointments, report collection, diet chart management, consultation to data management, at ProfuseCC we provide health & fitness Software solutions that help you in better management of your organization.",
        image: "/industry/heal-10.png",
      },
      {
        title: "Health & Fitness Mobile Applications",
        description: "Efficient and secure, ecommerce shopping portals design and development services allowing you to cater user-friendly and highly customized shopping experiences to your buyers.",
        image: "/industry/heal-11.png",
      },
      {
        title: "Electronic Health Records HER Software",
        description: "Powerful futuristic, easy to use online store solutions that offer you with a fully functional HER software for better data management and security.",
        image: "/industry/heal-12.png",
      },
      {
        title: "Remote Health Monitoring System",
        description: "The remote health system helps you to get access to relevant and important information irrespective of time and connectivity that allows you to increase your efficiency ten fold.",
        image: "/industry/heal-13.png",
      },
      {
        title: "Web Applications and Portals",
        description: "Superior Web application and portals that are feature rich and secure. Our web portals are custom designed and developed with the needed features and the characteristics that help you in fighting off your challenges and giving you custom-made solutions.",
        image: "/industry/heal-14.png",
      },
      {
        title: "Healthcare Analytics and Business Intelligence",
        description: "Using high-end technology solutions such as BI, Smart devices, and IoT , we deliver you the power to combine your critical health data to deliver most precise and appropriate solutions to health problems of your patients.",
        image: "/industry/heal-12.png",
      },
      ,
      {
        title: "Electronic Medical Records (EMR) Software",
        description: "We give you intelligent software solutions that manage your data crisis to give you outstanding solutions in regards to managing your large medical data using cloud technology and more.",
        image: "/industry/heal-15.png",
      },
      
      {
        title: "IoT App Integrations",
        description: "IoT is changing the dynamic of every industry and so is its contribution in medicine. Using IoT technology we extend your mobile health solutions to connect with health gadgets and manage health strategies and affairs.",
        image: "/industry/heal-16.png",
      },
      ,
      {
        title: "Enterprise Content Management",
        description: "Allowing you to improve your operational efficiency by providing you a dependable platform to permeate data and documents across various departments to provide you better result and coordination.",
        image: "/industry/fin-19.png",
      },
    ]
  };

  return (
    <main>
      <SolutionsGrid 
        title={bankingData.title}
        items={bankingData.items}
      />
    </main>
  );
}