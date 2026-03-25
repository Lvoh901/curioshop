"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMailSendLine, RiPhoneLine, RiMapPin2Line, RiCheckLine, RiErrorWarningLine, RiWhatsappLine, RiFacebookCircleLine, RiInstagramLine, RiTiktokLine } from 'react-icons/ri';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

import { submitContactForm } from './actions';

export default function ContactPage() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...initialErrors };

    if (!form.name.trim()) {
      newErrors.name = 'Please tell us your name';
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = 'What would you like to tell us?';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;

    setSubmitting(true);

    try {
      const result = await submitContactForm(form);
      if (result.success) {
        setSubmitted(true);
        setForm(initialFormState);
      } else {
        setSubmitError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setSubmitError('An unexpected error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: RiPhoneLine, label: 'Call Us', value: '0705634476 / 0705091175', color: 'bg-blue-600 text-white' },
    { icon: RiMailSendLine, label: 'Email', value: 'info@jakem.com', color: 'bg-amber-600 text-white' },
    { icon: RiMapPin2Line, label: 'Visit', value: 'Tabaka, Kisii / Ngong Town, Nairobi', color: 'bg-emerald-600 text-white' },
  ];

  const socialLinks = [
    { icon: RiWhatsappLine, href: '#', label: 'WhatsApp' },
    { icon: RiFacebookCircleLine, href: '#', label: 'Facebook' },
    { icon: RiInstagramLine, href: '#', label: 'Instagram' },
    { icon: RiTiktokLine, href: '#', label: 'TikTok' },
  ];

  return (
    <div className="min-h-screen bg-stone-100 mt-12 py-14 px-2 sm:py-20 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center" style={{ backgroundImage: "url(/images/back02.jpg)", minHeight: "100%" }}>
      {/* Proper black overlay */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}></div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-4">
          <motion.h1
            className="font-serif font-bold text-white text-2xl lg:text-3xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-white max-w-2xl mx-auto font-bold"
          >
            Whether you&apos;re looking for a specific artifact or want to learn more about our collection, we&apos;re here to help. We will get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-2 w-full">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-2 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-5 transition-shadow hover:shadow-md cursor-pointer w-full"
              >
                <div className={`p-4 rounded-xl ${method.color}`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400">{method.label}</p>
                  <p className="text-stone-900 font-bold text-sm break-words">{method.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-6">
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-4 px-2 text-center underline underline-offset-4 decoration-[#ffb400] decoration-4">Follow our journey</p>
              <div className="flex justify-center gap-4 px-2 flex-wrap">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    className="p-3 bg-stone-400 text-black rounded-full hover:bg-stone-300 transition-colors hover:shadow-lg shadow-[#ffb400]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-2 w-full">
            <motion.div
              className="bg-white rounded-xl overflow-hidden w-full"
            >
              <div className="p-4 xs:p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <RiCheckLine className="text-4xl" />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-stone-900 mb-3">Message Received!</h3>
                      <p className="text-stone-600 mb-8 max-w-xs mx-auto">
                        Thank you for reaching out. We&apos;ve tucked your message away safely and will get back to you soon.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all"
                      >
                        Send Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-stone-900 uppercase tracking-wider ml-1">Your Name</label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-5 py-3 bg-stone-50 border ${errors.name ? 'border-red-300 ring-2 ring-red-50' : 'border-stone-200'} rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all`}
                          />
                          {errors.name && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><RiErrorWarningLine /> {errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-stone-900 uppercase tracking-wider ml-1">Email Address</label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full px-5 py-3 bg-stone-50 border ${errors.email ? 'border-red-300 ring-2 ring-red-50' : 'border-stone-200'} rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all`}
                          />
                          {errors.email && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><RiErrorWarningLine /> {errors.email}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-900 uppercase tracking-wider ml-1">Subject</label>
                        <input
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Interested in Custom Carvings"
                          className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-900 uppercase tracking-wider ml-1">Your Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about the piece you're interested in..."
                          className={`w-full px-5 py-3 bg-stone-50 border ${errors.message ? 'border-red-300 ring-2 ring-red-50' : 'border-stone-200'} rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-50 focus:border-amber-200 transition-all resize-none`}
                        />
                        {errors.message && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><RiErrorWarningLine /> {errors.message}</p>}
                      </div>
                      {submitError && (
                        <div className="p-4 bg-red-50 text-red-700 rounded-2xl text-sm flex items-center gap-3">
                          <RiErrorWarningLine className="text-xl shrink-0" />
                          {submitError}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full py-3 bg-amber-500 text-white rounded-2xl font-bold text-lg hover:bg-amber-600 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {submitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <RiMailSendLine className="text-2xl" />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
