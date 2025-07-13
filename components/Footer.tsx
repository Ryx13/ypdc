
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} YPDC - Yardman Projects & Development CC. All Rights Reserved.</p>
        <p className="text-sm mt-2">Professional tax and accounting services with a commitment to excellence, integrity, and personalized client care.</p>
      </div>
    </footer>
  );
};

export default Footer;
