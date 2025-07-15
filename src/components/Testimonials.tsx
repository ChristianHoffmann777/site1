import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We will write a testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
      author: "TESTIMONIAL AUTHOR NAME",
      avatar: "/5388605693893937933.jpg"
    },
    {
      quote: "We will write a testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
      author: "TESTIMONIAL AUTHOR NAME", 
      avatar: "/360_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg"
    },
    {
      quote: "We will write a testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
      author: "TESTIMONIAL AUTHOR NAME",
      avatar: "/iStock-695456288.jpg"
    },
    {
      quote: "We will write a testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
      author: "TESTIMONIAL AUTHOR NAME", 
      avatar: "/5388605693893937937.jpg"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
            PREFIX FOR THE TESTIMONIALS SECTION WILL BE HERE
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Heading for the Testimonials Section Will Be Here
          </h2>
          
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            In this section, we will write a sub-heading for the testimonials section
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-700 rounded-lg p-6 shadow-xl">
              <div className="flex items-start space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-white font-semibold text-xs tracking-wider uppercase">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;