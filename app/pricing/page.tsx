"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { calculatePrice } from "@/lib/pricing";

export default function PricingPage() {
  const [postalCode, setPostalCode] = useState("");
  const [adults, setAdults] = useState(1);
  const [price, setPrice] = useState<number | null>(null);

  const handleCalculatePrice = () => {
    if (!postalCode || adults < 1) {
      toast.error("Please enter a valid postal code and number of adults");
      return;
    }

    const result = calculatePrice(postalCode, adults);
    setPrice(result.totalPrice);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Calculate Your Price</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Price Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Postal Code
              </label>
              <Input
                type="text"
                placeholder="Enter postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="uppercase"
                maxLength={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Number of Adults
              </label>
              <Input
                type="number"
                min="1"
                value={adults}
                onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
              />
            </div>

            <Button 
              onClick={handleCalculatePrice}
              variant="destructive"
              className="w-full"
            >
              Calculate Price
            </Button>

            {price && (
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">
                  Estimated Price: ${price.toFixed(2)}/hour
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  * Additional incidental charges may apply
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}