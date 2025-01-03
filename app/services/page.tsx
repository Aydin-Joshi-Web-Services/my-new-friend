import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Computer, Pill, PersonStanding, Car, Home, Calendar, Book, Gamepad, Plane } from "lucide-react";

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
    description: "Engaging walks, dining out experiences, and visits to libraries, museums, movies, and cultural shows."
  },
  {
    title: "Vehicle Care",
    icon: Car,
    description: "Complete automobile maintenance support including car detailing, oil changes, tire services, and routine maintenance visits."
  },
  {
    title: "Home Services",
    icon: Home,
    description: "Light housekeeping, yard maintenance, and general home care to keep living spaces comfortable and well-maintained."
  },
  {
    title: "Schedule Management",
    icon: Calendar,
    description: "Coordinating and accompanying to appointments, events, and daily activities with reliable scheduling support."
  },
  {
    title: "Mental Engagement",
    icon: Book,
    description: "Reading sessions, letter writing, and engaging conversations to maintain mental acuity and social connection."
  },
  {
    title: "Entertainment",
    icon: Gamepad,
    description: "Interactive entertainment including board games, social activities, and recreational outings."
  },
  {
    title: "Travel Companion",
    icon: Plane,
    description: "Light travel companionship services ensuring comfortable and supported journeys."
  }
];

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of companion services designed to enhance
            the quality of life for aging adults while providing peace of mind for their families.
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
    </div>
  );
}