import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black to-dark-grey text-white">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="section-heading mb-4">
                Let's Create Something
                <br />
                <span className="text-mid-orange">Extraordinary</span>
              </h2>
              <p className="body-large text-mid-grey">
                Whether you're preserving a memory, creating an exhibition piece, or bringing a vision to life, we're here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mid-orange/20 flex items-center justify-center group-hover:bg-mid-orange transition-colors">
                  <Mail className="text-mid-orange group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="card-heading mb-1">Email Us</h3>
                  <a href="mailto:hello@twinzy.studio" className="body-medium text-mid-grey hover:text-mid-orange transition-colors">
                    hello@twinzy.studio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mid-orange/20 flex items-center justify-center group-hover:bg-mid-orange transition-colors">
                  <Phone className="text-mid-orange group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="card-heading mb-1">Call Us</h3>
                  <a href="tel:+1234567890" className="body-medium text-mid-grey hover:text-mid-orange transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mid-orange/20 flex items-center justify-center group-hover:bg-mid-orange transition-colors">
                  <MapPin className="text-mid-orange group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="card-heading mb-1">Visit Our Studio</h3>
                  <p className="body-medium text-mid-grey">
                    123 Art District, Creative Quarter
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-mid-grey/30">
              <p className="body-small text-mid-grey mb-4">Follow Our Journey</p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mid-orange/20 flex items-center justify-center hover:bg-mid-orange transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="text-mid-orange group-hover:text-white transition-colors" size={20} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mid-orange/20 flex items-center justify-center hover:bg-mid-orange transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="text-mid-orange group-hover:text-white transition-colors" size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mid-orange/20 flex items-center justify-center hover:bg-mid-orange transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-mid-orange group-hover:text-white transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1643113231904-ea2af9b4ebcb"
                alt="Contact us"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-3xl font-bold text-white">
                  "Art that connects hearts across time"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;