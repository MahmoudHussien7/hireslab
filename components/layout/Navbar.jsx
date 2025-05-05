"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ModalForm from "@/components/services/ModalForm";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Community", href: "/community" },
  { name: "Articles", href: "/articles" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rotateDeg, setRotateDeg] = useState(0);

  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  // Skip rendering if in dashboard
  if (isDashboard) return null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setRotateDeg(window.scrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWorkWithUsClick = () => {
    setIsModalOpen(true);
    if (isOpen) setIsOpen(false); // Close mobile menu if open
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <header
        className={`fixed top-0 w-full z-50 transition-all ease-in-out duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md py-2 shadow-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-10 h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="z-50 flex-shrink-0">
            <Image
              src="/images/logo.png"
              width={120}
              height={40}
              alt="Logo"
              className="h-auto w-auto object-contain"
              sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 150px"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-sm sm:text-base px-2 sm:px-3 py-1 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <motion.button
              onClick={handleWorkWithUsClick}
              style={{ rotate: rotateDeg }}
              className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-zaza text-white shadow-lg ml-4"
              aria-label="Contact us"
            >
              <span className="text-[8px] sm:text-[10px] font-medium tracking-widest text-center leading-tight">
                Let's Talk
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50 p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6 sm:space-y-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl sm:text-2xl py-2 hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}

              <motion.button
                onClick={handleWorkWithUsClick}
                style={{ rotate: rotateDeg }}
                className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-zaza text-white shadow-lg mt-6"
                aria-label="Contact us"
              >
                <span className="text-[8px] sm:text-[10px] font-medium tracking-widest text-center leading-tight">
                  Let's Talk
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
