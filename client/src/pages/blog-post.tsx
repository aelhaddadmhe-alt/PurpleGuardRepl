import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook,
  BookOpen,
  Calendar,
  Eye
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', slug],
    enabled: !!slug,
  });

  const { data: relatedPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
    enabled: !!post,
    select: (posts) => posts
      .filter(p => p.id !== post?.id && p.category === post?.category)
      .slice(0, 3),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-6 bg-slate-200 rounded w-1/4" />
            <div className="h-12 bg-slate-200 rounded w-3/4" />
            <div className="h-64 bg-slate-200 rounded" />
            <div className="space-y-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-slate-200 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The requested article could not be found.</p>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const categoryColors = {
    'Threat Intelligence': 'bg-primary-100 text-primary-800',
    'Compliance': 'bg-secondary-100 text-secondary-800',
    'Best Practices': 'bg-purple-100 text-purple-800',
    'default': 'bg-slate-100 text-slate-800'
  };

  const badgeColor = categoryColors[post.category as keyof typeof categoryColors] || categoryColors.default;

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Blog</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-900 font-medium">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Badge className={`${badgeColor} hover:${badgeColor}`}>
                {post.category}
              </Badge>
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              {post.readTime && (
                <>
                  <span className="text-slate-400">•</span>
                  <div className="flex items-center space-x-1 text-slate-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </>
              )}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          </div>

          {/* Author and Share */}
          <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-b border-slate-200">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <div className="font-medium text-slate-900">
                  {post.author?.firstName && post.author?.lastName
                    ? `${post.author.firstName} ${post.author.lastName}`
                    : 'CyberShield Pro Team'}
                </div>
                <div className="text-sm text-slate-600">
                  Security Expert • Published {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate-600 flex items-center mr-2">
                <Share2 className="h-4 w-4 mr-1" />
                Share:
              </span>
              <a 
                href={shareLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href={shareLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={shareLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            {/* Since we don't have a rich text editor, we'll display the content as paragraphs */}
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-6 text-slate-700 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Article Footer */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Strengthen Your Security Posture
                </h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Ready to implement the security practices discussed in this article? 
                  Our experts can help you build a comprehensive security strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>
                    Get Free Security Assessment
                  </Button>
                  <Button variant="outline">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Articles</h2>
              <p className="text-xl text-slate-600">
                Continue reading about {post.category.toLowerCase()}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" onClick={() => window.history.back()}>
                View All Articles
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
