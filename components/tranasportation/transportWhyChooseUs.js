import WhyChooseUs from '@/components/customized/WhyChooseUs';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Accessible Solutions",
      description: "ProfuseCC makes it easier to adopt and implement technology. We make every effort to reduce the obstacles that can hinder your adoption of digitalization. They can be used by anyone with basic technical knowledge to manage their vendors, back-end fleet, inventory, and other technology solutions that are changing the transportation industry.",
      icon: "/industry/log-19.png",
    },
    {
      title: "Tailor Made",
      description: "We don't offer pre-made solutions, but custom-made IT solutions that are tailored to your business. You can customize our built technology solutions to meet your specific business needs.",
      icon: "/industry/log-20.png",
    },
    {
      title: "Timeless Solutions",
      description: "While it is essential to adapt to the times, and technology is no exception, it is optional to start all over every time a new product or service is introduced. ProfuseCC provides you with the ability to find timeless solutions that will continue to be effective over time in managing your business operations",
      icon: "/industry/log-21.png",
    }
    ,
    {
      title: "Extensive Support",
      description: "Our support team is available 24 hours a day, seven days a week. This means that we can help you with any product-related issues. Get comprehensive support to keep your products in good condition and increase your sales long-term.",
      icon: "/industry/log-22.png",
    }
  ];

  return (
    <main>
      <WhyChooseUs 
        title="Why Choose Us?"
        subtitle=""
        features={features}
      />
    </main>
  );
}