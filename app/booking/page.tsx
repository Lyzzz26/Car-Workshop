"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log('Booking submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
            <h1 className="text-3xl font-bold text-white mb-2 text-center">BOOK AN APPOINTMENT</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Booking Form */}
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-6">Schedule Your Service</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Personal Information</h3>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Vehicle Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-200 mb-1">
                          Make
                        </label>
                        <select
                          id="vehicleMake"
                          name="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 [&>option]:bg-gray-900 [&>option]:text-white [&>option:hover]:bg-gray-800 [&>option:checked]:bg-red-900"
                          required
                        >
                          <option value="">Select Make</option>
                          <option value="BMW">BMW</option>
                          <option value="Mercedes">Mercedes</option>
                          <option value="Audi">Audi</option>
                          <option value="Porsche">Porsche</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-200 mb-1">
                          Model
                        </label>
                        <input
                          type="text"
                          id="vehicleModel"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-200 mb-1">
                          Year
                        </label>
                        <input
                          type="number"
                          id="vehicleYear"
                          name="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          min="1900"
                          max={new Date().getFullYear() + 1}
                          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Service Details</h3>
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-200 mb-1">
                        Service Type
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 [&>option]:bg-gray-900 [&>option]:text-white [&>option:hover]:bg-gray-800 [&>option:checked]:bg-red-900"
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="dyno">Dyno Testing</option>
                        <option value="performance">Performance Parts Installation</option>
                        <option value="tuning">ECU Tuning</option>
                        <option value="maintenance">Maintenance Service</option>
                        <option value="diagnostic">Diagnostic Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-200 mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-200 mb-1">
                          Preferred Time
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 [&>option]:bg-gray-900 [&>option]:text-white [&>option:hover]:bg-gray-800 [&>option:checked]:bg-red-900"
                          required
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-200 mb-1">
                        Additional Notes
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition font-medium"
                  >
                    Schedule Appointment
                  </button>
                </form>
              </div>

              {/* Booking Information */}
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10">
                  <h2 className="text-2xl font-semibold text-white mb-4">Booking Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Business Hours</h3>
                      <div className="space-y-2 text-gray-300">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Location</h3>
                      <p className="text-gray-300">
                        123 Performance Drive<br />
                        Automotive District<br />
                        City, State 12345
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Contact</h3>
                      <div className="space-y-2 text-gray-300">
                        <p>Phone: (555) 123-4567</p>
                        <p>Email: booking@cargarage.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/10">
                  <h2 className="text-2xl font-semibold text-white mb-4">Important Notes</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Please arrive 15 minutes before your scheduled appointment time.
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Bring your vehicle's service history and any relevant documentation.
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      For performance tuning services, please ensure your vehicle is in good mechanical condition.
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Cancellations must be made at least 24 hours before the scheduled appointment.
                    </li>
                  </ul>
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