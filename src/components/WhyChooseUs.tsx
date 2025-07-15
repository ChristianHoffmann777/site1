import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Unique Value Proposition 1",
      description: "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors."
    },
    {
      number: "02", 
      title: "Unique Value Proposition 2",
      description: "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors."
    },
    {
      number: "03",
      title: "Unique Value Proposition 3", 
      description: "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors."
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
            PREFIX FOR THE UNIQUE VALUE PROPOSITION SECTION WILL BE HERE
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto">
            Headline Describing Your Unique Value Propositions Will Be Here
          </h2>
          
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-12">
            In this section, we will write a sub-headline describing what makes you stand out from your competitors
          </p>
        </div>

        <div className="relative mb-16">
          <div 
            className="h-80 rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage: `url('/5388605693893937938.jpg')`
            }}
          />
        </div>
          
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <div className="text-yellow-400 text-lg font-bold mb-4">
                {feature.number}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;