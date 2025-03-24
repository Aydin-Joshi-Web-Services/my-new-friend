import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 bg-brand-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg">
              <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-200">Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-gray-200">Testimonials</Link></li>
              <li><Link href="/quote" className="hover:text-gray-200">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-lg">
              <li><a href="mailto:info@mynewfriend.ca">info@mynewfriend.ca</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-lg">
              <li>York Region, Ontario CA</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <Link href="https://www.facebook.com/profile.php?id=61571369652333" target="_blank" className="hover:text-gray-200">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com/mynewfriend.ca" target="_blank" className="hover:text-gray-200">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-xl">
          <p>© {currentYear} My New Friend CA. All rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <Link href="https://aydinjoshi.com" target="_blank">
              <span className="text-zinc-300 underline hover:text-zinc-700">
                Aydin Joshi Web Services
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
