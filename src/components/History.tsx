import React from 'react';

const History = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="/5388605693893937937.jpg" 
              alt="Security camera" 
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
          
          <div>
            <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
              PREFIX FOR THE COMPANY'S HISTORY SECTION WILL BE HERE
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Heading for the Company's History Section Will Be Here
            </h2>
            
            <p className="text-base text-gray-300 mb-8 leading-relaxed">
              We will write a short description about how your company started. This can be about your founding members, or the history behind your products and services.
            </p>
            
            <button className="bg-yellow-400 text-slate-800 px-6 py-3 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;