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

  if (isDashboard) return null;

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setScrolled(window.scrollY > 10);
        setRotateDeg(window.scrollY * 0.2);
      }
    };
    handleScroll(); // initialize on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleWorkWithUsClick = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };

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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-black/80 backdrop-blur-md py-2 shadow-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-10 h-16 sm:h-20">
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm sm:text-base px-2 sm:px-3 py-1 transition-colors ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <motion.button
              onClick={handleWorkWithUsClick}
              style={{ rotate: isOpen ? 0 : rotateDeg }}
              className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-zaza text-white shadow-lg ml-4"
              aria-label="Contact us"
            >
              <span className="text-[8px] sm:text-[10px] font-medium tracking-widest text-center leading-tight">
                Let's Talk
              </span>
            </motion.button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-[60]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-4"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl sm:text-2xl py-2 transition-colors ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-white hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <motion.button
                onClick={handleWorkWithUsClick}
                style={{ rotate: isOpen ? 0 : rotateDeg }}
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zaza text-white shadow-lg"
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
