import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const SocialMediaBreaker = () => {
  return (
    <section className="bg-[#F7F7F7] text-gray-900 py-10 text-center">
      <h2 className="text-[0.9rem] font-medium mb-4 ">Follow us on Social Media</h2>
      <div className="flex justify-center gap-6 text-2xl relative
        before:content-[''] before:absolute before:bg-gray-500 
       before:w-[33%]  md:before:w-[38%]  lg:before:w-[40%]  xl:before:w-[44%]  before:h-[0.01rem] before:bottom-[48%] before:left-0
        after:content-[''] after:absolute after:bg-gray-500 
        after:w-[33%]  md:after:w-[38%]  lg:after:w-[40%] xl:after:w-[44%] after:h-[0.01rem] after:bottom-[48%] after:right-0">

        <Link href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 hover:text-blue-700 transition-all text-gray-600" />
        </Link>
        <Link href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 hover:text-blue-700 transition-all text-gray-600" />
        </Link>
        <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-700 transition-all text-gray-600" />
        </Link>
        <Link href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 hover:text-blue-700 transition-all text-gray-600" />
        </Link>
      </div>
    </section>
  );
};

export default SocialMediaBreaker;
