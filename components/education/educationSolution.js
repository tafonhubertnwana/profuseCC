import SolutionsGrid from '@/components/customized/solutionGrid';

export default function EducationSolutions() {
  const bankingData = {
    title: "E Learning Solutions we cater to",
    items: [
      {
        title: "Online E-Learning Solutions",
        description: "Feature-rich and interactive online e learning web portal development and designing, we give you secure and user friendly e learning solutions.",
        image: "/assets/api.png",
      },
      {
        title: "Remote Learning Websites",
        description: "We incorporate various technologies and tools such as live chat, video streaming, interactive media and others for improved user experience and better offshore learning.",
        image: "/assets/api.png",
      },
      {
        title: "Institute Management Software",
        description: "On the go student, curriculum, attendance, faculties, payroll management software that allow you to manage the world on the go.",
        image: "/assets/api.png",
      },
      {
        title: "SCORM / AICC Compliant Content Management",
        description: "Content management software that provides you the facilities to manage your content in one go, with SCORM/ AICC compliant.",
        image: "/assets/api.png",
      },
      {
        title: "Web Applications / Portal",
        description: "Elearning web application development to give you feature-rich elearning platforms that are secure and built to provide you the edge of management.",
        image: "/assets/api.png",
      },
      {
        title: "Application Development and Maintenance",
        description: "Powerful e learning application development allows you to reach your most potential users on an interactive and user friendly platform for greater engagement.",
        image: "/assets/api.png",
      },
      ,
      {
        title: "Virtual Classroom Solutions",
        description: "Virtual classroom solutions that give away your users class-room like experience. At CIS we make sure that your students are having a great learning experience while enjoying the same interactivity of the in-class education sessions.",
        image: "/assets/api.png",
      },
      
      {
        title: "Mobile Learning Applications",
        description: "Educational mobile app development allows you to reach users on popular mobile platforms such as android, iPhone, cross platform.",
        image: "/assets/api.png",
      },
      ,
      {
        title: "Online Examination Portal",
        description: "Feature-rich and secure elearning web portals that come with online examination facilities that allow you to manage and execute tests on web and application platforms.",
        image: "/assets/api.png",
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