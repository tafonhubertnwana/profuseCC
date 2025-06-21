// app/fintech-challenges/page.js
import ChallengesOpportunities from "@/components/customized/challegesOpportunities";

export default function RealEstateChallengesPage() {
  const sections = [
    {
      title: "Security issues",
      content:
        "Well, Real estate companies have a lot of sensitive data that is inclusive of confidential information related to brokers and users. Thus, the organizations are required to protect the data in the right way and ultimately dealing with such security problems in the niche is the biggest challenge.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Budget related issues",
      content:
        "Well, in this technology world, where the products are taking different shapes with every passing day, it is very challenging to be in pace. In such a scenario, the real estate companies are investing loads of money to meet the user requirements by adopting the latest technology fundamentals",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Location and navigation based Applications",
      content:
        "Well, integrating the location-based feature can be said as the greatest opportunity for real estate companies. With the aid of GPS, the businesses can show the location and the directions for the house and the client thus can have a look easily.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Data Management",
      content:
        "Undeniably, almost all the business focuses on delivering the finest personalized services to its users. But, handling all the personal data and managing it all the way becomes very tedious and brainstorming. Thus, this comes out to be an extremely challenging task for businesses.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Integrating the collaboration Tools",
      content:
        "The business can think about adding the Platforms to deliver the sense of seamless communication among the attuned buyers, sellers, vendors, agents to manage all the transactions in an authenticated way.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Managing the Property Appraisal",
      content:
        "Technology is the biggest contributor to any business. The organizations can implement the right property design, framework, and other aggregation standards to make the property listing very easy, thus helping the users to get through in justified ways.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "CRM",
      content:
        "The real estate app development ecosystem can consist of the CRM systems such that it takes into account all the communication between the clients and the users. The CRM provides an opportunity for businesses to track the user acquisition and retention rate.",
      imageUrl: "/assets/api.png",
    },,
    {
      title: "Booking",
      content:
        "Well, implementing the booking standards within the real estate app can be the biggest opportunity for the businesses. This makes sure that they do not miss out on any of the meetings with the clients. The businesses can update their availability calendar and accordingly, the clients can set up their meeting with them, as per their time zone.",
      imageUrl: "/assets/api.png",
    },
    ,
    {
      title: "Reaching to thousands at once",
      content:
        "In the current times, there are loads of people that are looking for houses and properties, thus the real estate companies are required to reach thousands one at a time. The concept of showing house in-person is being overridden by recorded and virtual tours. Dealing with such solutions is becoming very challenging.",
      imageUrl: "/assets/api.png",
    },
  ];

  return (
    <ChallengesOpportunities
      title="Challenges And Opportunities"
      sections={sections}
     
      imagePosition="right"
      backgroundColor=""
      textColor="text-gray-800"
    />
  );
}