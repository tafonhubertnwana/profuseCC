import WhyChooseUs from '@/components/customized/WhyChooseUs';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Business Automation",
      description: "We develop technologies allowing your business to thrive better while enhancing productivity. We automate your business process to give you an accurate way to enable enterprises to bring more innovation and flare.",
      icon: "/industry/tel-16.png",
    },
    {
      title: "Software Development Life Cycle Management",
      description: "Low-cost development, as low as possible. We give you software maintenance and management services that ease your process at different stages.",
      icon: "/industry/tel-7.png",
    },
    {
      title: "Software Consulting",
      description: "Advanced Telecom IT services help you focus on your real challenges, find robust solutions and meet your financial objectives. We offer you expert technology solutions that ease your process and operations. At the same time, make your digital transformations as swift as ever.",
      icon: "/industry/tel-18.png",
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