import { Blog } from "@/types/blog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/common/icons";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 hover:border-primary/20 group">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold leading-tight">
          <Link href={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors group-hover:text-primary">
            {blog.title}
          </Link>
        </CardTitle>
        <div className="flex items-center gap-3 text-xs text-muted-foreground/70">
          <span className="flex items-center gap-1">
            <Icons.calendar className="w-3 h-3" />
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
          {blog.readingTime && (
            <span className="flex items-center gap-1">
              <Icons.clock className="w-3 h-3" />
              {blog.readingTime} min read
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {blog.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1.5 pt-0">
        {blog.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
