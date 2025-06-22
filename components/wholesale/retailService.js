// app/retail/page.jsx (or wherever your retail page is located)
"use client";

import ChallengesOpportunities from "@/components/customized/challegesOpportunities";

const RetailPage = () => {
  const sections = [
    {
      title: "Security",
      content:
        "Security is the biggest trend ever, and ecommerce success highly depends on the same. Your core users look forward to purchasing from you only when you are a trusted platform to secure their payment details online.",
      imageUrl: "/industry/whole-1.webp",
    },
    {
      title: "Hard Accessibility",
      content:
        "There are regular innovations being done in the world of the ecommerce. But are they all easily accessible? Small businesses have a hard time struggling with big companies that have easy access to technology.",
      imageUrl: "/industry/whole-2.webp",
    },
    {
      title: "Stiff Competition",
      content:
        "Every industry today has understood the true power of technology and look forward to leveraging the convenience of ecommerce, leading to increase in competition between small and big vendors.",
      imageUrl: "/industry/whole-3.webp",
    },
    {
      title: "Multi-Platform",
      content:
        "The boom in the smartphone market has led to difficulties of managing multiple platforms used by buyers to shop online. The more the device diversity the more difficult it becomes for them to care for the demands.",
      imageUrl: "/industry/whole-4.webp",
    },
    {
      title: "Billion-dollar Opportunity",
      content:
        "Ecommerce has already crossed the billion-dollar mark, and there are no signs of stopping just right there. Even in the infancy the industry is full of opportunities and there is a long run forwarding to this phase.",
      imageUrl: "/industry/whole-5.webp",
    },
    {
      title: "Ease of Access",
      content:
        "eCommerce has lent the user the needed accessibility and ease of access that was never in the traditional market. In fact, it has connected business altogether on a global level opening up a whole new breed of opportunity.",
      imageUrl: "/industry/whole-6.webp",
    },
    {
      title: "An Extension",
      content:
        "With offline retail, today businesses are looking into more fruitful online business opportunities where you need not make any extra efforts to manage another store or inventory, just extend your current platform to the online market.",
      imageUrl: "/industry/whole-7.webp",
    },
    {
      title: "M-commerce",
      content:
        "Mobile is the future and it is important that you adapt to this change. With expected 70% of the purchase today made on mobile platforms it is important that businesses leverage the opportunity of mcommerce.",
      imageUrl: "/industry/whole-8.webp",
    },
    {
      title: "Sitecore Upgrades and Migrations",
      content:
        "We help you swiftly transport to newer and better Sitecore versions, allowing you to improve efficiency, execution, security, and overall enterprise performance.",
      imageUrl: "/industry/whole-9.webp",
    },
  ];

  return (
    <ChallengesOpportunities
      title="Our Retail Development Services Include"
      subtitle="Retail industry is constantly evolving, and the best retail stores have to be the ones that have the ability to change and adapt their strategies in order to stay current with the latest trends and technologies. We offer a wide range of retail solutions and technologies that can help you stay ahead of the competition and improve your bottom line."
      sections={sections}
      backgroundColor=""
      textColor="text-black"
    />
  );
};

export default RetailPage;
