import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/common/icons";
import Link from "next/link";

interface Contribution {
  id: string;
  title: string;
  description: string;
  link?: string;
}

interface ContributionCardProps {
  contributions: Contribution[];
}

export default function ContributionCard({ contributions }: ContributionCardProps) {
  if (!contributions || contributions.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <Card className="border-dashed border-2 border-muted-foreground/20">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No contributions yet. Check back soon!</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const safeContributions = contributions.map((item, index) => ({
    ...item,
    id: item.id || `contribution-${index}`,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {safeContributions.map((contribution) => (
        <Card key={contribution.id} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 hover:border-primary/20 group">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {contribution.link ? (
                <Link href={contribution.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {contribution.title}
                  <Icons.externalLink className="inline-block w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ) : (
                contribution.title
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {contribution.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
