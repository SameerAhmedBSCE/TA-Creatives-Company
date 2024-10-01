import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'; 
import { FaBeer } from 'react-icons/fa';
import videoSrc from "../../assets/intro.mp4";
function IconExample() {
  return <FaBeer />;
}

// About Us Component
export default function AboutUsComponent() {
  return (
    <div className="bg-[rgb(16,21,26)] text-white min-h-[100dvh] flex flex-col">
      
      <main className="flex-1">
        <AboutSection />
        <CapabilitiesSection />
        <TeamSection />
      </main>
      
    </div>
  );
}


// About Section
function AboutSection() {
    return (
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center justify-center">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">About TA Creatives</h1>
            <p className="text-muted-foreground text-lg">
              TA Creatives is a company that builds and implements custom software solutions. We help grow your business 
              with web development, marketing, SEO, and more.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button variant="contained">Learn More</Button>
              <Button variant="outlined">Contact Us</Button>
            </div>
          </div>
          
          <video src={videoSrc} autoPlay loop muted></video>
        </div>
      </section>
    );
  }
  

// Capabilities Section
function CapabilitiesSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center justify-center">
        <ImagePlaceholder />
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Capabilities</h2>
          <p className="text-muted-foreground text-lg">
            TA Creatives provides a wide range of software development services tailored to help our clients achieve 
            their business goals.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ServiceCard icon={<CodeIcon />} title="Web Development" description="Custom, responsive websites optimized for performance." />
            <ServiceCard icon={<SmartphoneIcon />} title="Mobile Development" description="User-friendly mobile apps for iOS and Android." />
            <ServiceCard icon={<BrushIcon />} title="UI/UX Design" description="Visually appealing and intuitive interfaces." />
            <ServiceCard icon={<SearchIcon />} title="SEO & Marketing" description="Optimizing your website to drive traffic and conversions." />
          </div>
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center justify-center">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Meet our talented team of software developers, designers, and project managers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <TeamCard name="John Doe" role="Software Engineer" />
            <TeamCard name="Jane Smith" role="UI/UX Designer" />
            <TeamCard name="Michael Johnson" role="Project Manager" />
            <TeamCard name="Emily Davis" role="Marketing Specialist" />
          </div>
        </div>
        <ImagePlaceholder />
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-background rounded-lg p-4 flex flex-col gap-2 items-center">
      {icon}
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
}

function TeamCard({ name, role }) {
  return (
    <div className="bg-background rounded-lg p-4 flex flex-col gap-2 items-center text-center">
      <img src="/placeholder.svg" width="80" height="80" alt={name} className="rounded-full" style={{ aspectRatio: "80/80", objectFit: "cover" }} />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="relative">
      <img src="/src/assets/tacrlogo.png" width="550" height="550" alt="Placeholder" className="mx-auto aspect-square overflow-hidden rounded-xl object-cover" />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgb(16,21,26)] to-transparent opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <Button variant="ghost" size="icon">
          <PlayIcon className="h-10 w-10" />
        </Button>
      </div>
    </div>
  );
}

// Icon Components
function MountainIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function BrushIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 3v5h-5" />
      <path d="M21 3L14 10" />
      <path d="M18 13c0 3.87-3.13 7-7 7a7 7 0 0 1-7-7c0-3.87 3.13-7 7-7" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
