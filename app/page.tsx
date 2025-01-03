import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car,  Book, PanelsTopLeft, Calendar, Gamepad, Computer, Pill, PersonStanding, HomeIcon, ArrowUpRight } from "lucide-react";
import Offer from "@/components/Offer";
import { services } from "@/lib/services";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?cs=srgb&dl=pexels-olly-3768131.jpg&fm=jpg"
          alt="Senior companionship"
          fill
          className="object-cover brightness-50 opacity-90"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 max-w-3xl px-4">
            <h1 className="text-5xl font-bold">Professional Companion Services</h1>
            <p className="text-2xl">
            We provide tailored companion services to aging adults, focusing on social engagement and quality of life.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/services">
                <Button size="lg" variant="destructive">
                  <span className="text-xl">Learn More</span>
                </Button>
              </Link>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                <span className="text-xl">Get a Quote</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Offer />
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              We offer a wide range of companionship services tailored to meet the unique needs
              of each individual we serve.
            </p>
            <p className="text-l underline mt-4 text-red-500"><a href="/services"><u>See all services</u></a></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}