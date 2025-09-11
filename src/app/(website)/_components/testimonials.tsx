import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Professional Trader",
    avatar: "/professional-woman-trader.jpg",
    content:
      "Universify's AI predictions have increased my trading accuracy by 40%. The platform is intuitive and the insights are incredibly valuable.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Crypto Investor",
    avatar: "/professional-investor.png",
    content:
      "The automated trading features saved me countless hours while generating consistent returns. Best crypto platform I've used.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Portfolio Manager",
    avatar: "/professional-woman-portfolio-manager.jpg",
    content:
      "The analytics and risk management tools are top-notch. Universify has become an essential part of my trading strategy.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index.toString()}
          className="border-border/50 bg-card/50 backdrop-blur-sm"
        >
          <CardContent className="p-6">
            <div className="mb-4 flex items-center space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i.toString()}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>
            <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
              "{testimonial.content}"
            </p>
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                />
                <AvatarFallback>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-card-foreground text-sm">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Testimonials;
