import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Amina Khan",
    role: "Daughter",
    image: "https://us.123rf.com/450wm/rawpixel/rawpixel1706/rawpixel170609371/79663628-indian-ethnicity-happy-woman-portrait.jpg?ver=6",
    content: "The companion service has been invaluable for my mother. Ever since My New Friend came into her life, she has been so happy and it fills me with such joy to see her like that.",
    rating: 5
  },
  {
    name: "Emily Bolt",
    role: "Client",
    image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/07/GettyImages-1190822973-1024x683.jpg?w=1155&h=2969",
    content: "I look forward to my companion visits every week. They've helped me stay active and engaged with my hobbies and interests.",
    rating: 5
  },
  {
    name: "Robert Miller",
    role: "Family Member",
    image: "https://media.istockphoto.com/id/544358212/photo/happy-laughing-man.jpg?s=612x612&w=0&k=20&c=FwJw5gqpUX3A8jOdsnIqQmSOxptVcYqHzaBkz6bvtMA=",
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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className='text-black pt-20'>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Hear from our clients and their families about their experiences with our companion service.
          </p>
          <Button variant="outline" className="mt-6 bg-red-600 text-white text-lg">Submit a Testimonial</Button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
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