import React, { useEffect } from "react";
import { ProjectList } from "../components/ProjectData"; // Ensure this path is correct
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Use intersection observer hook

function ServicesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Our Services</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {ProjectList.map((project, index) => (
          <AnimatedCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

// Separate component for individual card animation
function AnimatedCard({ project, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Threshold triggers when 10% of the card is visible

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start animation when in view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // Left for even, right for odd
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <a
          href={project.link}
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
}

export default ServicesPage;
