import SolutionsGrid from '@/components/customized/solutionGrid';

export default function TelecommunicationSolutions() {
  const bankingData = {
    title: "Our Telecommunication Solutions",
    items: [
      {
        title: "Infrastructure Management Services",
        description: "Our advanced infrastructure management services allow you to transform your processes into digital to render the power of technology to run your business efficiently for better results, performance and productivity.",
        image: "/industry/tel-10.png",
      },
      {
        title: "Engineering and R&D Services",
        description: "We are one of the world's leading technology partners to provide support for your IT needs. Our provided telecom IT services allow you to use advanced analytics and the dependable software solutions to boost your R& D accuracy for improved precision and services.",
        image: "/industry/tel-11.png",
      },
      {
        title: "Customer Experience Management",
        description: "Mobile and Web solutions powered by high-end technology and trendy solutions such as chatbots, AI for augmented customer experience. We help you achieve quantifiable business outcomes by completely transforming your business to process in new and improved ways.",
        image: "/industry/tel-12.png",
      },
      
      {
        title: "Big Data Analytics",
        description: "Go data-driven as now you have the power to translate it into robust tactics and strategies that pay your business with never-experienced before results. We give you big data benefits seamed with our telecom IT services to help you innovate, complete and aim for higher business value.",
        image: "/industry/tel-13.png",
      },
      {
        title: "App Modernization",
        description: "Modern mobile app development and platform engineering solutions that bring you much closer to your users while securing your internal processes. Not stopping there, we make use of solutions such as Cloud, API, DevOps to tap more advanced business options.",
        image: "/industry/tel-14.png",
      },
      {
        title: "Transfer Management",
        description: "Innovative BPO telecom practice support for your front-end, back-end processes on wireless, mobile, cable, VoIP and TV service lines. We give you the power to manage your workload efficiently.",
        image: "/industry/tel-15.png",
      },
      
    ]
  };

  return (
    <main>
      <SolutionsGrid 
        title={bankingData.title}
        items={bankingData.items}
      />
    </main>
  );
}