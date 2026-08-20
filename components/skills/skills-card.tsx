import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsCardProps {
  skills: Record<string, string[]>;
  className?: string;
}

export default function SkillsCard({ skills, className }: SkillsCardProps) {
  if (!skills || typeof skills !== 'object' || Object.keys(skills).length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No skills to display
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(skills).map(([category, skillList]) => {
        const safeSkillList = Array.isArray(skillList) ? skillList : [];
        const displayName = category
          .replace(/([A-Z])/g, ' $1')
          .trim()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return (
          <Card key={category} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {displayName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {safeSkillList.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-normal px-2.5 py-0.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
