import { FaUserCircle, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "BabyJohn",
    text: "We needed a smooth subscription and landing setup, and CoderCamp delivered beautifully. Very responsive and professional team.",
    image: "/BAByjohnOwner.jpg",
    rating: 5,
  },
  {
    name: "Bombay Studio",
    text: "We wanted a creative app where users could find photos using face detection. CoderCamp nailed the UX and backend pipeline!",
    image: "/buzz.jpg",
    rating: 4.5,
  },
  {
    name: "Lungi House",
    text: "Our cloth store finally went online thanks to CoderCamp. The design feels modern yet local, and our community loves it.",
    image: "/studioOwner.avif",
    rating: 4.2,
  },
  {
    name: "Meesho Partner",
    text: "I'm a Meesho-authorized delivery partner. CoderCamp's owner helped us build a custom dashboard to track our delivery agents and their activities. It really improved our workflow.",
    image: "/sabir.jpg",
    rating: 5,
  },
];

// Helper to render stars with full/half/empty logic
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalfStar && <FaStarHalfAlt key="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </>
  );
};

export default function Testimonials() {
  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
        What Our Real Clients Say
      </h2>

      <div className="overflow-hidden">
        <div className="flex gap-8 px-6 animate-testimonials">
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="min-w-[19rem] max-w-xs bg-[#0d111c]/80 border border-white/10 backdrop-blur
                         rounded-xl px-6 py-6 hover:scale-[1.03] transition
                         text-gray-200 shadow-lg"
            >
              <header className="flex items-center gap-3 mb-4">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-gray-600"
                  />
                ) : (
                  <FaUserCircle className="text-3xl text-gray-500" />
                )}
                <div>
                  <h3 className="font-semibold text-orange-400">{t.name}</h3>
                  <div className="flex text-yellow-400 text-sm">
                    {renderStars(t.rating)}
                  </div>
                </div>
              </header>

              <p className="italic text-sm leading-relaxed">
                “{t.text}”
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
