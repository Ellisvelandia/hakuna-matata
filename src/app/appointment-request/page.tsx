import React from 'react';
import Image from 'next/image';

export default function AppointmentRequest() {
  return (
    <div>
      {/* Page Header */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src="https://ext.same-assets.com/965708439/3487011211.jpeg"
          alt="Appointment Request"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <Image
              src="https://ext.same-assets.com/965708439/3779773145.png"
              alt="Leaves"
              width={50}
              height={50}
              className="mx-auto mb-2"
            />
            <h1 className="text-4xl font-semibold text-white">Appointment Request</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Please fill out the form below to request an appointment with Beaver Brook Animal Hospital.
            We'll contact you to confirm your appointment as soon as possible.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <h2 className="text-2xl mb-6">Pet Owner Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-medium">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 font-medium">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <h2 className="text-2xl mb-6 pt-4">Pet Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="petName" className="block mb-2 font-medium">Pet's Name *</label>
                  <input
                    type="text"
                    id="petName"
                    name="petName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="petType" className="block mb-2 font-medium">Pet Type *</label>
                  <select
                    id="petType"
                    name="petType"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select Pet Type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="petBreed" className="block mb-2 font-medium">Pet's Breed</label>
                  <input
                    type="text"
                    id="petBreed"
                    name="petBreed"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="petAge" className="block mb-2 font-medium">Pet's Age</label>
                  <input
                    type="text"
                    id="petAge"
                    name="petAge"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <h2 className="text-2xl mb-6 pt-4">Appointment Information</h2>

              <div>
                <label htmlFor="reason" className="block mb-2 font-medium">Reason for Visit *</label>
                <select
                  id="reason"
                  name="reason"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select Reason</option>
                  <option value="wellness">Wellness Exam</option>
                  <option value="vaccination">Vaccinations</option>
                  <option value="illness">Sick Pet Visit</option>
                  <option value="dental">Dental Care</option>
                  <option value="surgery">Surgery</option>
                  <option value="acupuncture">Acupuncture</option>
                  <option value="chiropractic">Chiropractic</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block mb-2 font-medium">Preferred Date *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block mb-2 font-medium">Preferred Time *</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 3pm)</option>
                    <option value="evening">Evening (3pm - 6pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="comments" className="block mb-2 font-medium">Additional Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto py-3"
                >
                  Submit Appointment Request
                </button>
              </div>
              <p className="text-sm text-gray-500">
                * Required fields. Note that this is only a request. We will contact you to confirm the appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
