import WhyChooseUs from '@/components/customized/WhyChooseUs';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Interactive & Engaging Solutions",
      description: "Leverage our in-depth knowledge of industry and our powerful and trendy solutions allowing you to develop interactive and engaging solutions. We give you educational mobile app development for visually stunning and efficient apps that meet your organizational requirements while providing your users user-friendly and appealing applications and web products.",
      icon: "/industry/edu-19.png",
    },
    {
      title: "Collaborative Learning",
      description: "We make sure new technologies are used and tools are added on to provide your user the compatibility with futuristic features on their devices. Collaborative learning experience thus helps us in enhancing your user experience while engaging them for a longer time on apps and portals.",
      icon: "/industry/edu-20.png",
    },
    {
      title: "Practical Learning",
      description: "Our elearning mobile app development includes the use of multiple mediums and efficient integration of various technologies, allowing us to give your users the taste of practical learning with theoretical. Videos, sweepstakes, game based training integrate creative ways to give your users better learning and evaluation opportunities ensuring better knowledge retention.",
      icon: "/industry/edu-21.png",
    },
    {
      title: "Ease of Use",
      description: "User friendly not only on student side but also on backend, our elearning portal development and elearning application development leverages you the opportunity to manage your online learning business better. Manage your staff, classrooms, course more efficiently and get deeper insights on the same to improvise continually to reach your goals",
      icon: "/industry/edu-22.png",
    },
  ];

  return (
    <main>
      <WhyChooseUs 
        title="Why Choose Us?"
        subtitle="Discover what makes us different"
        features={features}
      />
    </main>
  );
}