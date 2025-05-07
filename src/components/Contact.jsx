import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-4xl text-accent" />,
      title: "Email",
      value: "khushitwenty8@gmail.com",
      link: "mailto:khushitwenty8@gmail.com"
    },
    {
      icon: <FaPhone className="text-4xl text-accent" />,
      title: "Phone",
      value: "+91 7905793181",
      link: "tel:+917905793181"
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-accent" />,
      title: "Location",
      value: "Jalandhar, Punjab, India",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/khushi-tiwari-a46b082b2"
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      name: "Instagram",
      url: "https://www.instagram.com/___khushitiwari____/"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using emailjs or your preferred email service
      const response = await fetch('https://formspree.io/f/xpzvgwrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-wine/5 to-wine/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-wine/10 rounded-lg group-hover:bg-wine/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-wine-text group-hover:text-wine-accent transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-wine-text-secondary">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="card p-6 relative overflow-hidden group">
              <h3 className="text-xl font-bold text-wine-text mb-4">Connect with Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-wine/10 rounded-lg hover:bg-wine/20 transition-colors duration-300 group"
                  >
                    <div className="text-wine-text group-hover:text-wine-accent transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-6 relative overflow-hidden group"
          >
            <h3 className="text-xl font-bold text-wine-text mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-wine-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-wine-card border border-wine/20 focus:border-wine-accent focus:outline-none text-wine-text transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-wine-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-wine-card border border-wine/20 focus:border-wine-accent focus:outline-none text-wine-text transition-colors duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-wine-text-secondary mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-wine-card border border-wine/20 focus:border-wine-accent focus:outline-none text-wine-text transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-wine-text-secondary mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-wine-card border border-wine/20 focus:border-wine-accent focus:outline-none text-wine-text transition-colors duration-300 h-32"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full group relative overflow-hidden disabled:opacity-50"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-wine-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 