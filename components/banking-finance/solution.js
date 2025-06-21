import Head from 'next/head';
import FeatureCard from '../customized/featureCard';


const SolutionsPage = () => {
  const features = [
    {
      title: "High-Customizable FinTech Solutions",
      description: "Our fintech solutions are specifically designed to meet the needs of your business, sector, and customers.",
      iconImage: '/assets/api.png',
      
    },
    {
      title: "Easy Integrations",
      description: "We facilitate third-party integrations with our financial technology platform.",
      iconImage:  '/assets/api.png',
     
    },
    {
      title: "Regulatory Compliance",
      description: "Solutions developed in compliance with each country's applicable regulations.",
      iconImage:  '/assets/api.png',
      
    },
    {
      title: "Automation Features",
      description: "Automate repetitive processes to save time and reduce manual work.",
      iconImage:  '/assets/api.png',
    
      iconSize: 56,
      imageClassName: "p-1" // Example of additional image styling
    }
  ];

  return (
    <div className=" bg-gray-50">
      <Head>
        <title>Our Solutions | ProfuseCC FinTech</title>
      </Head>

      <main className="container xl:max-w-7xl mx-auto p-4 ">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Our FinTech Solutions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2  my-6 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconImage={feature.iconImage}
              iconAlt={feature.iconAlt}
              borderColor={feature.borderColor}
              iconSize={feature.iconSize}
              delay={index * 0.1}
              className=""
              imageClassName={feature.imageClassName}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SolutionsPage;