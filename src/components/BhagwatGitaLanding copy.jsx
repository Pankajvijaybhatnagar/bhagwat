'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const BhagwatGitaLanding = () => {
  const [formData, setFormData] = useState({
    admissionYear: '2025-26',
    course: 'Diploma in Bhagvad Gita (Duration: One Year)',
    programFee: '6600',
    studentName: '',
    fatherName: '',
    motherName: '',
    caste: '',
    whatsappNumber: '',
    alternateNumber: '',
    emailAddress: '',
    country: 'India',
    registrationFee: '400'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <Head>
        <title>Diploma in Bhagvad Gita - Transform Your Life Through Ancient Wisdom</title>
        <meta name="description" content="Enroll in our comprehensive Diploma program in Bhagvad Gita. Learn ancient wisdom, spiritual philosophy, and life principles from sacred texts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        {/* Header */}
        <header className="bg-gradient-to-r from-amber-800 to-orange-900 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
               <img  className='rounde rounded-full' src='/logo.png'/>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Bhagvad Gita</h1>
                  <p className="text-amber-100 text-sm">Ancient Wisdom for Modern Life</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#about" className="hover:text-amber-200 transition-colors">About</a>
                <a href="#curriculum" className="hover:text-amber-200 transition-colors">Curriculum</a>
                <a href="#admission" className="hover:text-amber-200 transition-colors">Admission</a>
                <a href="#contact" className="hover:text-amber-200 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Maharaj Ji Banner Section */}
        <section className="relative py-16 bg-gradient-to-r from-amber-800 via-orange-800 to-amber-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-amber-300/20 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300/20 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-amber-400/20 rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-white order-2 md:order-1">
                  <div className="inline-block bg-amber-200/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <span className="text-amber-100 font-semibold">🙏 Spiritual Guidance</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Under the Divine Guidance of<br />
                    <span className="text-amber-200">Maharaj Ji</span>
                  </h2>
                  <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                    Experience the profound teachings of Bhagvad Gita through the enlightened guidance of our revered spiritual master, who has dedicated his life to sharing the eternal wisdom of Lord Krishna.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-amber-200 mb-1">25+</div>
                      <div className="text-amber-100 text-sm">Years of Teaching</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-amber-200 mb-1">5000+</div>
                      <div className="text-amber-100 text-sm">Students Guided</div>
                    </div>
                  </div>
                </div>

                {/* Maharaj Ji Photo */}
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-amber-200 to-orange-200 p-2 rounded-full shadow-2xl">
                      <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center border-4 border-white/50">
                        {/* Placeholder for Maharaj Ji's photo */}
                        {/* <div className="text-center text-amber-800">
                          <div className="text-6xl mb-4">🕉️</div>
                          <p className="text-lg font-semibold">Maharaj Ji's Photo</p>
                          <p className="text-sm opacity-75">(Replace with actual image)</p>
                        </div> */}
            
                <Image
                    src="/498203014_1240298517441165_2705311863320165095_n.jpg"
                    alt="Maharaj Ji"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                />
               
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-300 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-300 rounded-full animate-bounce delay-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
                Diploma in<br />
                <span className="text-orange-800">Bhagvad Gita</span>
              </h1>
              <p className="text-xl md:text-2xl text-amber-700 mb-8 leading-relaxed">
                Discover the timeless wisdom of the Bhagwat Gita and transform your life through ancient spiritual knowledge and practical philosophy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="#admission" className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-800 transition-all transform hover:scale-105 shadow-lg">
                  Enroll Now
                </a>
                <a href="#curriculum" className="bg-white text-amber-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-all border-2 border-amber-600 shadow-lg">
                  View Curriculum
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-amber-800 mb-2">1 Year</div>
                  <div className="text-amber-600">Duration</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-amber-800 mb-2">₹6,600</div>
                  <div className="text-amber-600">Total Program Fee</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-amber-800 mb-2">700+</div>
                  <div className="text-amber-600">Verses Covered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-amber-100 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
                Why Study Bhagvad Gita?
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">Spiritual Wisdom</h3>
                        <p className="text-amber-700">Gain deep understanding of life's purpose, dharma, and the path to self-realization through Krishna's teachings to Arjuna.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">Practical Philosophy</h3>
                        <p className="text-amber-700">Learn to apply timeless principles in modern life situations, finding balance between material and spiritual pursuits.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">Mental Peace</h3>
                        <p className="text-amber-700">Develop techniques for managing stress, anxiety, and finding inner peace through meditation and self-reflection.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">Character Development</h3>
                        <p className="text-amber-700">Build strong moral character, leadership qualities, and develop a clear understanding of right and wrong.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🕉️</div>
                      <h3 className="text-2xl font-bold text-amber-800 mb-4">Ancient Wisdom</h3>
                      <p className="text-amber-700 text-lg leading-relaxed">
                        "You have the right to perform your actions, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
                      </p>
                      <p className="text-amber-600 mt-4 font-semibold">- Bhagwat Gita 2.47</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
                Comprehensive Curriculum
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    chapter: "Chapter 1-2",
                    title: "Foundation & Karma Yoga",
                    topics: ["Arjuna's Dilemma", "Sankhya Yoga", "Nature of the Soul", "Duty vs Desire"]
                  },
                  {
                    chapter: "Chapter 3-6",
                    title: "Action & Meditation",
                    topics: ["Karma Yoga", "Divine Knowledge", "Renunciation", "Dhyana Yoga"]
                  },
                  {
                    chapter: "Chapter 7-9",
                    title: "Divine Nature",
                    topics: ["Supreme Knowledge", "Imperishable Brahman", "Royal Secret", "Divine Manifestations"]
                  },
                  {
                    chapter: "Chapter 10-12",
                    title: "Universal Form",
                    topics: ["Divine Glories", "Cosmic Vision", "Bhakti Yoga", "Devotional Service"]
                  },
                  {
                    chapter: "Chapter 13-15",
                    title: "Knowledge & Liberation",
                    topics: ["Field & Knower", "Three Gunas", "Supreme Person", "Cosmic Tree"]
                  },
                  {
                    chapter: "Chapter 16-18",
                    title: "Final Teachings",
                    topics: ["Divine & Demonic", "Faith & Sacrifice", "Liberation", "Final Instruction"]
                  }
                ].map((module, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                      <span className="font-semibold">{module.chapter}</span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-800 mb-3">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-amber-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
                Program Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "📚",
                    title: "Comprehensive Study",
                    description: ""
                  },
                  {
                    icon: "👨‍🏫",
                    title: "Expert Guidance",
                    description: ""
                  },
                  {
                    icon: "🧘‍♀️",
                    title: "Practical Application",
                    description: ""
                  },
                  {
                    icon: "🏆",
                    title: "Certification",
                    description: ""
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-amber-800 mb-3">{feature.title}</h3>
                    <p className="text-amber-700">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Admission Form Section */}
        <section id="admission" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
                Admission Form
              </h2>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Admission Year */}
                  <div>
                    <label className="block text-amber-800 font-semibold mb-2">Admission Year *</label>
                    <input
                      type="text"
                      name="admissionYear"
                      value={formData.admissionYear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-amber-800 font-semibold mb-2">Course *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    >
                      <option value="Diploma in Bhagvad Gita (Duration: One Year)">
                        Diploma in Bhagvad Gita (Duration: One Year)
                      </option>
                    </select>
                  </div>

                  {/* Program Fee */}
                  <div>
                    <label className="block text-amber-800 font-semibold mb-2">Program Fee (₹) *</label>
                    <input
                      type="text"
                      name="programFee"
                      value={formData.programFee}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50"
                      readOnly
                    />
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-800 font-semibold mb-2">Student Name *</label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-amber-800 font-semibold mb-2">Father's Name *</label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-amber-800 font-semibold mb-2">Mother's Name *</label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

          
                

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-800 font-semibold mb-2">WhatsApp/Mobile Number *</label>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-amber-800 font-semibold mb-2">Alternate Contact Number</label>
                      <input
                        type="tel"
                        name="alternateNumber"
                        value={formData.alternateNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-amber-800 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-800 font-semibold mb-2">Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-amber-800 font-semibold mb-2">Registration Fee (₹) *</label>
                      <input
                        type="text"
                        name="registrationFee"
                        value={formData.registrationFee}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-800 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Submit Application
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-amber-800 to-orange-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-xl mb-12 text-amber-100">
                Have questions about our Diploma program? We're here to help you begin your spiritual journey.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-amber-100"> +91-9992888303</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-4">✉️</div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-amber-100">diploma@gieogitaeducourses.org</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-amber-100">Gita Gyan Sansthanam, Kurukshetra</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-900 text-amber-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Spiritual Education Institute</h3>
                  <p className="mb-4">Transforming lives through ancient wisdom and spiritual knowledge.</p>
                  <div className="flex space-x-4">
                    <span className="text-2xl cursor-pointer hover:text-white">📘</span>
                    <span className="text-2xl cursor-pointer hover:text-white">🐦</span>
                    <span className="text-2xl cursor-pointer hover:text-white">📷</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#about" className="hover:text-white transition-colors">About Program</a></li>
                    <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a></li>
                    <li><a href="#admission" className="hover:text-white transition-colors">Admission</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Resources</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition-colors">Study Materials</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Online Library</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Contact Info</h4>
                  <ul className="space-y-2">
                    <li>📞 +91-9992888303</li>
                    <li>✉️ diploma@gieogitaeducourses.org</li>
                    <li>📍 Gita Gyan Sansthanam, Kurukshetra</li>
                    <li>🕒 Mon-Sat: 9AM-6PM</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-amber-700 mt-8 pt-8 text-center">
                <p>&copy; 2025 Gieogita. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BhagwatGitaLanding;