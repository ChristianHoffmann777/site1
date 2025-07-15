import React from 'react';

const Offerings = () => {
  const offerings = [
    {
      number: "01.",
      title: "Offering 1",
      description: "This section will highlight specific details about your core offering. We will write about what your offering is and how your company uses it to help users achieve their desired goals.",
      image: "/5388605693893937933.jpg"
    },
    {
      number: "02.",
      title: "Offering 2",
      description: "This section will highlight specific details about your core offering. We will write about what your offering is and how your company uses it to help users achieve their desired goals.",
      image: "/360_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg"
    },
    {
      number: "03.",
      title: "Offering 3",
      description: "This section will highlight specific details about your core offering. We will write about what your offering is and how your company uses it to help users achieve their desired goals.",
      image: "/iStock-695456288.jpg"
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
            PREFIX FOR THE OFFERINGS SECTION WILL BE HERE
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Heading for the Offerings Section Will Be Here
          </h2>
          
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            In this section, we will write a sub-headline for the offerings section here
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg bg-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div 
                  className="h-80 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('${offering.image}')`
                  }}
                >
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{offering.number}</h3>
                      <div className="w-8 h-0.5 bg-yellow-400 mb-6"></div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">{offering.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {offering.description}
                      </p>
                      <button className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors duration-200">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;