import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/360_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg')`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
          PREFIX FOR THE CALL TO ACTION SECTION WILL BE HERE
        </p>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
          We Will Write a Convincing Call to Action to Engage Your Audience Here
        </h2>
        
        <p className="text-base text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          We will write a compelling call to action to engage your audience here
        </p>
        
        <button className="bg-yellow-400 text-slate-800 px-8 py-3 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200">
          CALL TO ACTION
        </button>
      </div>
    </section>
  );
};

export default CallToAction;