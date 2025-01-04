import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a range* of companion services designed to enrich quality of life for aging adults while empowering them with independence.
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
        <div className="grid grid-cols-1 pt-6">
            <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">*Not Included</h2>
              <ul className="list-disc pl-6 space-y-2 text-md">
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
          </div>
      </div>
    </div>
  );
}