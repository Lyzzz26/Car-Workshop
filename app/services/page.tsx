"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
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

      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 py-8 z-10 relative">
        <div className="bg-black/50 backdrop-blur-md p-0 rounded-xl max-w-7xl w-full overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-red-900/80 to-black/80 p-6">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">OUR SERVICES</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="p-8">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dyno Service */}
              <div className="bg-white/10 rounded-lg overflow-hidden group hover:bg-white/15 transition-all">
                <div className="relative h-64">
                  <Image
                    src="/services/dyno.jpg"
                    alt="Dyno Testing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
                        <Image
                          src="/icons/dyno.png"
                          alt="Dyno Icon"
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Dyno Testing</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Our state-of-the-art dynamometer facility provides precise power measurements 
                    and performance testing. Get detailed analysis of your vehicle's horsepower, 
                    torque, and overall performance metrics with our advanced dyno equipment.
                  </p>
                </div>
              </div>

              {/* Performance Parts */}
              <div className="bg-white/10 rounded-lg overflow-hidden group hover:bg-white/15 transition-all">
                <div className="relative h-64">
                  <Image
                    src="/services/parts.jpg"
                    alt="Performance Parts"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
                        <Image
                          src="/icons/parts.png"
                          alt="Parts Icon"
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Performance Parts</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Premium performance upgrades featuring Wagner Tuning components. We offer and 
                    install high-quality intercoolers, intake systems, and performance parts to 
                    enhance your vehicle's capabilities.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-400">Official Partner:</span>
                    <Image
                      src="/sponsors/wagner.png"
                      alt="Wagner Tuning"
                      width={120}
                      height={40}
                      className="ml-4"
                    />
                  </div>
                </div>
              </div>

              {/* ECU Tuning */}
              <div className="bg-white/10 rounded-lg overflow-hidden group hover:bg-white/15 transition-all">
                <div className="relative h-64">
                  <Image
                    src="/services/tuning.jpg"
                    alt="ECU Tuning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
                        <Image
                          src="/icons/tuning.png"
                          alt="Tuning Icon"
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">ECU Tuning</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Professional ECU remapping and custom tuning solutions to optimize your 
                    vehicle's performance. Experience improved power delivery, better throttle 
                    response, and enhanced fuel efficiency through our expert tuning services.
                  </p>
                </div>
              </div>

              {/* Maintenance Services */}
              <div className="bg-white/10 rounded-lg overflow-hidden group hover:bg-white/15 transition-all">
                <div className="relative h-64">
                  <Image
                    src="/services/maintenance.jpg"
                    alt="Maintenance Services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
                        <Image
                          src="/icons/maintenance.png"
                          alt="Maintenance Icon"
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Services & Maintenance</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive maintenance services using premium One Way oils and fluids. 
                    We provide professional oil changes, brake services, and complete vehicle 
                    health checks to ensure optimal performance.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-400">Official Oil Partner:</span>
                    <Image
                      src="/sponsors/oneway.png"
                      alt="One Way"
                      width={100}
                      height={40}
                      className="ml-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Expert Technicians</h3>
                  <p className="text-gray-300 text-sm">
                    Our certified technicians have years of experience with performance vehicles.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Quality Parts</h3>
                  <p className="text-gray-300 text-sm">
                    We use only premium parts and fluids from trusted manufacturers.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Warranty Backed</h3>
                  <p className="text-gray-300 text-sm">
                    All our services and installations come with warranty coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 