// app/fintech-challenges/page.js
import ChallengesOpportunities from "@/components/customized/challegesOpportunities";

export default function TransportChallengesPage() {
  const sections = [
    {
      title: "Traditional Tools Dependency",
      content:
        "Non-profitable businesses are often dependent on old tools and equipment. The transportation sector is struggling because of poor technology.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Regulation Acceptance",
      content:
        "This industry is the largest and has many regulations and rules imposed by the government. It is a barrier to the industry's digitalization because it must comply with all regulations and rules.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Market Competition",
      content:
        "Pricing is a significant issue in the automobile industry. It is highly competitive. Technology is more difficult to reach small and medium-sized companies because the cost is essential in determining how they will adapt to changes.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Isolated Groups",
      content:
        "It isn't easy to make decisions. Remote assemblies and isolated groups add complexity, increased costs and poor-quality service.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "TGlobal Expansion",
      content:
        "The automobile industry has a global presence. This means that there are many opportunities worldwide that can be leveraged to expand your business and discover new markets.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Technology Implementation",
      content:
        "The technology and automobile industry offer a lot of potential for digitalization. Proper implementation of technology can lead to better processes and lower costs, which is one industry's greatest needs.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "New Process",
      content:
        "Technology can be a practical step in business. This new approach will yield more benefits for businesses in terms of reduced losses due to poor management, effective management, and cost cuttings.",
      imageUrl: "/assets/api.png",
    },,
    {
      title: "The Cost Factor",
      content:
        "The auto industry is not the only industry where cost is a significant factor. People's expectations of adoption change, and web and mobile solutions can help them grow more efficiently",
      imageUrl: "/assets/api.png",
    },
    ,
    {
      title: "Mobile Technology",
      content:
        "With robust transportation technology solutions, the world of the automobile industry is no longer distant. Businesses can now track their business activities in one place.",
      imageUrl: "/assets/api.png",
    },
  ];

  return (
    <ChallengesOpportunities
      title="Management Of Challenges And Opportunities"
      sections={sections}
     
      imagePosition="right"
      backgroundColor="bg-gradient-to-br from-blue-50 to-white"
      textColor="text-gray-800"
    />
  );
}