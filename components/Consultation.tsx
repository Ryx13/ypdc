import React, { useState } from 'react';
import lastone from '../images/lastone.jpeg'; // Import local image

// This tells TypeScript that the 'emailjs' object exists on the global scope
declare const emailjs: any;

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceID = 'service_a22ikcq';
    const templateID = 'template_al0vwwe';
    const publicKey = 'DDTB9scm_WkNThd84';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response: any) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      })
      .catch((err: any) => {
        console.error('FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="consultation" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:pr-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Schedule a consultation
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Enjoy tax peace of mind by scheduling an appointment with one of our dedicated professionals.
          </p>
          <img
            src={lastone}
            alt="Consultation"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                Name <span className="text-gray-400">(required)</span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2 invisible sm:visible">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email <span className="text-gray-400">(required)</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
              Service needed <span className="text-gray-400">(required)</span>
            </label>
            <select
              name="service"
              id="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="personal">Personal Tax Services</option>
              <option value="business">Business Tax Services</option>
              <option value="audits">Tax Audits & Disputes</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-gray-400">(required)</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-stone-200 hover:bg-stone-300 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300 disabled:bg-slate-700 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND'}
            </button>
          </div>
          {submitStatus === 'success' && (
            <p className="text-green-400 text-center">
              Thank you for your message! We will get back to you shortly.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-center">
              Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Consultation;
