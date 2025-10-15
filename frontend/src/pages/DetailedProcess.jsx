import React, { useState } from 'react';
import { CheckCircle, Shield, Clock, Award, ArrowRight, Camera, Palette, Users, Sparkles, Eye, Scissors, Package, Phone } from 'lucide-react';
import '../styles/detailed-process.css';

const DetailedProcess = () => {
  const [activeStep, setActiveStep] = useState(null);

  const processSteps = [
    {
      number: '01',
      icon: CheckCircle,
      title: 'Order Confirmation & Consultation',
      duration: '1-2 Days',
      description: 'Your journey to immortalizing memories begins here. Our dedicated consultants conduct an in-depth consultation to understand your vision, emotional connection, and specific requirements.',
      details: [
        'Comprehensive project scope discussion and requirement gathering',
        'Budget planning and flexible payment structure customization',
        'Timeline establishment with milestone checkpoints',
        'Legal documentation and commission agreement formalization',
        'Assignment of dedicated project manager for seamless coordination'
      ],
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800'
    },
    {
      number: '02',
      icon: Camera,
      title: 'Professional Image Selection & Analysis',
      duration: '2-3 Days',
      description: 'Our master sculptors meticulously analyze high-resolution photographs from multiple angles to capture every nuance of facial features, bone structure, and distinctive characteristics.',
      details: [
        'Multi-angle photographic assessment (minimum 20 reference images)',
        'Facial feature mapping using advanced anthropometric techniques',
        'Skin texture, tone, and complexion detailed documentation',
        'Distinctive marks, wrinkles, and aging patterns identification',
        'Collaborative review session with client for accuracy validation'
      ],
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800'
    },
    {
      number: '03',
      icon: Palette,
      title: 'Costume Design & Material Selection',
      duration: '3-5 Days',
      description: 'Every garment tells a story. Our textile specialists work with you to select authentic fabrics, period-accurate costumes, or contemporary attire that reflects the subject\'s personality and era.',
      details: [
        'Historical research for period-accurate costume authenticity',
        'Fabric selection matching original texture and drape characteristics',
        'Color matching using professional colorimetry standards',
        'Custom tailoring for anatomically precise fit',
        'Accessory sourcing including jewelry, watches, and personal items'
      ],
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea1c8c3d?w=800'
    },
    {
      number: '04',
      icon: Users,
      title: 'Expression & Pose Finalization',
      duration: '2-3 Days',
      description: 'Capturing the essence of personality through body language and facial expression. Our artistic directors collaborate with you to determine the perfect pose that embodies the subject\'s character.',
      details: [
        'Psychological profiling to capture authentic personality traits',
        'Body language consultation and gesture selection',
        'Facial expression fine-tuning for emotional resonance',
        'Pose stability assessment for long-term structural integrity',
        'Digital mockup creation for client approval before sculpting'
      ],
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800'
    },
    {
      number: '05',
      icon: Sparkles,
      title: 'Digital Avatar Development',
      duration: '7-10 Days',
      description: 'Cutting-edge 3D scanning and digital modeling technology creates a precise virtual blueprint. Our digital artists construct a hyper-accurate anatomical model that serves as the foundation.',
      details: [
        '3D photogrammetry and laser scanning for dimensional accuracy',
        'Digital sculpting using industry-leading ZBrush software',
        'Anatomical proportion verification against medical standards',
        'Muscle structure and bone framework digital construction',
        'Client presentation with 360-degree rotational preview'
      ],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800'
    },
    {
      number: '06',
      icon: Eye,
      title: 'Tangible Face Prototype Creation',
      duration: '10-14 Days',
      description: 'Master sculptors hand-craft the initial clay prototype with microscopic precision. Every wrinkle, pore, and subtle feature is meticulously sculpted to achieve photographic realism.',
      details: [
        'Oil-based clay sculpting by certified master artisans',
        'Micro-detailing of facial pores, wrinkles, and skin texture',
        'Symmetry verification using professional calipers',
        'Eye socket and ocular region precision sculpting',
        'Preliminary skin surface texturing for realism'
      ],
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800'
    },
    {
      number: '07',
      icon: CheckCircle,
      title: 'Client Verification & Approval',
      duration: '2-3 Days',
      description: 'Your satisfaction is paramount. We present the clay prototype for your thorough inspection, welcoming feedback and making unlimited revisions until perfection is achieved.',
      details: [
        'In-person or virtual presentation with high-definition imagery',
        'Detailed walkthrough highlighting key facial features',
        'Client feedback documentation and revision planning',
        'Unlimited modification cycles until complete satisfaction',
        'Final approval documentation before mold creation'
      ],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800'
    },
    {
      number: '08',
      icon: Award,
      title: 'Professional Mold Development',
      duration: '7-10 Days',
      description: 'Advanced silicone molding techniques capture every microscopic detail from the approved clay sculpture. Multi-piece molds ensure perfect reproduction of complex facial features.',
      details: [
        'Multi-piece mold engineering for complex undercut preservation',
        'Medical-grade silicone mold material application',
        'Registration key system for perfect mold alignment',
        'Surface detail transfer verification at microscopic level',
        'Mold curing in controlled temperature environments'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800'
    },
    {
      number: '09',
      icon: Palette,
      title: 'Silicone Casting & Hand-Painting Artistry',
      duration: '14-21 Days',
      description: 'Premium medical-grade silicone is carefully cast and cured. Our artistic painters apply multiple translucent layers to replicate authentic skin tones, veining, and natural coloration.',
      details: [
        'Platinum-cure medical-grade silicone casting',
        'Multi-layer translucent painting technique (8-12 layers)',
        'Vein mapping and subcutaneous color replication',
        'Micro-pigmentation for freckles, age spots, and birthmarks',
        'UV-resistant sealant application for color longevity'
      ],
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800'
    },
    {
      number: '10',
      icon: Scissors,
      title: 'Premium Hair Selection',
      duration: '3-5 Days',
      description: 'Authentic human hair or premium synthetic fibers are carefully selected to match color, texture, and curl pattern. Each strand is quality-inspected for consistency.',
      details: [
        'Human hair or premium synthetic fiber procurement',
        'Color matching using professional hair color charts',
        'Texture analysis: straight, wavy, curly, or coiled',
        'Gray hair ratio calculation for authentic aging',
        'Hair sterilization and preparation for insertion'
      ],
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800'
    },
    {
      number: '11',
      icon: Sparkles,
      title: 'Meticulous Hair Punching & Styling',
      duration: '21-30 Days',
      description: 'The most labor-intensive phase: individual hair strands are hand-inserted one-by-one into the silicone scalp, eyebrows, eyelashes, and facial hair using specialized needles.',
      details: [
        'Individual strand insertion (30,000-150,000 hairs per head)',
        'Directional growth pattern replication for natural appearance',
        'Density variation matching original hair distribution',
        'Professional hairstyling and trimming to exact specifications',
        'Heat styling for permanent wave or curl retention'
      ],
      image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=800'
    },
    {
      number: '12',
      icon: Package,
      title: 'Costume Assembly & Accessory Integration',
      duration: '5-7 Days',
      description: 'The sculpture comes to life as custom-tailored garments are carefully dressed, and personal accessories are integrated. Every button, zipper, and fold is positioned authentically.',
      details: [
        'Professional garment pressing and wrinkle removal',
        'Anatomically accurate dressing on articulated armature',
        'Jewelry, watches, and accessory authentic placement',
        'Fabric drape adjustment for natural clothing flow',
        'Final styling touches: ties, scarves, and decorative elements'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'
    },
    {
      number: '13',
      icon: Award,
      title: 'Final Silicone Face Assembly & Quality Control',
      duration: '3-5 Days',
      description: 'The completed silicone face is permanently bonded to the body armature. Rigorous quality inspections ensure museum-grade standards are met at every checkpoint.',
      details: [
        'Precision adhesive bonding of face to body structure',
        'Seamless blending of neck and shoulder transitions',
        'Glass or acrylic eye installation with pupil alignment',
        'Final touch-ups: makeup, skin sheen adjustment',
        '127-point quality control inspection checklist'
      ],
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a5e0?w=800'
    },
    {
      number: '14',
      icon: Package,
      title: 'Professional Packaging & Secure Dispatch',
      duration: '2-3 Days',
      description: 'Your masterpiece is carefully packaged in custom-built crates with climate control. White-glove delivery service ensures safe arrival with installation support.',
      details: [
        'Custom wooden crate construction with shock-absorbing materials',
        'Climate-controlled packaging for silicone preservation',
        'Insurance documentation and detailed care manual',
        'GPS-tracked specialized art transportation',
        'Professional installation service and positioning assistance'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800'
    }
  ];

  const totalDuration = '4-6 Months';

  return (
    <div className="detailed-process-page">
      {/* Navigation */}
      <nav className="process-nav">
        <div className="process-nav-container">
          <img 
            src="https://customer-assets.emergentagent.com/job_lifelikeart/artifacts/tog633sh_twinzy-high-resolution-logo-transparent.png"
            alt="Twinzy"
            className="process-nav-logo"
          />
          <a href="/" className="back-home-btn">
            <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
            Back to Home
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="process-hero">
        <div className="process-hero-content">
          <span className="process-badge">COMPLETE TRANSPARENCY</span>
          <h1 className="process-hero-title">
            The Art & Science of
            <br />
            <span className="title-gradient">Hyper-Realistic Sculpture</span>
          </h1>
          <p className="process-hero-subtitle">
            A meticulous 14-step journey spanning 4-6 months, where cutting-edge technology meets centuries-old craftsmanship to immortalize your legacy in museum-quality silicone.
          </p>
          
          <div className="process-hero-stats">
            <div className="hero-stat-item">
              <Clock size={32} />
              <div>
                <strong>{totalDuration}</strong>
                <span>Average Timeline</span>
              </div>
            </div>
            <div className="hero-stat-item">
              <Users size={32} />
              <div>
                <strong>15+ Artisans</strong>
                <span>Per Sculpture</span>
              </div>
            </div>
            <div className="hero-stat-item">
              <Shield size={32} />
              <div>
                <strong>3-Year Warranty</strong>
                <span>From Delivery Date</span>
              </div>
            </div>
            <div className="hero-stat-item">
              <Award size={32} />
              <div>
                <strong>127 Checkpoints</strong>
                <span>Quality Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="process-timeline-section">
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {processSteps.map((step, index) => (
            <div 
              key={step.number}
              className={`timeline-step ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              <div className="timeline-marker">
                <div className="marker-circle">
                  <step.icon size={28} />
                </div>
                <div className="marker-number">{step.number}</div>
              </div>

              <div className="timeline-content-card">
                <div className="timeline-card-header">
                  <div className="card-header-left">
                    <h3>{step.title}</h3>
                    <div className="duration-badge">
                      <Clock size={14} />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                  <div className="expand-indicator">
                    <ArrowRight size={24} className={activeStep === index ? 'rotated' : ''} />
                  </div>
                </div>

                <p className="step-description">{step.description}</p>

                {activeStep === index && (
                  <div className="step-expanded-content">
                    <div className="expanded-grid">
                      <div className="expanded-image">
                        <img src={step.image} alt={step.title} />
                      </div>
                      <div className="expanded-details">
                        <h4>Detailed Process Breakdown:</h4>
                        <ul className="process-checklist">
                          {step.details.map((detail, idx) => (
                            <li key={idx}>
                              <CheckCircle size={18} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Warranty Section */}
      <section className="warranty-section">
        <div className="warranty-container">
          <div className="warranty-content">
            <div className="warranty-icon">
              <Shield size={64} />
            </div>
            <h2>3-Year Comprehensive Warranty</h2>
            <p className="warranty-subtitle">
              Your investment is protected. We stand behind our craftsmanship with an industry-leading warranty.
            </p>
            
            <div className="warranty-features">
              <div className="warranty-feature">
                <CheckCircle size={24} />
                <div>
                  <h4>Structural Integrity</h4>
                  <p>Full coverage against cracking, separation, or armature failure</p>
                </div>
              </div>
              <div className="warranty-feature">
                <CheckCircle size={24} />
                <div>
                  <h4>Color Preservation</h4>
                  <p>Protection against fading, discoloration, or pigment degradation</p>
                </div>
              </div>
              <div className="warranty-feature">
                <CheckCircle size={24} />
                <div>
                  <h4>Hair Retention</h4>
                  <p>Guarantee against excessive hair loss or styling failure</p>
                </div>
              </div>
              <div className="warranty-feature">
                <CheckCircle size={24} />
                <div>
                  <h4>Free Maintenance</h4>
                  <p>Annual professional cleaning and inspection included</p>
                </div>
              </div>
            </div>

            <div className="warranty-note">
              <p><strong>Note:</strong> Warranty coverage begins from the date of delivery. Extended warranty packages available upon request. Normal wear and tear due to environmental factors may apply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="process-cta-section">
        <div className="process-cta-content">
          <h2>Ready to Begin Your Sculpture Journey?</h2>
          <p>Experience the unparalleled craftsmanship and attention to detail that has made us the industry leader in hyper-realistic silicone sculptures.</p>
          <div className="cta-buttons">
            <button className="cta-primary-btn">
              <Phone size={24} />
              <div>
                <span className="cta-main-text">Call Now: +1 (234) 567-890</span>
                <span className="cta-sub-text">FREE Consultation & Quote</span>
              </div>
            </button>
          </div>
          <div className="cta-assurance">
            <CheckCircle size={20} />
            <span>3-Year Warranty • Flexible Payment Plans • 100% Satisfaction Guarantee</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="process-footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_lifelikeart/artifacts/tog633sh_twinzy-high-resolution-logo-transparent.png"
              alt="Twinzy"
              className="footer-logo"
            />
            <p>Sculpting memories into reality since 2009</p>
          </div>
          <div className="footer-info">
            <p><strong>Phone:</strong> +1 (234) 567-890</p>
            <p><strong>Email:</strong> hello@twinzy.studio</p>
            <p>© 2024 Twinzy - The Sculpture Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DetailedProcess;
