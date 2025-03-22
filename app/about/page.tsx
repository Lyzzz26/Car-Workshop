"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
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
            <h1 className="text-3xl font-bold text-white mb-2 text-center">ABOUT CAR GARAGE</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="p-8">
            {/* Our Story Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/workshop.jpg"
                    alt="Our Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Founded in 2010, CAR GARAGE has grown from a small local workshop to one of the most trusted names in automotive service and performance enhancement in the region.
                  </p>
                  <p>
                    Our journey began with a simple vision: to provide exceptional automotive care with uncompromising integrity and expertise. Today, we continue to uphold these values while embracing the latest technological advancements in the automotive industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                  <p className="text-gray-300">
                    We strive for excellence in every service we provide, ensuring your vehicle receives the highest standard of care.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                  <p className="text-gray-300">
                    Honesty and transparency are at the core of our business, building lasting relationships with our clients.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                  <p className="text-gray-300">
                    We continuously invest in the latest technology and training to provide cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Our Expert Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((member) => (
                  <div key={member} className="bg-white/10 rounded-lg overflow-hidden group">
                    <div className="relative h-48">
                      <Image
                        src={`/team-member-${member}.jpg`}
                        alt={`Team Member ${member}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold">John Doe</h3>
                      <p className="text-gray-400 text-sm">Master Technician</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Certifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((cert) => (
                  <div key={cert} className="bg-white/10 p-4 rounded-lg flex items-center justify-center">
                    <Image
                      src={`/certification-${cert}.png`}
                      alt={`Certification ${cert}`}
                      width={120}
                      height={120}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 