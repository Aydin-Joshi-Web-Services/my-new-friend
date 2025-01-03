import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function Offer() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">Our Mission</h1>
          <p className="text-center mb-12">To provide trusted, professional, and quality senior companion services that enrich the lives of aging adults across Canada, fostering meaningful connections and ensuring their well-being with compassion and excellence.</p>
        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <div className="space-y-4">
                <p>
                 We understand that each individual has unique needs, interests, and preferences. That&apos;s why we take the time to match our clients with companions who share similar interests and personalities, fostering genuine connections and meaningful relationships.
                </p>
                <p>
                Our companions provide emotional support, engage in stimulating conversations, and participate in activities that bring joy and purpose to our clients&apos; lives. Whether it&apos;s sharing a hobby, going for a walk, or simply enjoying each other&apos;s company, we&apos;re here to make every day more enjoyable.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Companions</h2>
              <div className="space-y-4">
                <p>
                We are committed to providing safe, reliable, and enriching companionship services that help aging adults maintain their independence. Our companions are carefully selected and trained to provide engaging and supportive companionship. We make sure they are:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Trustworthy</li>
                  <li>Have a valid G2 license</li>
                  <li>Vetted through appropriate background checks</li>
                  <li>Trained in senior companion care</li>
                </ul>
                <p>
                While we don&apos;t provide medical or personal care services, we can refer healthcare providers to our clients for those services.
                </p>
              </div>
            </CardContent>
          </Card>



          <Alert variant="destructive" className="text-red-500 border-red-500">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-md">
              Important Disclaimer: Our services are non-medical companion services only. We do not provide medical care, nursing services, care giving, or personal support services. We also do not provide any legal or financial advice.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}