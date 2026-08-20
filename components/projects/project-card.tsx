import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/common/icons";
import Link from "next/link";

interface Project {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 hover:border-primary/20 group">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">
          {project.link ? (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors group-hover:text-primary"
            >
              {project.title}
              <Icons.externalLink className="inline-block w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ) : (
            project.title
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons.gitHub className="w-4 h-4 mr-1.5" />
            View on GitHub
          </Link>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1.5 pt-0">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 4 && (
          <Badge variant="outline" className="text-xs font-normal">
            +{project.tags.length - 4}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
