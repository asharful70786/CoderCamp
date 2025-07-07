import { useState } from 'react';

const ContactInvite = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('contact@codercamp.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      window.location.href = 'mailto:contact@codercamp.com';
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden">
      {/* Light blurred backgrounds */}
      <div className="absolute -top-24 left-10 w-40 h-40 bg-orange-400 opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 right-10 w-40 h-40 bg-indigo-500 opacity-20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto py-20 px-6 text-center">
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 5 18.5 5V3zM16 5v3c0 2.76-2.24 5-5 5s-5-2.24-5-5V5h10z" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-light mb-4">
          Let’s talk over some <br />
          <span className="font-semibold text-orange-500">virtual coffee!</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-300 mb-8">
          Share your ideas with us — and we’ll help you bring them to life with meaningful solutions.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleEmailClick}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-medium text-base hover:scale-105 transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          contact@codercamp.com
        </button>

        {/* Copied text */}
        {copied && (
          <div className="mt-3 text-sm text-green-400 animate-bounce">
            Copied to clipboard!
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactInvite;
