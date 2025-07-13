import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-cream-50">
      <div className="container-max section-padding py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-luxury-charcoal-900 mb-6">
            About Velato
          </h1>
          <p className="text-xl text-luxury-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Redefining luxury fashion through timeless elegance, exceptional craftsmanship, and sustainable practices.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-luxury-charcoal-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-luxury-charcoal-700 leading-relaxed">
              <p>
                Founded in 2020, Velato emerged from a vision to create a luxury fashion destination that 
                bridges timeless elegance with contemporary sophistication. Our journey began with a simple 
                belief: that true luxury lies not just in premium materials, but in the meticulous attention 
                to detail and the stories each piece tells.
              </p>
              <p>
                Every garment in our collection is carefully curated from the world's finest artisans and 
                designers, ensuring that each piece meets our exacting standards of quality, craftsmanship, 
                and ethical production.
              </p>
              <p>
                Today, Velato stands as a testament to the power of conscious luxury, where every purchase 
                supports sustainable practices and fair trade partnerships with our global network of creators.
              </p>
            </div>
          </div>
          <div className="bg-luxury-charcoal-900 p-12 text-white">
            <h3 className="text-2xl font-serif font-bold mb-6">Our Mission</h3>
            <p className="text-luxury-cream-200 leading-relaxed mb-6">
              To create a more sustainable and inclusive luxury fashion industry while delivering 
              uncompromising quality and timeless style to our discerning clientele.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-luxury-gold-400 mb-2">Quality</h4>
                <p className="text-luxury-cream-300 text-sm">
                  Only the finest materials and craftsmanship
                </p>
              </div>
              <div>
                <h4 className="font-medium text-luxury-gold-400 mb-2">Sustainability</h4>
                <p className="text-luxury-cream-300 text-sm">
                  Ethical sourcing and eco-conscious practices
                </p>
              </div>
              <div>
                <h4 className="font-medium text-luxury-gold-400 mb-2">Innovation</h4>
                <p className="text-luxury-cream-300 text-sm">
                  Modern technology meets traditional craftsmanship
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-luxury-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal-900 mb-4">
                Sustainability
              </h3>
              <p className="text-luxury-charcoal-600">
                We're committed to reducing our environmental impact through sustainable 
                materials, ethical manufacturing, and circular fashion practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-luxury-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal-900 mb-4">
                Excellence
              </h3>
              <p className="text-luxury-charcoal-600">
                Every piece is meticulously crafted to meet the highest standards of 
                quality, ensuring longevity and timeless appeal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-luxury-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal-900 mb-4">
                Integrity
              </h3>
              <p className="text-luxury-charcoal-600">
                We maintain transparent relationships with our partners and customers, 
                built on trust, respect, and shared values.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal-900 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Isabella Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-luxury-charcoal-900 mb-2">
                Isabella Chen
              </h3>
              <p className="text-luxury-gold-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-luxury-charcoal-600 text-sm">
                Former luxury fashion executive with 15+ years of experience in sustainable fashion.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Marcus Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-luxury-charcoal-900 mb-2">
                Marcus Rodriguez
              </h3>
              <p className="text-luxury-gold-600 font-medium mb-2">Creative Director</p>
              <p className="text-luxury-charcoal-600 text-sm">
                Award-winning designer with a passion for merging traditional craftsmanship with modern aesthetics.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Sophie Laurent"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-luxury-charcoal-900 mb-2">
                Sophie Laurent
              </h3>
              <p className="text-luxury-gold-600 font-medium mb-2">Head of Sustainability</p>
              <p className="text-luxury-charcoal-600 text-sm">
                Environmental scientist turned fashion advocate, leading our sustainability initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border border-luxury-cream-200 p-12">
          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal-900 mb-4">
            Join Our Journey
          </h2>
          <p className="text-luxury-charcoal-600 mb-8 max-w-2xl mx-auto">
            Discover our carefully curated collection and become part of a community 
            that values quality, sustainability, and timeless style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Shop Collection
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 