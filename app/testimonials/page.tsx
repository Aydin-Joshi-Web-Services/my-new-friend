"use client"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const testimonials = [
  {
    name: "Amina Khan",
    role: "Daughter",
    content: "The companion service has been invaluable for my mother. Ever since My New Friend came into her life, she has been so happy and it fills me with such joy to see her like that.",
    rating: 5
  },
  {
    name: "Emily Bolt",
    role: "Client",
    content: "I look forward to my companion visits every week. They've helped me stay active and engaged with my hobbies and interests.",
    rating: 5
  },
  {
    name: "Rob Miller",
    role: "Family Member",
    content: "Finding this service was a blessing. The companions are professional, caring, and truly understand the needs of seniors.",
    rating: 5
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Page() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stars: "",
    quote: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "testimonial", ...formData }),
      });
      if (response.ok) {
        alert("Testimonial submitted!");
        setDialogOpen(false);
        setFormData({ name: "", email: "", stars: "", quote: "" });
      } else {
        console.error("Failed to submit testimonial");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className='text-black pt-20'>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Hear from our clients and their families about their experiences with our companion service.
          </p>
      <Button
        variant="outline"
        className="mt-6 bg-red-600 text-white text-lg"
        onClick={() => setDialogOpen(true)}
      >
        Submit a Testimonial
      </Button>

     <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
  <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
  <DialogContent className="flex items-center justify-center p-4 z-50">

    <div className="bg-white rounded-lg shadow-lg w-full p-6">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-800 mb-4">
          Submit a Testimonial
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          name="stars"
          type="number"
          placeholder="Stars (1-5)"
          min="1"
          max="5"
          value={formData.stars}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="quote"
          placeholder="Testimonial"
          value={formData.quote}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" className="bg-red-600 text-white w-full">
          Submit
        </Button>
      </form>
    </div>
  </DialogContent>
</Dialog>

        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 text-lg text-gray-700">{testimonial.content}</p>
                  <div className="mt-4">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of satisfied clients and discover how we can enhance your or your loved one&apos;s quality of life.
          </p>
          <a 
            href="/quote"
            className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-brand-700 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}