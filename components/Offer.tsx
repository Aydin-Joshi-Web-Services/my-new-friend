import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function Offer() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">What We Offer</h1>

        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Companionship Services</h2>
              <div className="space-y-4">
                <p>
                  At My New Friend, we specialize in providing meaningful companionship services
                  that enhance the quality of life for aging adults. Our companions are carefully
                  selected, thoroughly vetted, and trained to provide engaging and supportive
                  companionship that goes beyond basic care.
                </p>
                <p>
                  We understand that each individual has unique needs, interests, and preferences.
                  That&apos;s why we take the time to match our clients with companions who share
                  similar interests and personalities, fostering genuine connections and
                  meaningful relationships.
                </p>
                <p>
                  Our companions provide emotional support, engage in stimulating conversations,
                  and participate in activities that bring joy and purpose to our clients&apos; lives.
                  Whether it&apos;s sharing a hobby, going for a walk, or simply enjoying each other&apos;s
                  company, we&apos;re here to make every day more enjoyable.
                </p>
              </div>
            </CardContent>
          </Card>

          <Alert variant="destructive" className="text-red-500 border-red-500">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-md">
              Important Disclaimer: Our services are non-medical companion services only.
              We do not provide medical care, nursing services, or personal care assistance.
            </AlertDescription>
          </Alert>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">What We Don&apos;t Offer</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Medical care or nursing services</li>
                <li>Personal care assistance (bathing, dressing, toileting)</li>
                <li>Medication administration</li>
                <li>Physical therapy or rehabilitation services</li>
                <li>Heavy housekeeping or home maintenance</li>
                <li>Financial management or legal services</li>
                <li>Emergency medical response services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <div className="space-y-4">
                <p>
                  We are committed to providing safe, reliable, and enriching companionship
                  services that help aging adults maintain their independence and enjoy a
                  high quality of life. Our companions are:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Thoroughly background checked</li>
                  <li>Fully insured</li>
                  <li>Trained in senior companion care</li>
                  <li>CPR and First Aid certified</li>
                  <li>Regularly evaluated and supervised</li>
                </ul>
                <p>
                  While we don&apos;t provide medical or personal care services, we maintain strong
                  relationships with healthcare providers and can help coordinate with other
                  service providers to ensure comprehensive care for our clients.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}