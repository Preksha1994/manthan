import React, { useState } from 'react';
import { portfolioData } from '../data/mock';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'life-size', label: 'Life-Size' },
    { id: 'half-body', label: 'Half-Body' },
    { id: 'bust', label: 'Bust' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-black mb-4">
            Our Portfolio
          </h2>
          <p className="body-large text-dark-grey max-w-2xl mx-auto">
            Each sculpture tells a unique story. Explore our collection of hyper-realistic creations that capture the essence of humanity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`service-button transition-all ${
                activeCategory === category.id
                  ? 'bg-mid-orange text-white border-mid-orange'
                  : 'bg-white text-black border-mid-grey hover:border-mid-orange'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
              style={{ 
                backgroundColor: 'white',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="service-button" style={{ backgroundColor: project.tagColor }}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-2">
                <h3 className="card-heading text-black mb-2 group-hover:text-mid-orange transition-colors">
                  {project.title}
                </h3>
                <p className="body-small text-dark-grey">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;