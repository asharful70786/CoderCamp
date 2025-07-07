import { useState, useEffect } from 'react';

const ScrollingBoll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE: Enhanced Text */}
        <div className={`flex-1 text-center md:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Let the{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                  Techin
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transform scale-x-0 animate-scale-x"></div>
              </span>{' '}
              Begin
            </h1>
            
            {/* Glowing effect behind text */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-2xl -z-10 opacity-50"></div>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
            Let's come together and usher in the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium">
              next tech revolution
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-10">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 transform">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-white hover:border-orange-500 transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm">
              Learn More
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-base md:text-lg">
              Let's Talk Over Some{' '}
              <span className="text-orange-400 font-medium">Virtual Coffee</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Enhanced Video with Effects */}
        <div className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Middle ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-spin-slow"></div>
            
            {/* Video container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-orange-500 to-red-500 group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full"></div>
              <video
                className="object-cover w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/premiumContact.webm" type="video/webm" />
                <source src="/premiumContact.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full"></div>
            </div>

            {/* Floating elements around video */}
            <div className="absolute top-10 -right-5 w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-10 -left-5 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-1/2 -right-8 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Icons */}
      <div className="fixed bottom-10 right-6 flex flex-col gap-4 z-50">
        <a 
          href="https://wa.me/your-number" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 transform">
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
          </div>
        </a>
        
        <a 
          href="skype:live:your-id?chat"
          className="group relative"
        >
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 transform">
            <img src="/skype-icon.png" alt="Skype" className="w-6 h-6" />
          </div>
        </a>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingBoll;
