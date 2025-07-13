import React from 'react';
import { CheckIcon } from './icons';

import col1 from '../images/col1.jpeg';
import col2 from '../images/col2.jpeg';
import col3 from '../images/col3.jpg';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, features }) => (
  <div className="bg-slate-800/50 p-6 rounded-2xl flex flex-col shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-lg mb-6" />
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-300 mb-6 flex-grow">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <CheckIcon className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      imageSrc: col1,
      title: "Personal Tax Services",
      description: "Comprehensive individual tax planning. Return preparation and submission. Bespoke tax structuring to maximize your refunds and minimize your tax liability.",
      features: ["Tax Return Preparation", "Tax Planning", "Audit Support", "Provisional Tax Estimates","Deceased Estates and Estate Duty"]
    },
    {
      imageSrc: col2,
      title: "Business Tax Services",
      description: "Expert business tax solutions for corporations, partnerships, trusts and sole proprietorships.",
      features: ["Corporate Tax Returns", "Corporate Restructuring", "Payroll Tax", "Value Added Tax","Dividend Tax","Security Transfer Tax"]
    },
    {
      imageSrc: col3,
      title: "Tax Audits & Disputes",
      description: "Professional and stream-lined dispute resolution services.",
      features: ["Handle all Your Audit Queries", "Notices of Objections", "Notices of Appeal", "Alternative Dispute Resolution (ADR)", "Deferred Payment Arrangement, Debt Writeoffs, and Compromise Arrangements Negotiations", "Voluntary Disclosure Programme Applications (VDPs)"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Services</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            We offer a wide range of professional tax and accounting services to meet your individual and business needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
