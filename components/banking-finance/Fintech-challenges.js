// app/fintech-challenges/page.js
import ChallengesOpportunities from "@/components/customized/challegesOpportunities";

export default function FintechChallengesPage() {
  const sections = [
    {
      title: "Investment Shakeups",
      content:
        "The Fintech industry is rather difficult to understand in terms of process and needs. While investors find it an unexplored ground to leverage for their benefits, it is not at all easy for them to know what works best. These practices of unknowingly done investments bring interference in the market.",
      imageUrl: "/industry/fin-1.png",
    },
    {
      title: "Regulation",
      content:
        "International and national governments have imposed some hefty rules and regulations to bear for the industry. Old policies thus do not support the intervention of the technology and benefits that come with it. It is important that governments adapt to the new trends.",
      imageUrl: "/industry/fin-2.png",
    },
    {
      title: "Technology Meters",
      content:
        "Business by far has been largely run on the old technology, and since money is involved banks, merchants, and people are hesitant to adopt to the new technology solutions that are not only secure and useful but far more superior.",
      imageUrl: "/industry/fin-3.png",
    },
    {
      title: "Business Cycle",
      content:
        "It is a long process, and revenue generation is slow. Fintech companies thus try to build revenue generation on a per-use basis and run-in high-risk zones without any affirmation on returns on investments.",
      imageUrl: "/industry/fin-4.png",
    },
    {
      title: "The Big Market",
      content:
        "It is a very big market, which is estimated around $25 trillion globally. Apart from some technology opposers there is still a large number of people who look forward to technology to evolve.",
      imageUrl: "/industry/fin-5.png",
    },
    {
      title: "The Digital Age",
      content:
        "The digitalization of financial products removes the physical constraint, which means now financial products can be designed using modern technologies that allow them to be more convenient and portable globally.",
      imageUrl: "/industry/fin-6.png",
    },
    {
      title: "Hybrid Models",
      content:
        "Given the portability of digital financial products, finding new and optimized cross-industry, hybrid business models open up a whole new world for mixing people with skills, institutional channels and proprietary customer sets.",
      imageUrl: "/industry/fin-7.png",
    },,
    {
      title: "More Access",
      content:
        "Access to technologies, and increased use of mobile, cloud networks, and analytics is rapidly making financial products more and more available to all consumers and businesses.",
      imageUrl: "/industry/fin-8.png",
    },
    ,
    {
      title: "Ongoing Need",
      content:
        "The need and demand for financial services and products is higher than ever, technology intervention will provide core function in the lives of every consumer, business world.",
      imageUrl: "/industry/fin-9.png",
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