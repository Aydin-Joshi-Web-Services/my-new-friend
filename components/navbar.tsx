"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NextFont } from "next/dist/compiled/@next/font";

export function Navbar({ font }: { font: NextFont }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-600 text-white border-b border-brand-700 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <span className={`text-3xl sm:text-2xl font-semibold tracking-tight ${font.className}`}>
              My New Friend
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-base font-medium hover:text-brand-200 transition-colors">
              Home
            </Link>
            {/*<Link href="/about" className="text-base font-medium hover:text-brand-200 transition-colors">
              About Us
            </Link>*/}
            <Link href="/services" className="text-base font-medium hover:text-brand-200 transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-base font-medium hover:text-brand-200 transition-colors">
              Testimonials
            </Link>
            <Link href="/quote">
              <Button variant="outline" size="lg" className="bg-white text-black">
                Get a Quote
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:bg-brand-700 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="block md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="px-4 py-2 text-base font-medium hover:bg-brand-700 rounded-md">
                Home
              </Link>
              {/*<Link href="/about" className="px-4 py-2 text-base font-medium hover:bg-brand-700 rounded-md">
                About Us
              </Link>*/}
              <Link href="/services" className="px-4 py-2 text-base font-medium hover:bg-brand-700 rounded-md">
                Services
              </Link>
              <Link href="/testimonials" className="px-4 py-2 text-base font-medium hover:bg-brand-700 rounded-md">
                Testimonials
              </Link>
              <Link href="/quote" className="px-4 py-2">
                <Button variant="outline" className="w-full bg-white text-brand-600">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}