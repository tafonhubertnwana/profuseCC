import Image from 'next/image';

const DataAndAnalyticsServices = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="container xl:max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image on the left */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/slide2.jpg" // Replace with your image path
            alt="Data and Analytics"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content on the right */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Data and Analytics Services
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Imagine a constant flow of data-driven insights guiding you toward smarter decisions, greater business agility, and, ultimately, competitive advantage. With Kanda’s full-cycle data and analytics services, you can monetize your data, break data silos, and unlock the full potential of your data goldmine. Backed by deep domain understanding, a solid grasp of modern data technologies, and advanced analytics skills, we can help you take your data narrative to the next level.
          </p>
          <button className="bg-[#FF0000] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataAndAnalyticsServices;