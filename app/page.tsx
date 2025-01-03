import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, Car, Coffee, Book, Music } from "lucide-react";

const services = [
  {
    title: "Companionship",
    icon: Heart,
    description: "Friendly conversation, shared activities, and emotional support"
  },
  {
    title: "Transportation",
    icon: Car,
    description: "Safe and reliable transportation to appointments and activities"
  },
  {
    title: "Social Activities",
    icon: Coffee,
    description: "Accompany to social events, restaurants, and community activities"
  },
  {
    title: "Reading & Discussion",
    icon: Book,
    description: "Reading books, newspapers, and engaging in stimulating discussions"
  },
  {
    title: "Hobby Support",
    icon: Music,
    description: "Assistance with hobbies, crafts, and recreational activities"
  },
  {
    title: "Routine Activities",
    icon: Clock,
    description: "Help with daily routines and light household tasks"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://t4.ftcdn.net/jpg/04/85/39/59/360_F_485395928_KdxqWAOlrWk0tubV6dsQWvPcWRd7ndzW.jpg"
          alt="Senior companionship"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 max-w-3xl px-4">
            <h1 className="text-5xl font-bold">Companionship That Makes a Difference</h1>
            <p className="text-xl">
              Professional companion services for aging adults in Ontario focused on social engagements and enriching quality of life for aging adults.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg" variant="destructive">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
        </div>
      </section>
    </div>
  );
}