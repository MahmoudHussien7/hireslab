"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const is404Page = pathname === "/not-found";

  if (isDashboard || is404Page) return null; // 👈 Skip rendering if in dashboard or 404 page
  return (
    <footer className=" md:px-0 sm:px-0 lg:px-16 bg-black text-white bg-gradient-to-bl from-black  to-[#0d1b10]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={200}
                height={200}
                alt="Logo"
                className="mb-4"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Recruitment and HR solutions for your business
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-accent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-400 hover:text-accent"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-accent"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-accent"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-accent"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates
            </p>
            <div className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button type="submit" variant="prime">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} The Hires Lab. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
