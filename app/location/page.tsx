"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Location() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Blur */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bmw.jpg"
          alt="Luxury car background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>

      {/* Header */}
      <header className="w-full bg-black/80 text-white py-4 shadow-lg z-20 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/stealthx.png"
                  alt="StealthX Logo"
                  width={110}
                  height={30}
                  className="object-contain"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8 ml-16">
              <Link href="/" className="relative group text-sm font-medium tracking-wider">
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/services" className="relative group text-sm font-medium tracking-wider">
                SERVICES
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/gallery" className="relative group text-sm font-medium tracking-wider">
                GALLERY
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="relative group text-sm font-medium tracking-wider">
                ABOUT US
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="relative group text-sm font-medium tracking-wider">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/location" className="flex items-center space-x-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-300">Location</span>
            </Link>
            <Link href="/login" className="flex items-center space-x-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm text-gray-300">Account</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 py-8 z-10 relative">
        <div className="bg-black/50 backdrop-blur-md p-0 rounded-xl max-w-7xl w-full overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-red-900/80 to-black/80 p-6">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">VISIT OUR WORKSHOP</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="p-8">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Information */}
              <div className="space-y-6">
                {/* Address Section */}
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-white mb-3">Our Location</h2>
                      <p className="text-gray-300 leading-relaxed">
                        KUALA LUMPUR<br />
                        Taman Taman<br />
                        Kuala Lumpur<br />
                        12345 KL<br />
                        Selangor
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Business Hours</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-gray-300 gap-20">
                          <span className="min-w-[120px]">Monday - Friday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between text-gray-300 gap-20">
                          <span className="min-w-[120px]">Saturday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between text-gray-300 gap-20">
                          <span className="min-w-[120px]">Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                      <div className="space-y-3">
                        <div className="text-gray-300 flex items-center">
                          <span className="w-24">Contact:</span>
                          <span className="font-medium">Your Name</span>
                        </div>
                        <div className="text-gray-300 flex items-center">
                          <span className="w-24">Phone:</span>
                          <div className="flex items-center space-x-4">
                            <a href="tel:+60163474927" className="hover:text-white transition-colors">+60 123 456 789</a>
                            <span className="text-gray-500">|</span>
                            <a href="https://wa.me/60123456789" className="text-green-400 hover:text-green-300 transition-colors flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                              WhatsApp
                            </a>
                          </div>
                        </div>
                        <div className="text-gray-300 flex items-center">
                          <span className="w-24">Email:</span>
                          <a href="mailto:123abc@gmail.com" className="hover:text-white transition-colors">123abc@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122502.89574040913!2d101.60458733921286!3d3.138502660666079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e1!3m2!1sen!2smy!4v1742611512201!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black/90 text-gray-400 text-center py-6 z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-left">
              <h4 className="text-white text-sm font-medium mb-4">ABOUT STEALTHX</h4>
              <p className="text-sm">Premium automotive service and performance tuning for luxury vehicles.</p>
            </div>
            <div className="text-left">
              <h4 className="text-white text-sm font-medium mb-4">QUICK LINKS</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/services" className="text-sm hover:text-white transition-colors">Services</Link>
                <Link href="/gallery" className="text-sm hover:text-white transition-colors">Gallery</Link>
                <Link href="/location" className="text-sm hover:text-white transition-colors">Location</Link>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-white text-sm font-medium mb-4">CONNECT WITH US</h4>
              <div className="flex space-x-4">
                {/* Social media links removed */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm">© Copyright 2025 CAR GARAGE. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}