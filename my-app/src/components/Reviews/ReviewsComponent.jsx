import React from 'react';

const ReviewsComponent = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Our Clients</span> Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Review Card 1 */}
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg max-w-sm text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 group">
            <p className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">John Doe</p>
            <p className="text-white mb-4 typing group-hover:text-yellow-200 transition-colors duration-300">
              "Amazing service! The team was professional and delivered everything on time."
            </p>
            <p className="text-yellow-400 text-2xl group-hover:text-white transition-colors duration-300">★★★★★</p>
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-50 via-transparent to-transparent rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          {/* Review Card 2 */}
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg max-w-sm text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 group">
            <p className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">Jane Smith</p>
            <p className="text-white mb-4 typing group-hover:text-yellow-200 transition-colors duration-300">
              "Fantastic experience! Highly recommend their services to anyone in need."
            </p>
            <p className="text-yellow-400 text-2xl group-hover:text-white transition-colors duration-300">★★★★★</p>
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-50 via-transparent to-transparent rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          {/* Review Card 3 */}
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg max-w-sm text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 group">
            <p className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">Mike Johnson</p>
            <p className="text-white mb-4 typing group-hover:text-yellow-200 transition-colors duration-300">
              "Top-notch quality and excellent customer support. Will definitely use again."
            </p>
            <p className="text-yellow-400 text-2xl group-hover:text-white transition-colors duration-300">★★★★★</p>
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-50 via-transparent to-transparent rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsComponent;