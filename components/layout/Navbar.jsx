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
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  // Skip rendering if in dashboard
  if (isDashboard) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rotateDeg, setRotateDeg] = useState(0);

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
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-black backdrop-blur-lg py-2 shadow-md" : "bg-gray py-5"
        }`}
      >
        <div className="container mx-auto md:px-0 sm:px-0 lg:px-16 flex justify-between items-center relative h-20">
          {/* Logo */}
          <Link href="/" className="z-50">
            <Image
              src="/images/logo.png"
              width={150}
              height={50}
              alt="Logo"
              className="flex items-center"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-base text-white hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Work With Us Button - Desktop */}
            <motion.button
              onClick={handleWorkWithUsClick}
              style={{ rotate: rotateDeg }}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-zaza text-white shadow-lg cursor-pointer"
            >
              <span className="text-[10px] font-medium tracking-widest text-center leading-tight">
                Let's talk
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-gray/95 backdrop-blur-md z-40 flex items-center justify-center"
            >
              <div className="container flex flex-col items-center space-y-6 py-20">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-xl text-white hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Work With Us Button - Mobile (same as desktop) */}
                <motion.button
                  onClick={handleWorkWithUsClick}
                  style={{ rotate: rotateDeg }}
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-zaza text-white shadow-lg cursor-pointer mt-4"
                >
                  <span className="text-[10px] font-medium tracking-widest text-center leading-tight">
                    Let's Talk
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
