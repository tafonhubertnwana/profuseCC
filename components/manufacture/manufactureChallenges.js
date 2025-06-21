// app/fintech-challenges/page.js
import ChallengesOpportunities from "@/components/customized/challegesOpportunities";

export default function ManufactureChallengesPage() {
  const sections = [
    {
      title: "Workforce Quality",
      content:
        "60% of industrial manufacturers voted workforce as their biggest challenge and a top priority. Non-qualified employees make it difficult for businesses to adapt to new and advanced digital technologies that will require skills and training.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Cyber security",
      content:
        "Reports suggest about 44% of businesses fail to install any necessary protection while interacting with their users to sell their product or services. Infact, their inefficiency to secure their processes range to non-trained staff putting them very close to external and internal vulnerabilities.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Customer Self-Service",
      content:
        "Timely deliveries being the major focus today, major companies forget customer self-service needs. With the advent of the digital world, also has evolved customer experience that needs manufacturers to provide active information on most company used digital platforms rather than want their customers to call them for follow ups, information or query.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Research and Development",
      content:
        "While about only 5 percent of sales or even less is invested into research and development, about 78% of businesses still follow the innovation replication method that is unable to provide them expected growth in the market.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Digitization",
      content:
        "While technologies such as IoT, AR, VR, ML are no longer the new kid on the block, businesses are still not adopting upgraded digital processes hindering their efficiency to impact the market at their fullest.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Manufacturing Intelligence",
      content:
        "Manufacturing IT Services are embraced now by enterprises to provide new ways to predict accurately about future happening for business. IT solutions are allowing you to emerge out of your business problems, and take measures to avoid risks and thrive to gain upper hand in the market.",
      imageUrl: "/assets/api.png",
    },
    {
      title: "Production Quality",
      content:
        "Manufacturing Industry Solutions are aiming at improving production quality to not only result optimum for business but also for the sustainability goals. Today businesses use technology solutions that allow them to achieve about near to zero waste, zero emission and more. These new developments in the industry are truly an indication towards quality, visibility and better solutions.",
      imageUrl: "/assets/api.png",
    },,
    {
      title: "Integrated Scheduling and execution",
      content:
        "Manufacturing Technology Services are today empowering businesses to adopt new ways of operating their businesses. Today, manufacturing scheduling is more integrated and helps businesses to become more flexible and to produce better and dependable solutions that can drive more sophistication in your working and operations.",
      imageUrl: "/assets/api.png",
    },
    ,
    {
      title: "Predictive Analytics",
      content:
        "Manufacturing IT Services are embraced now by enterprises to provide new ways to predict accurately about future happening for business. IT solutions are allowing you to emerge out of your business problems, and take measures to avoid risks and thrive to gain upper hand in the market.",
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