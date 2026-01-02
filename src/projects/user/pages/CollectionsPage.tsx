import { useState } from "react";
import { Heart, Eye, Share2, Filter, Grid, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CollectionsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Collections" },
    { id: "pottery", name: "Pottery & Ceramics" },
    { id: "textiles", name: "Textiles & Fabrics" },
    { id: "jewelry", name: "Jewelry & Accessories" },
    { id: "art", name: "Paintings & Art" },
    { id: "decor", name: "Home Decor" },
  ];

  const collections = [
    {
      id: 1,
      title: "Royal Rajasthani Heritage",
      description: "A curated collection of traditional Rajasthani crafts including blue pottery, block prints, and miniature paintings.",
      image: "/placeholder.svg",
      itemCount: 24,
      curator: "Kalakriti Team",
      likes: 456,
      views: 2890,
      category: "art",
      featured: true,
      price: "₹2,500 - ₹15,000",
      tags: ["Rajasthan", "Traditional", "Heritage"]
    },
    {
      id: 2,
      title: "Contemporary Pottery Masters",
      description: "Modern interpretations of ancient pottery techniques by India's finest contemporary ceramic artists.",
      image: "/placeholder.svg",
      itemCount: 18,
      curator: "Ceramic Art Society",
      likes: 234,
      views: 1650,
      category: "pottery",
      featured: false,
      price: "₹800 - ₹8,500",
      tags: ["Modern", "Ceramics", "Contemporary"]
    },
    {
      id: 3,
      title: "Handwoven Textiles of India",
      description: "Exquisite handwoven fabrics from different regions showcasing the diversity of Indian textile traditions.",
      image: "/placeholder.svg",
      itemCount: 32,
      curator: "Textile Heritage Foundation",
      likes: 678,
      views: 4320,
      category: "textiles",
      featured: true,
      price: "₹1,200 - ₹25,000",
      tags: ["Handwoven", "Traditional", "Textiles"]
    },
    {
      id: 4,
      title: "Silver Jewelry Treasures",
      description: "Stunning silver jewelry pieces crafted by master artisans from across India.",
      image: "/placeholder.svg",
      itemCount: 15,
      curator: "Silver Craft Guild",
      likes: 389,
      views: 2100,
      category: "jewelry",
      featured: false,
      price: "₹1,500 - ₹12,000",
      tags: ["Silver", "Jewelry", "Handcrafted"]
    },
    {
      id: 5,
      title: "Festive Home Decor",
      description: "Beautiful handcrafted items perfect for decorating your home during Indian festivals.",
      image: "/placeholder.svg",
      itemCount: 28,
      curator: "Festival Decor Co.",
      likes: 512,
      views: 3200,
      category: "decor",
      featured: true,
      price: "₹500 - ₹6,000",
      tags: ["Festival", "Decor", "Celebration"]
    },
    {
      id: 6,
      title: "Miniature Art Collection",
      description: "Intricate miniature paintings showcasing the rich tradition of detailed Indian artwork.",
      image: "/placeholder.svg",
      itemCount: 12,
      curator: "Miniature Art Museum",
      likes: 298,
      views: 1850,
      category: "art",
      featured: false,
      price: "₹3,000 - ₹20,000",
      tags: ["Miniature", "Painting", "Traditional"]
    },
  ];

  const filteredCollections = collections.filter(collection => {
    const matchesSearch = collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         collection.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || collection.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCollections = collections.filter(collection => collection.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Curated Collections
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover thoughtfully curated collections of authentic Indian crafts and traditional art
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-12">
            {/* Featured Collections */}
            {selectedCategory === "all" && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Featured Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredCollections.map((collection) => (
                    <Card key={collection.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img
                          src={collection.image}
                          alt={collection.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 left-3" variant="secondary">
                          Featured
                        </Badge>
                        <Badge className="absolute top-3 right-3" variant="outline">
                          {collection.itemCount} items
                        </Badge>
                      </div>
                      
                      <CardHeader>
                        <h3 className="text-xl font-semibold line-clamp-1">{collection.title}</h3>
                        <p className="text-muted-foreground text-sm">by {collection.curator}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {collection.description}
                        </p>
                        <p className="text-sm font-medium text-primary">{collection.price}</p>
                      </CardHeader>
                      
                      <CardContent className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {collection.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {collection.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {collection.views}
                          </span>
                        </div>
                        <Button size="sm">
                          View Collection
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* All Collections */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory === "all" ? "All Collections" : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-muted-foreground">
                  {filteredCollections.length} collections
                </span>
              </div>
              
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
              }>
                {filteredCollections.map((collection) => (
                  viewMode === "grid" ? (
                    <Card key={collection.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img
                          src={collection.image}
                          alt={collection.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 right-3" variant="outline">
                          {collection.itemCount} items
                        </Badge>
                      </div>
                      
                      <CardHeader>
                        <h3 className="text-xl font-semibold line-clamp-1">{collection.title}</h3>
                        <p className="text-muted-foreground text-sm">by {collection.curator}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {collection.description}
                        </p>
                        <p className="text-sm font-medium text-primary">{collection.price}</p>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex flex-wrap gap-1">
                          {collection.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {collection.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {collection.views}
                          </span>
                        </div>
                        <Button size="sm">View</Button>
                      </CardFooter>
                    </Card>
                  ) : (
                    <Card key={collection.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="w-32 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={collection.image}
                              alt={collection.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-semibold">{collection.title}</h3>
                                <p className="text-sm text-muted-foreground">by {collection.curator}</p>
                              </div>
                              <Button size="sm">View</Button>
                            </div>
                            
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {collection.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {collection.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{collection.itemCount} items</span>
                                <span className="flex items-center gap-1">
                                  <Heart className="h-4 w-4" />
                                  {collection.likes}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                ))}
              </div>
              
              {filteredCollections.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No collections found matching your criteria.</p>
                </div>
              )}
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CollectionsPage;