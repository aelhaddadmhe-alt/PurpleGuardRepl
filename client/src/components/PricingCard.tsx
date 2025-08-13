import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  enterprise?: boolean;
}

export default function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  buttonText, 
  popular = false,
  enterprise = false 
}: PricingCardProps) {
  return (
    <Card className={`relative ${popular ? 'border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50' : 'border border-slate-200'} hover:shadow-lg transition-shadow`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
          <div className="text-4xl font-bold text-slate-900 mb-1">
            {price.startsWith('$') || price === 'Custom pricing' ? price : `$${price}`}
            {!price.includes('Custom') && <span className="text-lg text-slate-500 font-normal">/month</span>}
          </div>
          <p className="text-slate-600">{description}</p>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-secondary-500 mr-3" />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        {enterprise ? (
          <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
            {buttonText}
          </Button>
        ) : popular ? (
          <Button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-lg">
            {buttonText}
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
