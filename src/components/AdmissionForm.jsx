'use client';
import React, { useState } from 'react';
import { submitAdmission } from '@/utils/api'; // <-- Import API util

// Admission Form Component
const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    admissionYear: '2025-26',
    course: 'Diploma in Bhagvad Gita (Duration: One Year)',
    studentName: '',
    fatherName: '',
    motherName: '',
    academicQualification: '',
    whatsappNumber: '',
    alternateNumber: '',
    emailAddress: '',
    country: 'India',
    photo: null,
    signature: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // File change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Build FormData for file upload
      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          fd.append(key, value);
        }
      });

      const res = await submitAdmission(fd);

      if (res.success) {
        setMessage({
          type: 'success',
          text: 'Application submitted successfully!',
        });
        setFormData({
          admissionYear: '2025-26',
          course: 'Diploma in Bhagvad Gita (Duration: One Year)',
          studentName: '',
          fatherName: '',
          motherName: '',
          academicQualification: '',
          whatsappNumber: '',
          alternateNumber: '',
          emailAddress: '',
          country: 'India',
          photo: null,
          signature: null,
        });
      } else {
        setMessage({
          type: 'error',
          text: res.message || 'Submission failed. Please try again.',
        });
      }
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.message || 'Unexpected error occurred.',
      });
    } finally {
      setLoading(false);
    }
  };

return (
  <section id="admission" className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
          Admission Form
        </h2>
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
            {/* Left Column */}
            <div className="space-y-6">
              {/* Admission Year */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Admission Year *
                </label>
                <input
                  type="text"
                  name="admissionYear"
                  value={formData.admissionYear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                />
              </div>

              {/* Student Name */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                />
              </div>

              {/* Mother's Name */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Mother's Name *
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  WhatsApp/Mobile Number *
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                />
              </div>

              {/* Photo */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Upload Photo *
                </label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent 
                             file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 
                             file:text-sm file:font-semibold file:bg-amber-100 
                             file:text-amber-700 hover:file:bg-amber-200"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Course */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                >
                  <option value="Diploma in Bhagvad Gita (Duration: One Year)">
                    Diploma in Bhagvad Gita (Duration: One Year)
                  </option>
                </select>
              </div>

              {/* Father's Name */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Father's Name *
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                />
              </div>

              {/* Academic Qualification */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Academic Qualification *
                </label>
                <select
                  name="academicQualification"
                  value={formData.academicQualification}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="Below 10th">Below 10th</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Alternate Number */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Alternate Contact Number
                </label>
                <input
                  type="tel"
                  name="alternateNumber"
                  value={formData.alternateNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent"
                  required
                />
              </div>

              {/* Signature */}
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Upload Signature *
                </label>
                <input
                  type="file"
                  name="signature"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 
                             focus:border-transparent 
                             file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 
                             file:text-sm file:font-semibold file:bg-amber-100 
                             file:text-amber-700 hover:file:bg-amber-200"
                  required
                />
              </div>
            </div>

            {/* Full Width Section (Message + Buttons) */}
            <div className="md:col-span-2 space-y-6">
              {message && (
                <div
                  className={`p-4 rounded-lg ${
                    message.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {message.text}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-700 
                             text-white py-4 px-6 rounded-lg font-semibold text-lg 
                             hover:from-amber-700 hover:to-orange-800 transition-all 
                             transform hover:scale-105 shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg 
                             font-semibold text-lg hover:bg-green-700 
                             transition-all shadow-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

};

export default AdmissionForm;
