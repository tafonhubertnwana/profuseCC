import { motion } from 'framer-motion';
import Head from 'next/head';

const DataVisualizationPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="bg-black text-white">
        <Head>
          <title>Data Visualization Services | Advanced Analytics Solutions</title>
          <meta name="description" content="Professional data visualization and analytics services to transform your business data into actionable insights" />
        </Head>

        {/* Why Data Visualization Section */}
        <section className="py-10 container xl:max-w-6xl mx-auto p-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Is Data Visualization Important?
            </h2>
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              {
                icon: '/images/dataAnalyticsCompanyLogo1.png',
                title: 'Investment for Future',
                description: 'Affording an agency that offers solid and reliable visualization tools for data is investing in an improved future. It helps you control an accurate visualization of your work and helps you to have a better understanding for the coming years.'
              },
              {
                icon: '/images/dataAnalyticsCompanyLogo2.png',
                title: 'Simple Interpretation of Data',
                description: 'This is not just a visualization tool that helps monitor the company\'s data, but it also helps in the easy processing of data, allowing users to make useful observations of large amounts of data using graphs, data visualization, tables, infographics, maps, and more.'
              },
              {
                icon: '/images/dataAnalyticsCompanyLogo3.png',
                title: 'Self Service Reporting',
                description: 'The various data visualization software enables individuals in an organization to have access to all necessary data and insights without the involvement of an IT department in the making process. This helps users become self-reliant and an information-driven company.'
              },
              {
                icon: '/images/dataAnalyticsCompanyLogo4.png',
                title: 'Faster Action and Decision Making',
                description: 'Data visualization can help to present information in their original form. This helps in identifying areas of your business that require focus, and also in laying down the patterns of consumer behavior. It also helps put in perspective the company\'s marketing strategy and sales.'
              },
              {
                icon: '/images/dataAnalyticsCompanyLogo5.png',
                title: 'Reduced Dependence',
                description: 'A majority of organizations depend heavily on spreadsheet applications to manage and report on information within the company. Not only are they wasting many hours of human time doing this, but it can be costly but also not as efficient or productive.'
              },
              {
                icon: '/images/dataAnalyticsCompanyLogo6.png',
                title: 'Technical consultancy',
                description: 'Use our knowledge and expertise on various development platforms and technology toolsets to decide better for your business. Get in touch with our technology experts for consulting your projects and creating a full-proof roadmap for your entire project and layout of plan.'
              }
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <div className="bg-[#FF0000] p-8  h-full hover:bg-white hover:text-black transition duration-300">
                  <div className="w-16 h-16 mb-6 bg-black rounded-full flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Our Data Visualization Services Section */}
        <section className="py-10 container xl:max-w-6xl mx-auto p-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Data Visualization Services
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Our team of experts is dedicated to helping you get more data. This means that you will have the appropriate tools and knowledge in order to make it as effortless to get around your data.
            </p>
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              {
                icon: '/images/dataAnalyticsLogo1.png',
                hoverIcon: '/images/dataAnalyticsLogo1_H.png',
                title: 'Dashboard Optimization',
                description: 'Providing quality services is a problem as the business is highly prone to losses. Damages are endless and compensations are made to the client for the same. Safe deliveries and undamaged good transportation is hard to achieve.'
              },
              {
                icon: '/images/dataAnalyticsLogo2.png',
                hoverIcon: '/images/dataAnalyticsLogo2_H.png',
                title: 'Power BI Migration',
                description: 'Visually present complex data as well as identify patterns and relationships to quickly identify the factors that affect the current business.'
              },
              {
                icon: '/images/dataAnalyticsLogo3.png',
                hoverIcon: '/images/dataAnalyticsLogo3_H.png',
                title: 'Power BI Services',
                description: 'Starting from Power BI implementation to visualization to realization of value, we provide flexible engagements that cater to requirements in business intelligence.'
              },
              {
                icon: '/images/dataAnalyticsLogo4.png',
                hoverIcon: '/images/dataAnalyticsLogo4_H.png',
                title: 'Data Platform Development',
                description: 'The next generation of platforms allow BI development simultaneously through platform modernization efforts and provide direction to developers while executing quickly on Proof of Concept and MVP needs.'
              },
              {
                icon: '/images/dataAnalyticsLogo5.png',
                hoverIcon: '/images/dataAnalyticsLogo5_H.png',
                title: 'Industry Leading Report Development',
                description: 'Full-featured reporting development for every level of the business from the analytic team to the executive team and onwards to the end user.'
              },
              {
                icon: '/images/dataAnalyticsLogo6.png',
                hoverIcon: '/images/dataAnalyticsLogo6_H.png',
                title: 'Centers Of Excellence In Reporting',
                description: 'Pin the developer\'s talent to concentrate in leading the way for citizen-led development, by offering agile, reliable and trustworthy sources of truth for the entire company.'
              }
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <div className=" p-8 rounded-sm bg-white text-black hover:bg-[#FF0000] hover:text-white hover h-full  transition duration-300 group">
                  <div className="relative w-16 h-16 mb-6">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-full h-full absolute top-0 left-0 group-hover:opacity-0 transition duration-300"
                    />
                    <img 
                      src={item.hoverIcon} 
                      alt={item.title} 
                      className="w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className=" ">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Types of Data Analytics Section */}
        <section className="py-10 container xl:max-w-6xl mx-auto p-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What are the 4 main types of data analytics?
            </h2>
            <div className="mb-8">
              <p className="text-lg text-gray-300 mb-6">
                Data analytics is a rapidly growing field in the modern world. It encompasses the collection, organization and analysis of data to help businesses and organizations make better decisions. As technology advances, so too does the range of data analytics techniques available to organizations. There are four main types of data analytics: descriptive, diagnostic, predictive, and prescriptive.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {[
                {
                  title: 'Descriptive Analytics',
                  description: 'Descriptive Analytics is used to describe what has happened in past events or activities. Businesses use this type of analytics to gain an understanding of how customers interact with their products or services; this includes analyzing customer retention rates and buying patterns over time. Descriptive analytics also helps identify trends that can inform future marketing strategies and product offerings.'
                },
                {
                  title: 'Diagnostic Analytics',
                  description: 'Diagnostic Analytics takes a more targeted approach than descriptive analytics by drilling down into specific events or activities to identify root causes for trends identified in descriptive analysis. This type of analysis allows businesses to pinpoint areas for improvement by identifying underlying problems that affect customer satisfaction or operations efficiency levels within an organization.'
                },
                {
                  title: 'Predictive Analytics',
                  description: 'Predictive Analytics uses algorithms and statistical models that analyze historical data alongside current trends in order to anticipate future outcomes based on existing patterns and behaviors from past experiences. Predictive models can be used for everything from forecasting demand for products or services to predicting creditworthiness for potential customers. This type of analysis provides valuable insights into what may happen next so companies can adjust their strategies accordingly.'
                },
                {
                  title: 'Prescriptive Analytics',
                  description: 'Finally, Prescriptive Analytics goes beyond predictive modeling by providing recommendations on what should be done next based on anticipated outcomes associated with different courses of action. It takes into account multiple variables such as costs, risks, rewards, constraints, etc., when providing guidance on which actions will lead organizations toward desired results. By using prescriptive models companies are able to make more informed decisions that maximize profit while minimizing risk exposure at the same time.'
                }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg ">{item.description}</p>
                
                </motion.div>
              ))}

            </motion.div>
              <motion.div variants={itemVariants} className="">
                <p className="text-lg text-gray-300 my-12">
                  In conclusion, there are four main types of data analytics: descriptive, diagnostic, predictive, and prescriptive each offering unique insights into how companies can best use their data for maximum impact across all areas of business operations.
                </p>
              </motion.div>
          </motion.div>
        </section>

      </div>
        {/* Data Analytics Solutions Section */}
        <section className="py-10 container xl:max-w-6xl mx-auto p-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our data analytics solutions & Services
            </h2>
            <div className="mb-8">
              <p className="text-lg text-gray-800">
                Data analytics solutions offer a wide range of features that allow businesses to make informed decisions and understand customer behavior. With data analytics, organizations can gain valuable insights into their customers and operations, enabling them to make better decisions, improve customer experiences, and achieve better business outcomes. In this article, we'll explore some of the key features of data analytics solutions.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {[
                {
                  title: 'Data Collection:',
                  description: 'Data analytics solutions help businesses collect relevant data from various sources such as websites, mobile apps, databases, CRM systems and more. This data is then stored in a central repository for easy access and analysis. Data collection allows organizations to gather large amounts of information quickly so they can identify trends and patterns in customer behavior that can be used to create better strategies for success.'
                },
                {
                  title: 'Data Visualization:',
                  description: 'Data visualization tools enable users to easily visualize complex datasets in an intuitive way. These visualizations provide meaningful insights into the data which helps users identify patterns or trends quickly without having to go through extensive amounts of raw data manually. This feature also enables users to create dynamic reports with interactive charts and graphs for a more comprehensive understanding of the information being presented.'
                },
                {
                  title: 'Data Analysis:',
                  description: 'Data analysis is the process of extracting useful information from large datasets using statistical models or algorithms. By analyzing collected datasets using advanced methods such as machine learning or predictive analytics, organizations are able to accurately predict customer behavior or market trends faster than ever before by leveraging powerful tools like AI-powered recommendation engines or sentiment analysis tools which help them understand customers on a deeper level than ever before possible with traditional methods alone'
                },
                {
                  title: 'Data Security:',
                  description: 'Keeping user\'s personal information secure is essential when it comes to collecting any kind of sensitive data with any type of system including those used for analytical purposes such as A/B testing platforms or heat mapping software etc. To ensure proper security measures are taken when conducting research via these platforms many providers offer encryption services at both storage layer as well as transmission layer levels thus preventing any malicious activity from occurring throughout the whole process.'
                },
                {
                  title: 'Reporting & Insights Delivery:',
                  description: 'Reports generated by analytical solutions help businesses gain actionable insights that can be used for decision-making processes within their organization. Many providers also offer automated delivery services that enable companies to receive real-time alerts whenever new reports become available making it much easier to stay up-to-date on all changes happening within their enterprise. Additionally, some providers even allow users to customize reporting preferences according to what kind of metrics they want to track within their organization such as total visits, pageviews, downloads etc.'
                },
                {
                  title: 'Scalability:',
                  description: 'As your business grows so will its analytical needs - this is why scalability is one important feature offered by most modern-day analytic solutions Your provider should have the ability to scale up and increase capacity while adding additional resources without affecting performance too much. This ensures you won\'t run out space when you need it most allowing you keep growing your business steadily over time without running into any issues related resource limitation'
                }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className=" p-8 rounded-sm bg-black text-white h-full  transition duration-300 group">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-lg ">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
    </>
  );
};

export default DataVisualizationPage;