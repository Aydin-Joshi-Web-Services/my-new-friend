'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const services = [
  { id: "technology-support", label: "Technology Support" },
  { id: "health-wellness", label: "Health & Wellness" },
  { id: "active-lifestyle", label: "Active Lifestyle" },
  { id: "vehicle-maintenance", label: "Vehicle Maintenance" },
  { id: "home-services", label: "Home Services" },
  { id: "schedule-management", label: "Schedule Management" },
  { id: "mental-engagement", label: "Mental Engagement" },
  { id: "social-engagement", label: "Social Engagements" },
  { id: "entertainment", label: "Entertainment" }
];

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      postalCode: formData.get('postalCode'),
      preferredContact: formData.get('preferredContact'),
      startDate: formData.get('startDate'),
      services: selectedServices,
      message: formData.get('message'),
      subject: 'New Quote Request'
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        console.log(response)
        event.currentTarget.reset();
        setSelectedServices([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container max-w-2xl py-12">
      <Card>
        <CardHeader className="space-y-3">
          <CardTitle>Get a Quote</CardTitle>
          <CardDescription className="text-lg">We will try to get back to you within 1-2 business days.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4 text-lg">
              <Input
                required
                name="name"
                placeholder="Your name"
                disabled={loading}
              />
              <Input
                required
                type="email"
                name="email"
                placeholder="Your email"
                disabled={loading}
              />
              <Input
                required
                type="tel"
                name="phone"
                placeholder="Phone number"
                disabled={loading}
              />
              <Input
                required
                name="postalCode"
                placeholder="Postal code"
                pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                title="Please enter a valid Canadian postal code (e.g., M5V 2T6)"
                disabled={loading}
              />
              
              <div className="space-y-2">
                <Label className="text-lg">Preferred Contact Method</Label>
                <RadioGroup name="preferredContact" defaultValue="email">
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone" />
                      <Label htmlFor="phone">Phone</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Input
                required
                type="date"
                name="startDate"
                placeholder="Preferred start date"
                disabled={loading}
              />
              <div className="space-y-2 py-3">
                <Label className="text-lg">Services Needed (more than one)</Label>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={(checked) => {
                          setSelectedServices(checked
                            ? [...selectedServices, service.id]
                            : selectedServices.filter(id => id !== service.id)
                          );
                        }}
                      />
                      <Label htmlFor={service.id}>{service.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Textarea
                name="message"
                placeholder="Additional details or requirements"
                rows={4}
                disabled={loading}
              />
            </div>

            <Button type="submit" variant="outline" disabled={loading} className="w-full hover:bg-red-400 bg-red-500 text-white">
              {loading ? 'Sending...' : 'Request Quote'}
            </Button>

            {success && (
              <p className="text-green-600 text-center">Quote request sent successfully!</p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}