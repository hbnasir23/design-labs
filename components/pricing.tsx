"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { PaymentModal } from "./payment-modal";
import { text } from "stream/consumers";

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: string;
    stripeLink: string;
  } | null>(null);

  const packages = [

    {
      name: "Silver Package",
      price: "$49.99",
      text: "7 unique logo concepts with free  rush delivery.",
      features: [
        "7 unique logo concepts",
        "free rush delivery",
        "Basic revisions included",
        "Standard formats (PNG, JPEG)",

      ],
      popular: true,
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      stripeLink: "https://buy.stripe.com/7sYeVc8ufc4X5Uy1zu4Ja00",
    },
        {
      name: "Gold Package",
      price: "$89.99",
      text: "12 unique logo concepts with unlimited revisions.",
      features: [
        '12 unique logo concepts',
        'Unlimited revisions',
        'All file formats',
        'Priority support',
        'Brand guidelines'
      ],
      popular: false,
      buttonColor: "bg-slate-600 hover:bg-slate-700",
      stripeLink: "https://buy.stripe.com/6oU6oG6m73yrfv85PK4Ja01", // Replace with your actual Stripe link
    },
    {
      name: "Platinum Package",
      price: "$119.99",
      text: "12 logos + full responsive website.",
      features: [
        '12 unique logo concepts',
        'Full responsive website design',
        'HTML/CSS/JavaScript',
        'Unlimited revisions',
        'All file formats',
        'One year support',
      ],
      popular: false,
      buttonColor: "bg-slate-600 hover:bg-slate-700",
      stripeLink: "https://buy.stripe.com/7sYfZg39V9WP2Imemg4Ja02", // Replace with your actual Stripe link
    },
        {
      name: "Flyer & Business Card Package",
      price: "$47.99",
      text: "Professional flyers and business cards design package.",
      features: [
        "Custom flyer Design",
        "Business card design",
        "Print ready file",
        "3 Revisions included",
        "Standard formats (PNG, JPEG, PDF)",
      ],
      popular: false,
      buttonColor: "bg-slate-600 hover:bg-slate-700",
      stripeLink: "https://buy.stripe.com/7sYeVc8ufc4X5Uy1zu4Ja00",
    },

  ];

  const handleGetStarted = (pkg: (typeof packages)[0]) => {
    setSelectedPackage({
      name: pkg.name,
      price: pkg.price,
      stripeLink: pkg.stripeLink,
    });
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
            We Sell Design
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our Design Packages
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the perfect package for your business needs. All packages
            include professional design and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`bg-slate-800 border-slate-700 relative ${
                pkg.popular ? "ring-2 ring-purple-500" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {pkg.name}
                </h4>
                <div className="text-3xl font-bold text-teal-400">
                  {pkg.price}
                </div>
                <div className="text-md font-semibold text-white mb-2">
                  {pkg.text}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 h-full">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

              </CardContent>
              <CardFooter>
                                <Button
                  className={`w-full ${pkg.buttonColor} text-white font-medium py-2 mt-6`}
                  onClick={() => handleGetStarted(pkg)}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedPackage && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
          stripeLink={selectedPackage.stripeLink}
        />
      )}
    </section>
  );
}
