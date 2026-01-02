import { useState } from "react";
import { Search, Filter, MapPin, Star, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import ArtisanCard from "@/components/ArtisanCard";
import potteryImage from "@/assets/artisan-pottery.jpg";
import textileImage from "@/assets/artisan-textiles.jpg";
import jewelryImage from "@/assets/artisan-jewelry.jpg";
import woodworkImage from "@/assets/artisan-woodwork.jpg";

const ArtisansPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCraft, setSelectedCraft] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock data for artisans
  const artisans = [
    {
      id: "1",
      name: "Ramesh Kumar",
      craft: "Blue Pottery",
      location: "Jaipur, Rajasthan",
      image: potteryImage,
      rating: 4.9,
      followers: 1248,
      specialization: "Traditional Ceramic Art & Glazing",
      featured: true,
      bio: "Third-generation potter specializing in the ancient art of blue pottery, known for its distinctive cobalt blue dye and intricate Persian-influenced patterns."
    },
    {
      id: "2",
      name: "Meera Devi",
      craft: "Handloom Weaving",
      location: "Varanasi, Uttar Pradesh",
      image: textileImage,
      rating: 4.8,
      followers: 856,
      specialization: "Banarasi Silk Sarees & Brocade",
      featured: true,
      bio: "Master weaver creating exquisite Banarasi silk sarees with traditional motifs and gold zari work, continuing a family tradition spanning four generations."
    },
    {
      id: "3",
      name: "Arjun Singh",
      craft: "Silver Jewelry",
      location: "Udaipur, Rajasthan",
      image: jewelryImage,
      rating: 4.9,
      followers: 692,
      specialization: "Kundan & Meenakari Work",
      featured: false,
      bio: "Renowned jewelry artisan specializing in Kundan and Meenakari techniques, creating pieces that blend traditional Rajasthani aesthetics with contemporary designs."
    },
    {
      id: "4",
      name: "Suresh Pal",
      craft: "Wood Carving",
      location: "Saharanpur, Uttar Pradesh",
      image: woodworkImage,
      rating: 4.7,
      followers: 423,
      specialization: "Intricate Sculptures & Furniture",
      featured: false,
      bio: "Master woodcarver known for intricate sculptures and furniture pieces, specializing in traditional Indian motifs and contemporary artistic expressions."
    },
    {
      id: "5",
      name: "Kavita Sharma",
      craft: "Block Printing",
      location: "Sanganer, Rajasthan",
      image: textileImage,
      rating: 4.6,
      followers: 567,
      specialization: "Natural Dye Block Printing",
      featured: false,
      bio: "Expert in traditional block printing using natural dyes, creating beautiful textiles with geometric and floral patterns on cotton and silk fabrics."
    },
    {
      id: "6",
      name: "Rajesh Verma",
      craft: "Brass Work",
      location: "Moradabad, Uttar Pradesh",
      image: jewelryImage,
      rating: 4.5,
      followers: 234,
      specialization: "Decorative Brass Items & Utensils",
      featured: false,
      bio: "Skilled brass artisan creating decorative items and traditional utensils using age-old techniques of brass working and engraving."
    }
  ];

  const crafts = ["All Crafts", "Blue Pottery", "Handloom Weaving", "Silver Jewelry", "Wood Carving", "Block Printing", "Brass Work"];
  const states = ["All States", "Rajasthan", "Uttar Pradesh", "West Bengal", "Gujarat", "Karnataka", "Tamil Nadu"];

  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artisan.craft.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artisan.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCraft = !selectedCraft || selectedCraft === "All Crafts" || artisan.craft === selectedCraft;
    const matchesState = !selectedState || selectedState === "All States" || artisan.location.includes(selectedState);
    
    return matchesSearch && matchesCraft && matchesState;
  });

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-gradient-sunset">Master Artisans</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover talented craftspeople from across India, each preserving centuries-old traditions 
            while creating contemporary masterpieces. Connect, commission, and support their incredible work.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search artisans by name, craft, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedCraft} onValueChange={setSelectedCraft}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Select Craft" />
                  </SelectTrigger>
                  <SelectContent>
                    {crafts.map(craft => (
                      <SelectItem key={craft} value={craft}>{craft}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button variant="outline" size="default">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>

            {/* View Toggle and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 pt-6 border-t border-border/20">
              <p className="text-muted-foreground mb-4 sm:mb-0">
                Showing {filteredArtisans.length} artisan{filteredArtisans.length !== 1 ? 's' : ''}
              </p>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground mr-2">View:</span>
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Artisans Grid/List */}
      <section className="container mx-auto px-4 mb-16">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredArtisans.map((artisan) => (
              <Card key={artisan.id} className="hover-lift transition-elegant">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{artisan.name}</h3>
                          <p className="text-primary font-medium">{artisan.craft}</p>
                          <div className="flex items-center space-x-1 text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3" />
                            <span className="text-sm">{artisan.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="font-medium">{artisan.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{artisan.followers} followers</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground font-medium">{artisan.specialization}</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{artisan.bio}</p>
                      
                      <div className="flex space-x-3 pt-2">
                        <Button variant="default" size="sm">View Profile</Button>
                        <Button variant="outline" size="sm">Commission Work</Button>
                        <Button variant="ghost" size="sm">Follow</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredArtisans.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No artisans found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Try adjusting your search criteria or explore our featured artisans.
            </p>
            <Button variant="default" size="lg" className="mt-6" onClick={() => {
              setSearchQuery("");
              setSelectedCraft("");
              setSelectedState("");
            }}>
              Clear All Filters
            </Button>
          </div>
        )}
      </section>

      {/* Featured Section */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Become a <span className="text-gradient-craft">Featured Artisan</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our platform and showcase your crafts to thousands of art lovers. 
            Get the recognition you deserve and build a sustainable livelihood.
          </p>
          <Button variant="hero" size="lg">
            Apply to Join
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ArtisansPage;