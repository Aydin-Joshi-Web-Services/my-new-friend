'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const services = [
  { id: "technology-support", label: "Technology Support" },
  { id: "health-wellness", label: "Health & Wellness" },
  { id: "active-lifestyle", label: "Active Lifestyle" },
  { id: "vehicle-maintenance", label: "Vehicle Maintenance" },
  { id: "home-services", label: "Home Services" },
  { id: "daily-activities", label: "Daily Activities" },
  { id: "mental-engagement", label: "Mental Engagement" },
  { id: "social-engagement", label: "Social Engagements" },
  { id: "entertainment", label: "Entertainment" },
];

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [visitFrequency, setVisitFrequency] = useState("");

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
      frequency: visitFrequency,
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
        event.currentTarget.reset();
        setSelectedServices([]);
        setVisitFrequency("");
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
            <div className="space-y-6 text-lg">
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Basic Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    name="name"
                    placeholder="Name"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    name="phone"
                    placeholder="(123) 456-7890"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-lg">Location & Schedule</h3>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    required
                    name="postalCode"
                    placeholder="M5V 2T6"
                    pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                    title="Please enter a valid Canadian postal code (e.g., M5V 2T6)"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Preferred Start Date</Label>
                  <Input
                    id="startDate"
                    required
                    type="date"
                    name="startDate"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
  <Label htmlFor="frequency">Visit Frequency</Label>
  <Select 
    value={visitFrequency} 
    onValueChange={setVisitFrequency}
  >
    <SelectTrigger className="bg-white">
      <SelectValue placeholder="Select frequency" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem value="one-time">One Time</SelectItem>
      <SelectItem value="weekly">Weekly</SelectItem>
      <SelectItem value="monthly">Monthly</SelectItem>
      <SelectItem value="custom">Custom Schedule</SelectItem>
    </SelectContent>
  </Select>
</div>
              </div>
              
              <div className="space-y-2">
                <Label>Preferred Contact Method</Label>
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

              <div className="space-y-4">
                <Label className="text-lg">Services Needed (select multiple)</Label>
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

              <div className="space-y-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please share any specific or general information you may have..."
                  rows={4}
                  disabled={loading}
                />
              </div>
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