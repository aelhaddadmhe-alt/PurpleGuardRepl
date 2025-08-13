import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, TrendingUp, BookOpen, Shield, Calendar } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-slate-200 rounded w-1/3" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-48 bg-slate-200 rounded-xl" />
                  <div className="h-6 bg-slate-200 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 rounded w-full" />
                  <div className="h-4 bg-slate-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <BookOpen className="h-6 w-6 text-secondary-400" />
            <Badge className="bg-secondary-100 text-secondary-800 hover:bg-secondary-100">
              Security Insights & Resources
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Ahead of Cyber Threats
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Expert analysis, industry trends, and actionable insights to help you protect your business. 
            From threat intelligence to compliance guidance, we've got you covered.
          </p>
          <div className="flex items-center justify-center space-x-6 text-slate-400">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-secondary-400" />
              <span className="text-sm">Weekly updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-secondary-400" />
              <span className="text-sm">Expert insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-secondary-400" />
              <span className="text-sm">Industry trends</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Filter className="h-4 w-4 text-slate-500 flex-shrink-0" />
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !searchTerm && !selectedCategory && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-100 mb-4">
                Featured Article
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900">Latest Insights</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto">
                  {featuredPost.featuredImage ? (
                    <img 
                      src={featuredPost.featuredImage} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                      <div className="text-primary-600 text-center">
                        <BookOpen className="h-16 w-16 mx-auto mb-4" />
                        <div className="text-lg font-medium">Featured Article</div>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-100">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-slate-500 text-sm">
                      {new Date(featuredPost.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-bold">
                          {featuredPost.author?.firstName?.[0] || 'A'}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          {featuredPost.author?.firstName && featuredPost.author?.lastName
                            ? `${featuredPost.author.firstName} ${featuredPost.author.lastName}`
                            : 'Author'}
                        </div>
                        {featuredPost.readTime && (
                          <div className="text-sm text-slate-500">{featuredPost.readTime} min read</div>
                        )}
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button>Read Article</Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm || selectedCategory ? (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {searchTerm ? `Search Results for "${searchTerm}"` : `${selectedCategory} Articles`}
              </h2>
              <p className="text-slate-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>
          ) : (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">All Articles</h2>
              <p className="text-xl text-slate-600">
                Explore our complete library of security insights and best practices.
              </p>
            </div>
          )}

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || selectedCategory ? filteredPosts : regularPosts).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-slate-300 mx-auto mb-6" />
              <h3 className="text-xl font-medium text-slate-900 mb-4">No Articles Found</h3>
              <p className="text-slate-600 mb-6">
                {searchTerm 
                  ? `No articles match your search for "${searchTerm}"`
                  : `No articles in the ${selectedCategory} category`
                }
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {!searchTerm && !selectedCategory && blogPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-6" />
              <h3 className="text-xl font-medium text-slate-900 mb-4">No Articles Yet</h3>
              <p className="text-slate-600">
                We're working on creating valuable content for you. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Informed About Cyber Threats
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Get weekly security insights, threat alerts, and best practices delivered to your inbox. 
            No spam, just valuable cybersecurity knowledge.
          </p>
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Input placeholder="Enter your email address" type="email" />
                <Button className="w-full">
                  Subscribe to Security Insights
                </Button>
                <p className="text-xs text-slate-500">
                  Join 10,000+ security professionals who trust our insights.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
