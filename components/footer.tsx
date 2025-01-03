import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-red-500">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
              <li><Link href="/services" className="hover:text-red-500">Services</Link></li>
              <li><Link href="/what-we-offer" className="hover:text-red-500">What We Offer</Link></li>
              <li><Link href="/pricing" className="hover:text-red-500">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>York Region, Ontario</li>
              <li>info@mynewfriend.ca</li>
              <li>(216) 307-6020</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8am - 8pm</li>
              <li>Saturday: 9am - 5pm</li>
              <li>Sunday: 10am - 4pm</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>York Region</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>© {currentYear} My New Friend CA. All rights reserved.</p>
          <p className="mt-2">
          Powered by{" "}
            <Link href="https://aydinjoshi.com" target="_blank">
            <span className="text-blue-500">    
              <u>  
              Aydin Joshi Web Services
              </u>       
            </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}