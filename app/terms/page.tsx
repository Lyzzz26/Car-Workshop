"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
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
        <div className="bg-black/50 backdrop-blur-md p-0 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-red-900/80 to-black/80 p-6">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">TERMS OF SERVICE</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="p-8">
            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                <p>By accessing and using CAR GARAGE's services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. Services Description</h2>
                <p>CAR GARAGE provides automotive services including:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Dyno Testing</li>
                  <li>Performance Parts Installation</li>
                  <li>ECU Tuning</li>
                  <li>Maintenance Services</li>
                  <li>Diagnostic Services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Appointments and Cancellations</h2>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Appointments must be scheduled in advance</li>
                  <li>Cancellations require 24-hour notice</li>
                  <li>Late arrivals may result in rescheduling</li>
                  <li>No-shows may incur a cancellation fee</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Payment Terms</h2>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Payment is due upon completion of services</li>
                  <li>We accept major credit cards and cash</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Additional charges may apply for parts and materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Warranty Information</h2>
                <p>Our services come with the following warranty terms:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Parts and labor warranty for 12 months</li>
                  <li>Warranty does not cover normal wear and tear</li>
                  <li>Warranty may be void if vehicle is modified elsewhere</li>
                  <li>Warranty claims must be accompanied by service records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Liability</h2>
                <p>CAR GARAGE is not liable for:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Pre-existing vehicle conditions</li>
                  <li>Damage caused by customer modifications</li>
                  <li>Consequential or indirect damages</li>
                  <li>Loss of use or business interruption</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Customer Responsibilities</h2>
                <p>Customers are responsible for:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Providing accurate vehicle information</li>
                  <li>Maintaining vehicle insurance</li>
                  <li>Following service recommendations</li>
                  <li>Keeping appointments and being on time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the new terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">9. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us at:</p>
                <div className="mt-2">
                  <p>Email: legal@cargarage.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 