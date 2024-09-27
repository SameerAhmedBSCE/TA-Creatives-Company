import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'rgb(16, 21, 26)' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="feature-item">
            <h3 className="text-xl font-semibold">Feature One</h3>
            <p className="mt-2">Description of feature one.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-semibold">Feature Two</h3>
            <p className="mt-2">Description of feature two.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-semibold">Feature Three</h3>
            <p className="mt-2">Description of feature three.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
