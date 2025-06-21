import SolutionsGrid from '@/components/customized/solutionGrid';

export default function ManufactureChooseUs() {
  const bankingData = {
    title: "Our Telecommunication Solutions",
    items: [
      {
        title: "Mobile App Development Consultation",
        description: "So, in case you are loaded with an extraordinary app idea and are looking for a piece of expert advice on its scalability and productivity, we are there to help you in any manner. We proffer a rich Real Estate portal development landscape that is inclusive of finest app features and profitable suggestions.",
        image: "/assets/api.png",
      },
      {
        title: "Property Booking Online Solutions",
        description: "We have enriched solutions for different kinds of properties. Whether it is for the hotel, resorts or for the apartments, we have everything aligned up. With our online Real Estate Development Solutions, you can showcase your property with beautiful pictures and can easily attract the users",
        image: "/assets/api.png",
      },
      {
        title: "Real Estate Enterprise Solution",
        description: "With our Real Estate Web Development, we engineer apps that are highly qualified and rich. We make sure to make the task of property management a lot seamless. Via such solutions, we ensure that all the individual platforms and societies get to manage the property from a centralized source.",
        image: "/assets/api.png",
      },
      
      {
        title: "Mobile and Web App Development",
        description: "Unfold the digital in the swiftest way, by gaining our web and mobile advantages on leading platforms. We give you your business the digital powers to use mobile and web channels to perform and track your business manufacturing cycle to give you a mobile first approach.",
        image: "/assets/api.png",
      },
      {
        title: "Cloud Infrastructure Consulting & Services",
        description: "We help you to manufacture efficient IT infrastructure to streamline your operations, automate your processes and modernize your legal processes using cloud technology.",
        image: "/assets/api.png",
      },
      {
        title: "Field Services Management",
        description: "Technology solutions that allow you to manage your operations while providing you business advantages to effectively improve your efficiency and staff management for better results",
        image: "/assets/api.png",
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