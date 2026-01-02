import { useState } from "react";
import { Heart, MessageCircle, Share2, User, Calendar, Bookmark, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CommunityPage = () => {
  const [selectedTab, setSelectedTab] = useState("feed");

  const posts = [
    {
      id: 1,
      author: {
        name: "Meera Sharma",
        avatar: "/placeholder.svg",
        type: "Artisan",
        location: "Rajasthan"
      },
      content: "Just finished this beautiful blue pottery vase! The glazing process took 3 days but the result is absolutely stunning. Each piece tells a story of our ancient craft traditions.",
      image: "/placeholder.svg",
      likes: 234,
      comments: 45,
      shares: 12,
      timeAgo: "2 hours ago",
      tags: ["Blue Pottery", "Jaipur", "Handmade"],
      type: "artisan-update"
    },
    {
      id: 2,
      author: {
        name: "Rohit Patel",
        avatar: "/placeholder.svg",
        type: "Collector",
        location: "Mumbai"
      },
      content: "My latest acquisition - a stunning Madhubani painting from Bihar. The intricate details and vibrant colors are mesmerizing. Supporting our artisans one piece at a time!",
      image: "/placeholder.svg",
      likes: 189,
      comments: 28,
      shares: 8,
      timeAgo: "5 hours ago",
      tags: ["Madhubani", "Art Collection", "Bihar"],
      type: "collector-post"
    },
    {
      id: 3,
      author: {
        name: "Kavya Reddy",
        avatar: "/placeholder.svg",
        type: "Artisan",
        location: "Karnataka"
      },
      content: "Behind the scenes: Weaving magic with traditional silk threads. This Mysore silk saree will take me 2 weeks to complete, but each thread is woven with love and tradition.",
      image: "/placeholder.svg",
      likes: 312,
      comments: 67,
      shares: 23,
      timeAgo: "1 day ago",
      tags: ["Mysore Silk", "Weaving", "Tradition"],
      type: "behind-scenes"
    },
  ];

  const trendingTopics = [
    { name: "Blue Pottery", posts: 156 },
    { name: "Madhubani Art", posts: 234 },
    { name: "Block Printing", posts: 189 },
    { name: "Wood Carving", posts: 145 },
    { name: "Silk Weaving", posts: 198 },
  ];

  const featuredArtisans = [
    {
      name: "Rajesh Kumar",
      craft: "Blue Pottery",
      location: "Jaipur",
      followers: 1200,
      avatar: "/placeholder.svg"
    },
    {
      name: "Priya Devi",
      craft: "Madhubani Painting",
      location: "Bihar",
      followers: 980,
      avatar: "/placeholder.svg"
    },
    {
      name: "Arjun Singh",
      craft: "Wood Carving",
      location: "Kashmir",
      followers: 756,
      avatar: "/placeholder.svg"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Artisan Community
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with artisans, share your collections, and celebrate traditional crafts together
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="feed" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="artisans">Artisans</TabsTrigger>
                <TabsTrigger value="collections">Collections</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {posts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{post.author.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {post.author.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {post.author.location} • {post.timeAgo}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-foreground">{post.content}</p>
                      
                      {post.image && (
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img
                            src={post.image}
                            alt="Post content"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Heart className="h-4 w-4" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Share2 className="h-4 w-4" />
                            {post.shares}
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="artisans" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArtisans.map((artisan, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={artisan.avatar} />
                            <AvatarFallback>{artisan.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{artisan.name}</h3>
                            <p className="text-muted-foreground">{artisan.craft}</p>
                            <p className="text-sm text-muted-foreground">{artisan.location}</p>
                            <p className="text-sm text-primary font-medium">
                              {artisan.followers} followers
                            </p>
                          </div>
                          <Button size="sm">Follow</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="collections">
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">Community collections coming soon!</p>
                </div>
              </TabsContent>

              <TabsContent value="discussions">
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">Discussion forums coming soon!</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trending Topics
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">#{topic.name}</span>
                    <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Quick Actions</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="sm">
                  Share Your Work
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Find Artisans
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Join Discussion
                </Button>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Community Stats</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Active Artisans</span>
                  <span className="font-medium">2,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Collectors</span>
                  <span className="font-medium">8,934</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Posts Today</span>
                  <span className="font-medium">234</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;