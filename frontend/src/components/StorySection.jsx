import React from 'react';
import { Heart, Users, Award } from 'lucide-react';

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story Content */}
          <div className="space-y-8">
            <div>
              <h2 className="section-heading text-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4">
                <p className="body-large text-dark-grey leading-relaxed">
                  Twinzy was born from a simple yet profound belief: memories deserve to be preserved in their most authentic form. What began as a passion for sculpting has evolved into a mission to create art that transcends time.
                </p>
                <p className="body-large text-dark-grey leading-relaxed">
                  Every wrinkle tells a story. Every smile carries emotion. Every detail matters. Our team of master sculptors combines traditional artistry with cutting-edge silicone techniques to create sculptures so lifelike, they seem to breathe.
                </p>
                <p className="body-large text-dark-grey leading-relaxed">
                  We've had the privilege of working with families preserving the memory of their loved ones, museums creating educational exhibits, and brands seeking authentic human representations. Each project is a testament to our commitment to excellence.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mid-orange/20 flex items-center justify-center">
                  <Heart className="text-mid-orange" size={24} />
                </div>
                <div>
                  <h3 className="card-heading text-black mb-2">Emotional Connection</h3>
                  <p className="body-small text-dark-grey">
                    We understand the deep emotional significance of each sculpture and treat every project with the utmost care and sensitivity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mid-orange/20 flex items-center justify-center">
                  <Users className="text-mid-orange" size={24} />
                </div>
                <div>
                  <h3 className="card-heading text-black mb-2">Collaborative Process</h3>
                  <p className="body-small text-dark-grey">
                    We work closely with our clients throughout the creation process, ensuring every detail reflects their vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mid-orange/20 flex items-center justify-center">
                  <Award className="text-mid-orange" size={24} />
                </div>
                <div>
                  <h3 className="card-heading text-black mb-2">Artistic Excellence</h3>
                  <p className="body-small text-dark-grey">
                    Our sculptors are masters of their craft, with years of experience in creating hyper-realistic human forms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1643113232724-c7f36cb4bd41"
                  alt="Sculpture detail"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/2362469/pexels-photo-2362469.jpeg"
                  alt="Bust sculpture"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-12">
                <img
                  src="https://images.unsplash.com/photo-1719582116363-a55de8b46222"
                  alt="Classical sculpture"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1653255657076-6ac54333e2f4"
                  alt="Emotional sculpture"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-mid-orange/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;