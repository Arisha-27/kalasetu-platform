import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Star, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WorkshopsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "pottery", name: "Pottery & Ceramics" },
    { id: "textiles", name: "Textiles & Weaving" },
    { id: "jewelry", name: "Jewelry Making" },
    { id: "woodwork", name: "Wood Carving" },
    { id: "painting", name: "Traditional Painting" },
  ];

  const workshops = [
    {
      id: 1,
      title: "Blue Pottery Workshop with Master Artisan",
      instructor: "Rajesh Kumar",
      location: "Jaipur, Rajasthan",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      duration: "6 hours",
      price: 2500,
      participants: 12,
      maxParticipants: 15,
      rating: 4.9,
      category: "pottery",
      image: "/placeholder.svg",
      level: "Beginner",
      description: "Learn the ancient art of blue pottery from Jaipur's master craftsman.",
    },
    {
      id: 2,
      title: "Traditional Ikat Weaving Masterclass",
      instructor: "Priya Devi",
      location: "Online",
      date: "March 20, 2024",
      time: "2:00 PM - 6:00 PM",
      duration: "4 hours",
      price: 1800,
      participants: 8,
      maxParticipants: 20,
      rating: 4.8,
      category: "textiles",
      image: "/placeholder.svg",
      level: "Intermediate",
      description: "Master the intricate techniques of traditional Ikat weaving.",
    },
    {
      id: 3,
      title: "Silver Jewelry Making Workshop",
      instructor: "Arjun Patel",
      location: "Mumbai, Maharashtra",
      date: "March 25, 2024",
      time: "11:00 AM - 5:00 PM",
      duration: "6 hours",
      price: 3200,
      participants: 6,
      maxParticipants: 10,
      rating: 4.9,
      category: "jewelry",
      image: "/placeholder.svg",
      level: "Beginner",
      description: "Create beautiful silver jewelry pieces using traditional techniques.",
    },
  ];

  const filteredWorkshops = workshops.filter(workshop => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workshop.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || workshop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learn from Master Artisans
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join hands-on workshops and master traditional crafts from India's finest artisans
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search workshops..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map((workshop) => (
              <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {workshop.level}
                  </Badge>
                  <Badge className="absolute top-3 right-3" variant="outline">
                    ₹{workshop.price}
                  </Badge>
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-semibold line-clamp-2">{workshop.title}</h3>
                  <p className="text-muted-foreground">by {workshop.instructor}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{workshop.rating}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {workshop.time} ({workshop.duration})
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {workshop.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {workshop.participants}/{workshop.maxParticipants} participants
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {workshop.description}
                  </p>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full">
                    Book Workshop
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredWorkshops.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No workshops found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Workshops?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Artisans</h3>
              <p className="text-muted-foreground">Learn from master craftspeople with generations of experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-muted-foreground">Practical workshops with personalized guidance and support</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Techniques</h3>
              <p className="text-muted-foreground">Traditional methods passed down through generations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;