import SolutionsGrid from '@/components/customized/solutionGrid';

export default function RealEstateSolutions() {
  const bankingData = {
    title: "Real Estate Development Solutions",
    items: [
      {
        title: "Mobile App Development Consultation",
        description: "So, in case you are loaded with an extraordinary app idea and are looking for a piece of expert advice on its scalability and productivity, we are there to help you in any manner. We proffer a rich Real Estate portal development landscape that is inclusive of finest app features and profitable suggestions.",
        image: "/industry/real-10.png",
      },
      {
        title: "Property Booking Online Solutions",
        description: "We have enriched solutions for different kinds of properties. Whether it is for the hotel, resorts or for the apartments, we have everything aligned up. With our online Real Estate Development Solutions, you can showcase your property with beautiful pictures and can easily attract the users",
        image: "/industry/real-11.png",
      },
      {
        title: "Real Estate Enterprise Solution",
        description: "With our Real Estate Web Development, we engineer apps that are highly qualified and rich. We make sure to make the task of property management a lot seamless. Via such solutions, we ensure that all the individual platforms and societies get to manage the property from a centralized source.",
        image: "/industry/real-12.png",
      },
      
      {
        title: "Property Management Apps",
        description: "Go data-driven as now you have the power to translate it into robust tactics and strategies that pay your business with never-experienced before results. We give you big data benefits seamed with our telecom IT services to help you innovate, complete and aim for higher business value.",
        image: "/industry/real-13.png",
      },
      {
        title: "Lead Management Solutions",
        description: "With our sophisticated designed lead management solutions, we help real estate businesses with real estate app development to categorize leads into multiple categories. We help the brokers and the stakeholders to analyze, capture and manage different leads.",
        image: "/industry/real-14.png",
      },
      {
        title: "Maintenance and and Support",
        description: "We deliver the entire range of management and support services. Being a reliable real estate app development company we make sure to produce just the right support at the right time. We help in regularly maintaining and updating your products, such that meets the users demand in all ways.",
        image: "/industry/real-15.png",
      },
      {
        title: "Cloud and GPS Integration",
        description: "We believe in making real estate development solutions more digital and smarter. Thus, we make sure to infuse all the enriched features such as Cloud integration, GPS, etc for storing the data more securely. At CIS, we build products that are true to your businesses.",
        image: "/industry/real-16.png",
      },
      {
        title: "Advanced search options",
        description: "In case your app looks messy, people may not stay on your app for a longer run. Thus, you need to sort out the features of your app in the right way. We infuse the advanced filters for making your search all the way more customized.",
        image: "/industry/real-17.png",
      },
      {
        title: "Advanced search options",
        description: "We embed all solutions that are highly important to capture the user base. Push notification, instant alerts, chat systems are being integrated into the mobile app for making all the way more advanced and seamless.",
        image: "/industry/real-18.png",
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