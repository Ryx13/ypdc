import React from 'react';
import handshake from '../images/handshake.jpg'; // ✅ Import local image

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-10">
          <img
            src={handshake}
            alt="Collaboration"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Us?</h2>
          <p className="text-lg text-gray-300 mb-10">
            With years of experience in tax, business advisory and estate planning, Yardman Projects & Development has built a reputation for excellence, integrity, and personalized service.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-purple-300">Maximize Your Savings</h3>
              <p className="text-gray-400">Our expert strategies help you minimize tax liability and maximize refunds.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-purple-300">Audit Protection</h3>
              <p className="text-gray-400">Complete audit defense and representation services for peace of mind.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-purple-300">Personalized Service</h3>
              <p className="text-gray-400">Dedicated professionals who handle your case from the beginning to the end of the engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
