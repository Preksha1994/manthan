import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and tagline */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_f926e287-6a34-490f-b6e8-a51db27087dd/artifacts/9048ha4b_twinzy-high-resolution-logo-transparent.png" 
              alt="Twinzy - The Sculpture Studio" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="body-small text-mid-grey">
              Sculpting memories into reality since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="card-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                  className="body-small text-mid-grey hover:text-mid-orange transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
                  className="body-small text-mid-grey hover:text-mid-orange transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
                  className="body-small text-mid-grey hover:text-mid-orange transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="body-small text-mid-grey hover:text-mid-orange transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="card-heading mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="body-small text-mid-grey">Life-Size Sculptures</li>
              <li className="body-small text-mid-grey">Half-Body Sculptures</li>
              <li className="body-small text-mid-grey">Bust Sculptures</li>
              <li className="body-small text-mid-grey">Custom Commissions</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-mid-grey/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="caption text-mid-grey">
            © {new Date().getFullYear()} Twinzy - The Sculpture Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="caption text-mid-grey hover:text-mid-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="caption text-mid-grey hover:text-mid-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;