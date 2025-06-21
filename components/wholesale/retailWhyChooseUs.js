import WhyChooseUs from "@/components/WhyChooseUs";

const WhyChooseUsPage = () => {
  const features = [
    {
      title: "Easy to Access Solutions",
      description: "We make sure the technology doesn't become a complication and our products are easy to use...",
      icon: "/images/easy-access-icon.png",
    },
    {
      title: "Easy Customization",
      description: "We make sure your unique needs are met with high-end technology and dependable solutions...",
      icon: "/images/customization-icon.png",
    },
    {
      title: "Futuristic Solutions",
      description: "We give you the agility and scalability to continuously wish for more in your products...",
      icon: "/images/futuristic-icon.png",
    },
    {
      title: "Comprehensive Support",
      description: "We believe in long term relations and your project is just a start...",
      icon: "/images/support-icon.png",
    }
  ];

  return (
    <WhyChooseUs 
      title="Why Choose Us?" 
      subtitle="We provide exceptional services with a focus on quality and customer satisfaction."
      features={features}
      theme="dark"
    />
  );
};

export default WhyChooseUsPage;