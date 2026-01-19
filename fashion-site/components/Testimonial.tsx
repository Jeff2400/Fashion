export const testimonials = [
  {
    quote: "The fitting was perfect and the attention to detail was unmatched. I felt truly special.",
    author: "Ama Mensah",
    role: "Bride",
    avatar: "/dummydata/testimonial/ama.jpg",
  },
  {
    quote: "From consultation to final delivery, everything was seamless and professional.",
    author: "Kwame Boateng",
    role: "Corporate Client",
    avatar: "/dummydata/testimonial/kwame.jpg",
  },
  {
    quote: "The designs are elegant, modern, and beautifully tailored. I get compliments every time.",
    author: "Efua Owusu",
    role: "Fashion Enthusiast",
    avatar: "/dummydata/testimonial/efua.jpg",

  },
  {
    quote: "Absolutely stunning craftsmanship. The measurements session was smooth and comfortable.",
    author: "Nana Adjei",
    role: "Groom",
    avatar: "/dummydata/testimonial/nana.jpg",

  },
];

export default function Testimonial({
  quote,
  author,
  role,
  avatar,
}: {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}) {
  return (
    <figure className="bg-white/80 rounded-2xl p-6 shadow-lg border border-white/30">
      <blockquote className="text-gray-800 italic text-lg leading-relaxed">“{quote}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        {avatar ? (
          <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-brand-cta flex items-center justify-center text-white font-semibold">{author.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
        )}
        <div>
          <div className="text-sm font-semibold text-gray-900">{author}</div>
          {role && <div className="text-xs text-gray-500">{role}</div>}
        </div>
      </figcaption>
    </figure>
  );
}
