import { Experience } from "@/types/experience";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/common/icons";

interface ExperienceCardProps {
  experience: Experience;
}

const formatDate = (date: Date | string): string => {
  if (typeof date === 'string') return date;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 hover:border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{experience.title}</CardTitle>
        <div className="flex flex-col gap-0.5">
          <p className="text-sm text-muted-foreground font-medium">
            {experience.company}
          </p>
          <p className="text-xs text-muted-foreground/70">
            {experience.location}
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1 flex items-center gap-1">
            <Icons.calendar className="w-3 h-3" />
            {formatDate(experience.startDate)} — {typeof experience.endDate === 'string' && experience.endDate === 'Present' ? 'Present' : formatDate(experience.endDate)}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1.5">
          {experience.description.slice(0, 3).map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
          {experience.description.length > 3 && (
            <li className="text-sm text-primary/70 font-medium">
              +{experience.description.length - 3} more details
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
