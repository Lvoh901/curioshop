import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMailSendLine, RiPhoneLine, RiMapPin2Line, RiCheckLine, RiErrorWarningLine } from 'react-icons/ri';

// Use a public path for the background image for correct visibility
import backgroundImage from '../images/back02.jpg';

const initialFormState = {
    name: '',
    email: '',
    message: '',
};

const initialErrors = {
    name: '',
    email: '',
    message: '',
};

const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contact = () => {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState(initialErrors);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        let valid = true;
        let newErrors = { ...initialErrors };

        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!validateEmail(form.email)) {
            newErrors.email = 'Invalid email address';
            valid = false;
        }
        if (!form.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        if (!validate()) return;

        setSubmitting(true);

        // Simulate async submission
        setTimeout(() => {
            // Simulate random error
            if (form.email === 'fail@example.com') {
                setSubmitError('Something went wrong. Please try again.');
                setSubmitting(false);
                return;
            }
            setSubmitted(true);
            setSubmitting(false);
            setForm(initialFormState);
        }, 1200);
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{
                position: 'relative',
                minHeight: '100vh',
            }}
        >
            {/* Background image absolutely positioned for full coverage */}
            <div
                className="absolute inset-0 z-0"
                aria-hidden="true"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.95)',
                }}
            />
            {/* Overlay for better readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#fff7e6]/80 to-[#e0e7ff]/80 pointer-events-none" />
            <motion.div
                className="relative z-20 w-full max-w-2xl bg-white/90 p-8 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-6 border-b md:border-b-0 md:border-r border-gray-200 pr-0 md:pr-6 pb-6 md:pb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <RiMailSendLine className="text-[#ffb400] text-2xl" />
                        Contact Us
                    </h2>
                    <p className="text-gray-600 mb-2">
                        We'd love to hear from you! Fill out the form or reach us directly:
                    </p>
                    <div className="flex items-center gap-2 text-gray-700">
                        <RiPhoneLine className="text-[#ffb400]" />
                        <span className="font-medium">+254 700 123 456</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <RiMailSendLine className="text-[#ffb400]" />
                        <span className="font-medium">info@legance.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <RiMapPin2Line className="text-[#ffb400]" />
                        <span className="font-medium">Nairobi, Kenya</span>
                    </div>
                </div>
                {/* Contact Form */}
                <div>
                    <AnimatePresence>
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center justify-center h-full"
                            >
                                <RiCheckLine className="text-4xl text-green-500 mb-2" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Thank you!</h3>
                                <p className="text-gray-600 text-center">Your message has been sent. We'll get back to you soon.</p>
                                <button
                                    className="mt-6 px-4 py-2 bg-[#ffb400] text-white rounded-md font-medium hover:bg-[#e0a000] transition"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                className="space-y-5"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-400' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ffb400] focus:border-[#ffb400] sm:text-sm`}
                                        placeholder="Your Name"
                                        disabled={submitting}
                                    />
                                    {errors.name && (
                                        <div className="flex items-center text-xs text-red-500 mt-1 gap-1">
                                            <RiErrorWarningLine /> {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ffb400] focus:border-[#ffb400] sm:text-sm`}
                                        placeholder="you@example.com"
                                        disabled={submitting}
                                    />
                                    {errors.email && (
                                        <div className="flex items-center text-xs text-red-500 mt-1 gap-1">
                                            <RiErrorWarningLine /> {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-400' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ffb400] focus:border-[#ffb400] sm:text-sm`}
                                        placeholder="Your message"
                                        disabled={submitting}
                                    ></textarea>
                                    {errors.message && (
                                        <div className="flex items-center text-xs text-red-500 mt-1 gap-1">
                                            <RiErrorWarningLine /> {errors.message}
                                        </div>
                                    )}
                                </div>
                                {submitError && (
                                    <div className="flex items-center text-xs text-red-600 mt-2 gap-1">
                                        <RiErrorWarningLine /> {submitError}
                                    </div>
                                )}
                                <div>
                                    <button
                                        type="submit"
                                        className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ffb400] hover:bg-[#e0a000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffb400] transition ${
                                            submitting ? 'opacity-60 cursor-not-allowed' : ''
                                        }`}
                                        disabled={submitting}
                                    >
                                        {submitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                    />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
