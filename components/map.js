import React, { useState } from "react";

const AustinMap = () => {
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220444.9414867632!2d-97.89348445000001!3d30.307462399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1697212345678!5m2!1sen!2sus"
  );

  return (
    <div className="flex flex-col items-left space-y-4 w-full mt-6">
  {/* Button container with max-w-6xl */}
  <div className="flex space-x-4 max-w-6xl mx-auto justify-start">
    <button
      onClick={() =>
        setMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220444.9414867632!2d-97.89348445000001!3d30.307462399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1697212345678!5m2!1sen!2sus"
        )
      }
      className="px-4 py-2 bg-[#FF0000] text-white  shadow-md hover:bg-red-600"
    >
      America
    </button>
    <button
      onClick={() =>
        setMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7937786446896!2d9.724801245606892!3d4.062415185401195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d8f44614511%3A0xe9218c486c34a7d2!2sBocom%20Bepanda%20Ambiance!5e0!3m2!1sen!2scm!4v1741729634884!5m2!1sen!2scm"
        )
      }
      className="px-4 py-2 bg-[#FF0000] text-white  shadow-md hover:bg-red-600"
    >
      Cameroon
    </button>
  </div>

  {/* Map container with full width */}
  <div className="w-full h-96  overflow-hidden shadow-lg">
    <iframe
      src={mapSrc}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
  );
};

export default AustinMap;