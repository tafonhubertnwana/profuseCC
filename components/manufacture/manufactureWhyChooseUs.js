import WhyChooseUs from '@/components/customized/WhyChooseUs';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Business evolution",
      description: "We adopt the right technological stack and insights that enable the businesses to prosper exponentially in this highly-competitive market plus also enable them to evolve in the most admirable ways. We assure to get through in the right ways",
      icon: "/industry/real-18.png",
    },
    {
      title: "Affordable development cost",
      description: "Yes, we track all the associated and reasonable price structure and assure to graph the prices in the most justified ways. We lay all the right and impeccable practices in the niche of developing software products and take into account all the maintenance and upgrade services.",
      icon: "/industry/real-19.png",
    },
    
    {
      title: "Technology consultation",
      description: "Our advanced Real Estate app development services are focused on delivering the right consultation as and when required. We deliver a sophisticated, productive, reliable and scalable solution that exactly comprehends the diverse business goals.",
      icon: "/industry/real-20.png",
    },
    {
      title: "Stipulated delivery",
      description: "We take into account the time invested by you and yes, it's important as well, thus, we focus on engineering the best in class and feature-rich real estate development solutions as per the promised time frame. We remain in the loop with clients and keep track of all the development procedures.",
      icon: "/industry/real-21.png",
    },
  ];

  return (
    <main>
      <WhyChooseUs 
        title="Why ProfuseCC is the best choice for Real Estate app development?"
        subtitle=""
        features={features}
      />
    </main>
  );
}