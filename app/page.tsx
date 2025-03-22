"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MapPinIcon, UserIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Contact Bar */}
      <div className="bg-black text-gray-300 text-xs py-2 z-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <PhoneIcon className="h-3 w-3 text-red-600 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="hidden md:flex items-center">
              <MapPinIcon className="h-3 w-3 text-red-600 mr-2" />
              <span>123 Performance Drive, Miami, FL</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ClockIcon className="h-3 w-3 text-red-600 mr-2" />
              <span>Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bmw.jpg"
          alt="Luxury car background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Header */}
      <header className="w-full bg-black/80 text-white py-3 shadow-xl z-20 sticky top-0 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/garage (1).png"
                  alt="CAR GARAGE"
                  width={130}
                  height={30}
                  className="object-contain"
                />
              </Link>
            </div>
            <nav className="hidden lg:flex space-x-8 ml-16">
              {[
                { name: 'HOME', href: '/', id: 'home' },
                { name: 'SERVICES', href: '/services', id: 'services' },
                { name: 'GALLERY', href: '/gallery', id: 'gallery' },
                { name: 'ABOUT US', href: '/about', id: 'about' },
                { name: 'CONTACT', href: '/contact', id: 'contact' },
              ].map((item) => (
                <Link 
                  key={item.id}
                  href={item.href} 
                  className={`relative group text-sm font-medium tracking-wider ${activeSection === item.id ? 'text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-200`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/location" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
              <MapPinIcon className="w-5 h-5 text-red-600" />
              <span className="text-sm">Find Us</span>
            </Link>
            <Link href="/login" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
              <UserIcon className="w-5 h-5 text-red-600" />
              <span className="text-sm">Account</span>
            </Link>
            <Link 
              href="/booking" 
              className="px-4 py-2 bg-red-700 text-white text-sm rounded hover:bg-red-800 transition-colors duration-200 shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 mt-2" ref={dropdownRef}>
            <div className="px-4 pt-2 pb-4 space-y-1">
              {[
                { name: 'HOME', href: '/' },
                { name: 'SERVICES', href: '/services' },
                { name: 'GALLERY', href: '/gallery' },
                { name: 'ABOUT US', href: '/about' },
                { name: 'CONTACT', href: '/contact' },
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-800 mt-2 flex justify-between">
                <Link href="/location" className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white">
                  <MapPinIcon className="w-5 h-5 text-red-600 mr-2" />
                  Find Us
                </Link>
                <Link href="/login" className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white">
                  <UserIcon className="w-5 h-5 text-red-600 mr-2" />
                  Account
                </Link>
              </div>
              <Link 
                href="/booking" 
                className="block text-center w-full mt-2 px-4 py-2 bg-red-700 text-white font-medium rounded hover:bg-red-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16 z-10 relative">
        <div className="bg-black/40 backdrop-blur-md p-10 rounded-xl max-w-4xl mx-auto border border-gray-800 shadow-2xl">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">CAR GARAGE</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto my-6"></div>
            <h2 className="text-2xl md:text-3xl font-light text-white">EXCELLENCE IN PERFORMANCE</h2>
          </div>
          
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
            Specialized luxury and performance vehicle service delivered by master technicians using state-of-the-art equipment and authentic parts.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link 
              href="/booking" 
              className="px-8 py-4 bg-red-700 text-white rounded-md hover:bg-red-800 transition-all duration-300 font-medium shadow-lg transform hover:translate-y-[-2px]"
            >
              Schedule Service
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-black/70 text-white rounded-md hover:bg-black transition-all duration-300 font-medium border border-gray-700 shadow-lg transform hover:translate-y-[-2px]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 z-10 relative bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Premium Services</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto my-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">Experience outstanding service for your high-performance vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance Tuning",
                description: "Custom engine mapping and performance enhancement for optimal power delivery and efficiency.",
                icon: (
                  <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )
              },
              {
                title: "Diagnostic Services",
                description: "Advanced computerized diagnostics to identify and resolve complex mechanical and electrical issues.",
                icon: (
                  <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Premium Maintenance",
                description: "Specialized service packages designed to maintain peak performance and extend your vehicle's lifespan.",
                icon: (
                  <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <div key={index} className="bg-black/70 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-800 shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-block mt-6 text-red-500 text-sm hover:text-red-400 transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors duration-300"
            >
              View All Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Workshop</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Technicians",
                    description: "Our master technicians are factory-trained specialists with extensive experience in luxury and performance vehicles."
                  },
                  {
                    title: "State-of-the-Art Equipment",
                    description: "We utilize the latest diagnostic and service technology to ensure precise analysis and repair of your vehicle."
                  },
                  {
                    title: "Genuine Parts",
                    description: "We exclusively use OEM and high-quality aftermarket components to maintain your vehicle's integrity and performance."
                  },
                  {
                    title: "Transparent Service",
                    description: "Detailed explanations and upfront pricing ensure you understand exactly what services your vehicle requires."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-8 w-8 rounded-full bg-red-700 flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center mt-8 text-red-500 hover:text-red-400 transition-colors"
              >
                Learn more about our commitment to excellence
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule a Service</h3>
              <p className="text-gray-300 mb-6">Book your appointment online and receive a confirmation within 24 hours.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Vehicle Make</label>
                  <select className="w-full bg-gray-900 border border-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600">
                    <option>Select Make</option>
                    <option>BMW</option>
                    <option>Mercedes</option>
                    <option>Audi</option>
                    <option>Porsche</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Service Type</label>
                  <select className="w-full bg-gray-900 border border-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600">
                    <option>Select Service</option>
                    <option>Maintenance</option>
                    <option>Performance Upgrade</option>
                    <option>Diagnosis</option>
                    <option>Repair</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Date</label>
                <input type="date" className="w-full bg-gray-900 border border-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              
              <Link 
                href="/booking" 
                className="block w-full text-center py-3 bg-red-700 text-white rounded hover:bg-red-800 transition-all duration-300 font-medium mt-4"
              >
                Continue Booking
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-12 z-10 relative bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Brands We Service</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto my-4"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="w-24 h-24 bg-black/60 rounded-full flex items-center justify-center border border-gray-800 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-gray-400 font-semibold text-sm">BRAND LOGO</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Client Testimonials</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto my-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">What our customers have to say about their experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The team's attention to detail and technical expertise is unmatched. My BMW has never performed better after their performance tuning service.",
                author: "Michael T.",
                car: "BMW M4 Owner"
              },
              {
                text: "Impeccable service from start to finish. They diagnosed an issue that three other shops couldn't find, and fixed it the same day.",
                author: "Sarah L.",
                car: "Mercedes AMG Owner"
              },
              {
                text: "As a Porsche enthusiast, I'm extremely particular about who works on my car. This workshop has exceeded my expectations every time.",
                author: "James R.",
                car: "Porsche 911 Owner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800 shadow-lg">
                <svg className="h-8 w-8 text-red-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.car}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 z-10 relative bg-gradient-to-r from-red-900/70 to-black/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Premium Automotive Service?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Book your appointment today and discover why performance enthusiasts trust us with their vehicles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/booking" 
              className="px-8 py-4 bg-white text-red-900 rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium shadow-lg"
            >
              Book Your Service
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-transparent text-white rounded-md hover:bg-white/10 transition-colors duration-300 font-medium border border-white shadow-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-400 z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/garage (1).png"
                alt="CAR GARAGE"
                width={150}
                height={40}
                className="object-contain mb-4"
              />
              <p className="text-sm mb-4">Premium automotive service and performance tuning for luxury vehicles since 2010.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748
                    .35.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Services', href: '/services' },
                  { name: 'Gallery', href: '/gallery' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Book Appointment', href: '/booking' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Performance Tuning', href: '/services#performance-tuning' },
                  { name: 'Diagnostics', href: '/services#diagnostics' },
                  { name: 'Maintenance', href: '/services#maintenance' },
                  { name: 'Brake Service', href: '/services#brake-service' },
                  { name: 'Suspension', href: '/services#suspension' },
                  { name: 'Engine Rebuilds', href: '/services#engine-rebuilds' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-sm">123 Performance Drive<br />Miami, FL 33101</span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">info@cargarage.com</span>
                </li>
                <li className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-red-600 mr-3" />
                  <div className="text-sm">
                    <p>Mon-Fri: 8AM-6PM</p>
                    <p>Sat: 9AM-3PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} CAR GARAGE. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-400">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-xs text-gray-500 hover:text-gray-400">Terms of Service</Link></li>
                <li><Link href="/sitemap" className="text-xs text-gray-500 hover:text-gray-400">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}