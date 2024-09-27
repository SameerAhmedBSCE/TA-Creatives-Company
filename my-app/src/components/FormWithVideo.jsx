import React from 'react';
import ContactForm from './ContactForm'; 

const FormWithVideo = () => {
  return (
    <section style={{ backgroundColor: 'rgb(16, 21, 26)' }} className="p-5">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div style={{ backgroundColor: 'rgb(16, 21, 26)' }} className=" rounded-lg p-6">
          <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
          <ContactForm />
        </div>
        <div className="overflow-hidden">
          <video 
            src="https://src.corva.ai/wp-content/uploads/2024/04/form_illustration-ae.webm" 
            autoPlay 
            loop 
            muted 
            className="w-full h-full"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default FormWithVideo;
