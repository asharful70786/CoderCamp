import { FaUserCircle } from "react-icons/fa";

/* Feel free to swap image URLs in “image” */
const testimonials = [
  {
    name: "Ravi Traders",
    text: "CoderCamp built our wholesale portal exactly as needed — fast, responsive, and user-friendly!",
    image: "",
  },
  {
    name: "BrightKids Clinic",
    text: "The team delivered an amazing appointment system with great design. Highly recommended!",
    image: "",
  },
  {
    name: "Ashiq Web Store",
    text: "Professional work with strong backend integration. We’ll definitely work again!",
    image: "",
  },
  {
    name: "Bob Boyle",
    text: "Reliable team. They understand internal processes and deliver polished, scalable software.",
    image: "",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
        What Our Clients Say
      </h2>

      {/* overflow-hidden keeps rogue text/cards inside the viewport */}
      <div className="overflow-hidden">
        {/* duplicate the list so the loop has no gap */}
        <div className="flex gap-6 animate-testimonials">
          {[...testimonials, ...testimonials].map((t, i) => (
            <article
              key={i}
              className="min-w-[19rem] max-w-xs bg-[#0d111c]/80 border border-white/10 backdrop-blur
                         rounded-xl px-6 py-5 hover:scale-[1.03] transition
                         text-gray-200 shadow-lg"
            >
              <header className="flex items-center gap-3 mb-3">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-3xl text-gray-500" />
                )}
                <h3 className="font-semibold text-orange-400 whitespace-normal">
                  {t.name}
                </h3>
              </header>

              {/* line-clamp-3 stops extra-long quotes from spilling out;
                  remove if you prefer full text */}
              <p className="italic text-sm leading-relaxed line-clamp-3">
                “{t.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
