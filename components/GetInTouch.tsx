
import React from 'react';

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const GetInTouch: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Have questions or need a custom quote? Feel free to reach out to us directly. We're here to help you navigate your financial journey.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-16 gap-y-10">
          <a href="mailto:info@ypdc.co.za" className="flex items-center gap-4 group">
            <MailIcon className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold text-white text-left">Email Us</h3>
              <p className="text-lg text-gray-300 group-hover:text-purple-300 transition-colors">
                info@ypdc.co.za
              </p>
            </div>
          </a>
          <a href="tel:+27645383188" className="flex items-center gap-4 group">
            <PhoneIcon className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold text-white text-left">Call Us</h3>
              <p className="text-lg text-gray-300 group-hover:text-purple-300 transition-colors">
                +27 64 538 3188
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
