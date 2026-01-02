import { Heart, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ArtisanCardProps {
  artisan: {
    id: string;
    name: string;
    craft: string;
    location: string;
    image: string;
    rating: number;
    followers: number;
    specialization: string;
    featured: boolean;
  };
}

const ArtisanCard = ({ artisan }: ArtisanCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift transition-elegant border-border/50">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={artisan.image}
            alt={artisan.name}
            className="w-full h-full object-cover transition-elegant group-hover:scale-105"
          />
        </div>
        
        {/* Featured Badge */}
        {artisan.featured && (
          <div className="absolute top-3 left-3">
            <span className="gradient-sunset text-white text-xs font-medium px-2 py-1 rounded-full">
              Featured Artisan
            </span>
          </div>
        )}

        {/* Follow Button */}
        <Button
          variant="glass"
          size="icon"
          className="absolute top-3 right-3 text-white border-white/20 hover:bg-white/20"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <MapPin className="h-3 w-3" />
            <span>{artisan.location}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
              {artisan.name}
            </h3>
            <p className="text-muted-foreground text-sm">{artisan.craft}</p>
            <p className="text-foreground/70 text-xs mt-1">{artisan.specialization}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <span>{artisan.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{artisan.followers}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            <Button variant="default" size="sm" className="flex-1">
              View Profile
            </Button>
            <Button variant="outline" size="sm">
              Commission
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtisanCard;