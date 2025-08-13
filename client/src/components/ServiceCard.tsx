import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Laptop, BarChart3, Cloud, ClipboardCheck, ShieldQuestion, Search, Users, Brain } from "lucide-react";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'purple';
}

const iconMap = {
  'fas fa-shield-alt': Shield,
  'fas fa-laptop': Laptop,
  'fas fa-chart-line': BarChart3,
  'fas fa-cloud-upload-alt': Cloud,
  'fas fa-clipboard-check': ClipboardCheck,
  'fas fa-user-shield': ShieldQuestion,
  'fas fa-search': Search,
  'fas fa-users': Users,
  'fas fa-brain': Brain,
};

export default function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Shield;
  
  const colorClasses = {
    default: "bg-primary-100 text-primary-600 hover:shadow-lg hover:border-primary-200",
    purple: "bg-purple-100 text-purple-600 hover:shadow-lg hover:border-purple-200"
  };

  const features = Array.isArray(service.features) ? service.features : [];

  return (
    <Card className={`border border-slate-200 hover:shadow-lg transition-all cursor-pointer ${
      variant === 'purple' ? 'border-purple-200' : ''
    }`}>
      <CardContent className="p-8">
        <div className={`w-12 h-12 ${variant === 'purple' ? 'bg-purple-100' : 'bg-primary-100'} rounded-lg flex items-center justify-center mb-6`}>
          <IconComponent className={`h-6 w-6 ${variant === 'purple' ? 'text-purple-600' : 'text-primary-600'}`} />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
        
        {features.length > 0 && (
          <ul className="space-y-1 mb-6 text-sm text-slate-600">
            {features.slice(0, 4).map((feature: string, index: number) => (
              <li key={index} className="flex items-center">
                <div className="w-1 h-1 bg-slate-400 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">
            ${service.monthlyPrice}
            <span className="text-sm text-slate-500 font-normal">/mo</span>
          </span>
          <Link href={`/services/${service.slug}`}>
            <Button variant="ghost" className={`${variant === 'purple' ? 'text-purple-600 hover:text-purple-700' : 'text-primary-600 hover:text-primary-700'} font-semibold`}>
              Learn More →
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
