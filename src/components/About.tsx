import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
              PREFIX FOR THE ABOUT US SECTION
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Heading for the About Us Section Will Be Here
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-base leading-relaxed">
                In this part, we will introduce you or your business to website visitors. We'll write about you, your organization, the products or services you offer, and why your company exists.
              </p>
              
              <p className="text-base leading-relaxed">
                For this part, we will write an additional introduction of you or your business. This can be about your company history, success stories, or the products or services you offer.
              </p>
            </div>
            
            <button className="mt-8 bg-transparent border border-gray-400 text-gray-300 px-6 py-3 text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
              LEARN MORE
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-slate-700 rounded-lg p-8 shadow-2xl">
              <img 
                src="/iStock-695456288.jpg" 
                alt="About us" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;