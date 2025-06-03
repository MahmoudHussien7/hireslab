import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const SocialMediaBreaker = () => {
  const icons=[
          { icon: Facebook, label: "Facebook", href: "#" },
          { icon: Instagram, label: "Instagram", href: "#" },
          { icon: Linkedin, label: "LinkedIn", href: "#" },
        ]
  return (
    <section className="bg-black text-white py-10 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold px-2">
        Follow Us on <span className="text-[#ffc56d]">Social Media</span>
      </h2>

      <div className="flex justify-center gap-6 pt-8 flex-wrap">
        {icons.map(({ icon: Icon, label, href }, index) => (
          <Link
            key={index}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-white hover:border-[#ffc56d] transition-all"
          >
            <Icon className="w-6 h-6 md:w-10 md:h-10 text-white hover:text-[#ffc56d] transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaBreaker;



      // <div className="flex justify-center gap-6 text-2xl relative
      //   before:content-[''] before:absolute before:bg-gray-500 
      //  before:w-[33%]  md:before:w-[38%]  lg:before:w-[40%]  xl:before:w-[44%]  before:h-[0.01rem] before:bottom-[48%] before:left-0
      //   after:content-[''] after:absolute after:bg-gray-500 
      //   after:w-[33%]  md:after:w-[38%]  lg:after:w-[40%] xl:after:w-[44%] after:h-[0.01rem] after:bottom-[48%] after:right-0">

      //   <Link href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
      //     <Facebook className="w-6 h-6 hover:text-blue-700 transition-all text-gray-600" />
      //   </Link>
      //   <Link href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
      //     <Instagram className="w-6 h-6 hover:text-blue-700 transition-all text-gray-600" />
      //   </Link>
      //   <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
      //     <Linkedin className="w-6 h-6 hover:text-blue-700 transition-all text-gray-600" />
      //   </Link>
      // </div>