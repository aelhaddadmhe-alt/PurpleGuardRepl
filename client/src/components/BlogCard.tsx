import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import type { BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const categoryColors = {
    'Threat Intelligence': 'bg-primary-100 text-primary-800',
    'Compliance': 'bg-secondary-100 text-secondary-800',
    'Best Practices': 'bg-purple-100 text-purple-800',
    'default': 'bg-slate-100 text-slate-800'
  };

  const badgeColor = categoryColors[post.category as keyof typeof categoryColors] || categoryColors.default;

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
        <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
          {post.featuredImage ? (
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-slate-400 text-center">
                <div className="text-4xl mb-2">📄</div>
                <div className="text-sm">Article</div>
              </div>
            </div>
          )}
        </div>
        
        <CardContent className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <Badge className={`${badgeColor} hover:${badgeColor}`}>
              {post.category}
            </Badge>
            <span className="text-slate-500 text-sm">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-slate-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-600" />
              </div>
              <span className="text-slate-700 font-medium text-sm">
                {post.author?.firstName && post.author?.lastName 
                  ? `${post.author.firstName} ${post.author.lastName}`
                  : 'Author'}
              </span>
            </div>
            {post.readTime && (
              <div className="flex items-center text-slate-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
