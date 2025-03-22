"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
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
            <h1 className="text-3xl font-bold text-white mb-2 text-center">PRIVACY POLICY</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="p-8">
            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Name and contact information</li>
                  <li>Vehicle information</li>
                  <li>Service history</li>
                  <li>Payment information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process your appointments and payments</li>
                  <li>Send you service updates and notifications</li>
                  <li>Improve our services and customer experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Information Sharing</h2>
                <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <div className="mt-2">
                  <p>Email: privacy@cargarage.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Updates to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 