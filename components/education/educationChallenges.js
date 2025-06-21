
import ChallengesOpportunities from "@/components/customized/challegesOpportunities";

export default function EducationChallengesPage() {
  const sections = [
    {
      title: "Engagement",
      content:
        "It is important that elearning application development is able to cater to the needs of users making it engaging. User centric solutions are important and thus to keep users engaged you continuously need to find new ways to augment their experience.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Revenue Generation",
      content:
        "Distance learning, elearning, remote learning are relatively new concepts and they need to be marketed well with robust and efficient web solutions to churn up the adoption process. On failing it can impact revenue generation that leads to the failing of business.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Demography is a challenge",
      content:
        "Technology is still to make its way into third world countries where it is still a luxury. Urban or semi-urban areas there is still a population that doesn't have an access to technology let alone adapting to the growing trend of elearning web portals.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Lack of Communication",
      content:
        "Elearning is not a replacement for group learning or classroom education, it is an addition to it to increase the impact. Thus, the approach should be not to replace but to add on to the productivity and creativity that comes from classroom education.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Accessibility",
      content:
        "Technologies allow the customization and personalization wanted in mobile apps and web portals while also giving them access to multiple subjects and archived knowledge base. It is in every manner a much better and convenient option than classroom education",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Innovation",
      content:
        "Technology gives you a lot better chances of innovation and engagement. With technology you are able to process more information into more effective mediums such as audios and videos that truly makes learning fun and a more joyful process.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Proper Attention",
      content:
        "The individual engagement and participation allow a student to get the well-deserved attention and helps a teacher track down his progress to understand how much more personalized approach will add on to his productivity and impactful learning.",
      imageUrl: "/assets/api.png",
    },,
    {
      title: "Cost Effective",
      content:
        "It is a one-time investment and cost-effective. When technology is involved, we can actually reduce the cost of infrastructure using distance learning, remote learning, and learning methods.",
      imageUrl: "/assets/api.png",
    },
    ,
    {
      title: "Flexibility",
      content:
        "With growing technologies, a learner can be offered with internet connected solutions that they can access on various platforms including smartphones, laptops, tablets and others with added features and flexibility to learn anytime anywhere.",
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