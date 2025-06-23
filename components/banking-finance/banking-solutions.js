import SolutionsGrid from '@/components/customized/solutionGrid';

export default function BankingSolutions() {
  const bankingData = {
    title: "Banking & Finance Solutions",
    items: [
      {
        title: "Net Banking Portal",
        description: "Give your users a sophisticated portal to access their accounts, our built fintech solutions are highly secure and technology driven to deliver your users robust net banking portals for your users.",
        image: "/industry/fin-10.png",
      },
      {
        title: "Customer Management Solutions",
        description: "Know your customers with amazing customer experience with your financial institution. Our customer management solution allows you to build strong customer relationships.",
        image: "/industry/fin-11.png",
      },
      {
        title: "Banking Mobile Apps",
        description: "We build Android, iOS and Multi-platform banking applications that give your users the freedom to enjoy mobile banking on the go.",
        image: "/industry/fin-12.png",
      },
      {
        title: "EWallet App Development",
        description: "Ewallet is one of the biggest trends ever in the industry. We give you out of the box Ewallet app experiences with class apart features and security.",
        image: "/industry/fin-13.png",
      },
      {
        title: "Finance Management Software",
        description: "Dependable finance management software that helps you bring transparency in finance and transactions with advanced data security solutions.",
        image: "/industry/fin-14.png",
      },
      {
        title: "Insurance Management Portal",
        description: "We develop portals that are secure, futuristic, and help you manage your insurance company better with error rates next to nothing. It is an advanced solution allowing you to access your customer data, insurance plan and more.",
        image: "/industry/fin-15.png",
      },
      ,
      {
        title: "Enterprise Application Integration (EAI)",
        description: "Powerful technology solutions that help you get the needed ease in internal and external operations on the go, allowing you to streamline your processes for better experience.",
        image: "/industry/fin-16.png",
      },
      
      {
        title: "Data Management Solutions",
        description: "Manage your bunch of data without effort, get data management solutions by CIS that gives you the technology to secure your user data while also making data processing easier than ever before.",
        image: "/industry/fin-17.png",
      },
      ,
      {
        title: "Credit Processing Solutions",
        description: "Interactive credit score checker software solution that allows your users to keep a track of your credit score for their better experience and B2C interactivity.",
        image: "/industry/fin-18.png",
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