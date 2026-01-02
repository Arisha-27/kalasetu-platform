import { Sparkles, Users, Award, Globe } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";
import ArtisanCard from "@/components/ArtisanCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import potteryImage from "@/assets/artisan-pottery.jpg";
import textileImage from "@/assets/artisan-textiles.jpg";
import jewelryImage from "@/assets/artisan-jewelry.jpg";
import woodworkImage from "@/assets/artisan-woodwork.jpg";

const HomePage = () => {
  // Mock data for featured artisans
  const featuredArtisans = [
    {
      id: "1",
      name: "Ramesh Kumar",
      craft: "Blue Pottery",
      location: "Jaipur, Rajasthan",
      image: potteryImage,
      rating: 4.9,
      followers: 1248,
      specialization: "Traditional Ceramic Art",
      featured: true
    },
    {
      id: "2", 
      name: "Meera Devi",
      craft: "Handloom Weaving",
      location: "Varanasi, UP",
      image: textileImage,
      rating: 4.8,
      followers: 856,
      specialization: "Banarasi Silk Sarees",
      featured: true
    },
    {
      id: "3",
      name: "Arjun Singh", 
      craft: "Silver Jewelry",
      location: "Udaipur, Rajasthan",
      image: jewelryImage,
      rating: 4.9,
      followers: 692,
      specialization: "Kundan & Meenakari",
      featured: false
    },
    {
      id: "4",
      name: "Suresh Pal",
      craft: "Wood Carving", 
      location: "Saharanpur, UP",
      image: woodworkImage,
      rating: 4.7,
      followers: 423,
      specialization: "Intricate Sculptures",
      featured: false
    }
  ];

  // Mock data for featured products
  const featuredProducts = [
    {
      id: "1",
      name: "Hand-painted Blue Pottery Vase",
      price: 2850,
      originalPrice: 3500,
      image: potteryImage,
      artisan: "Ramesh Kumar",
      craft: "Blue Pottery",
      rating: 4.9,
      reviews: 124,
      inStock: true,
      featured: true
    },
    {
      id: "2",
      name: "Pure Silk Banarasi Saree",
      price: 12500,
      originalPrice: 15000,
      image: textileImage,
      artisan: "Meera Devi", 
      craft: "Handloom",
      rating: 4.8,
      reviews: 89,
      inStock: true,
      featured: true
    },
    {
      id: "3",
      name: "Kundan Silver Necklace Set",
      price: 8750,
      image: jewelryImage,
      artisan: "Arjun Singh",
      craft: "Jewelry",
      rating: 4.9,
      reviews: 67,
      inStock: true,
      featured: false
    },
    {
      id: "4", 
      name: "Carved Wooden Elephant",
      price: 1850,
      originalPrice: 2200,
      image: woodworkImage,
      artisan: "Suresh Pal",
      craft: "Wood Carving",
      rating: 4.7,
      reviews: 43,
      inStock: true,
      featured: false
    }
  ];

  const stats = [
    { icon: Users, label: "Artisans", value: "2,500+" },
    { icon: Sparkles, label: "Unique Crafts", value: "50,000+" },
    { icon: Award, label: "Happy Customers", value: "25,000+" },
    { icon: Globe, label: "States Covered", value: "28" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="container mx-auto px-4 py-8">
        <ImageSlider />
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-sunset rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured <span className="text-gradient-sunset">Artisans</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Meet the master craftspeople preserving India's traditional arts and creating 
                extraordinary pieces with generations of inherited skill.
              </p>
            </div>
            <Button variant="outline" size="lg" className="mt-4 md:mt-0">
              View All Artisans
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Handpicked <span className="text-gradient-craft">Treasures</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Discover unique handcrafted items, each with its own story and made with 
                love by skilled artisans across India.
              </p>
            </div>
            <Button variant="default" size="lg" className="mt-4 md:mt-0">
              Explore Collection
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Craft Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore by <span className="text-gradient-sunset">Craft Tradition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the rich diversity of Indian handicrafts, from ancient pottery techniques 
              to intricate textile weaving passed down through generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pottery & Ceramics", image: potteryImage, count: "1,200+ items" },
              { name: "Textiles & Fabrics", image: textileImage, count: "2,800+ items" },
              { name: "Jewelry & Ornaments", image: jewelryImage, count: "1,500+ items" },
              { name: "Wood & Stone Art", image: woodworkImage, count: "950+ items" }
            ].map((category) => (
              <Card key={category.name} className="group overflow-hidden hover-lift cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.count}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-sunset">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community of Craft Lovers
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with artisans, discover new crafts, and become part of a movement 
            that celebrates India's rich artistic heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" className="text-white border-white/20 hover:bg-white/20">
              Become a Member
            </Button>
            <Button variant="golden" size="lg">
              Commission Custom Art
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;