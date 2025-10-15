import React from 'react';
import { Camera, Palette, Hammer, Sparkles } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Consultation & Photography',
      description: 'We begin with detailed photographs and measurements, capturing every angle and expression. Our team discusses your vision and the story you want to tell.',
      color: 'bg-light-pink',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Planning',
      description: 'Our artists create detailed sketches and 3D models, planning every aspect from pose to proportions. We ensure accuracy before moving to sculpting.',
      color: 'bg-light-yellow',
    },
    {
      number: '03',
      icon: Hammer,
      title: 'Sculpting & Molding',
      description: 'Master sculptors hand-craft the form using premium silicone, meticulously recreating facial features, skin texture, and every subtle detail.',
      color: 'bg-mid-blue/20',
    },
    {
      number: '04',
      icon: Sparkles,
      title: 'Finishing & Delivery',
      description: 'The final stage involves painting, hair placement, and quality checks. Each sculpture is carefully packaged and delivered with installation support.',
      color: 'bg-mid-purple/20',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-black mb-4">
            How We Work
          </h2>
          <p className="body-large text-dark-grey max-w-2xl mx-auto">
            Our meticulous process combines artistic vision with technical precision, ensuring every sculpture is a masterpiece.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-mid-orange to-transparent -z-10"></div>
                )}

                <div className="relative">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-mid-orange flex items-center justify-center font-mono text-white font-bold text-sm shadow-lg z-10">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className={`${step.color} rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}>
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                        <Icon className="text-mid-orange" size={28} />
                      </div>
                    </div>
                    
                    <h3 className="card-heading text-black mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="body-small text-dark-grey leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="body-large text-dark-grey mb-6">
            Ready to start your sculpture journey?
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="cta-button large"
          >
            Begin Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;