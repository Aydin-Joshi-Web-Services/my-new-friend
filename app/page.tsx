import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car,  Book, PanelsTopLeft, Calendar, Gamepad, Computer, Pill, PersonStanding, HomeIcon, ArrowUpRight } from "lucide-react";
import Offer from "@/components/Offer";

const services = [
  {
    title: "Technology Support",
    icon: Computer,
    description: "Comprehensive assistance with computers, internet navigation, emails, texts, and general tech troubleshooting."
  },
  {
    title: "Health & Wellness",
    icon: Pill,
    description: "Medication reminders and accompaniment to medical appointments, ensuring health routines are maintained."
  },
  {
    title: "Active Lifestyle",
    icon: PersonStanding,
    description: "Promoting physical activity and outdoor hobbies like nature walks, bird watching, golfing, and capturing moments through photography."
  },
  {
    title: "Mental Engagement",
    icon: Book,
    description: "Reading sessions, letter writing, and engaging conversations to maintain mental acuity and social connection."
  },
  {
    title: "Social Engagements",
    icon: PanelsTopLeft,
    description: "Dining out experiences, visits to libraries, museums, movies, cultural shows, events, board games, light travel, and recreational outings."
  },
  {
    title: "Entertainment",
    icon: Gamepad,
    description: "Dining out experiences, visits to libraries, museums, movies, cultural shows, events, board games, light travel, and recreational outings."
  },
];


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
            We provide tailored companion services to aging adults, focusing on social engagement and enriching their quality of life.
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <service.icon className="h-5 w-5 text-red-500" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-l underline mt-4 text-red-500"><a href="/services"><u>See all services</u></a></p>
        </div>
      </section>
    </div>
  );
}