import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/360_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg')`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <p className="text-yellow-400 text-sm font-medium tracking-wider uppercase mb-6">
            Since 2009
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
            Оберіг
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            високоякіні іноваційні системи відеоспостереження, контролю доступу та домофони
          </p>
          
          <button className="bg-yellow-400 text-slate-800 px-8 py-3 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200">
            CALL TO ACTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;