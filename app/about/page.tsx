import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const companions = [
  {
    name: "Zahra Pardhan",
    image: "/zee.jpeg",
    education: "Bachelors of Science (York University), Certification in Risk Management (University of Toronto)",
    background: "Police Check, Vulnerability Screening",
    hobbies: "Nature walks, Reading, Sports, Travelling, Art shows, Enjoying time with elders, Shopping",
    bio: "Zahra is a companion at My New Friend. She has been in voluntary service for "
  }
];

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Meet Our Companions</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {companions.map((companion) => (
            <Card key={companion.name} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                  <Image
                    src={companion.image}
                    alt={companion.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle>{companion.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{companion.bio}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-1">Education</h4>
                      <p className=" text-gray-600">{companion.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-1">Background Checks</h4>
                      <p className=" text-gray-600">{companion.background}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-1">Hobbies</h4>
                      <p className=" text-gray-600">{companion.hobbies}</p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}