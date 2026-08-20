"use client";

import { Experience } from "@/types/experience";
import { cn } from "@/lib/utils";

interface TimelineProps {
  experiences: Experience[];
  className?: string;
}

export default function Timeline({ experiences, className }: TimelineProps) {
  const sortedExperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <div className={cn("space-y-6", className)}>
      {sortedExperiences.map((experience) => (
        <div key={experience.id || experience.title} className="relative pl-6 pb-6 last:pb-0 border-l border-border">
          <div className="absolute left-[-6px] top-0 h-3 w-3 rounded-full bg-primary" />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p className="text-sm text-muted-foreground">
              {experience.company} • {experience.location}
            </p>
            <p className="text-sm text-muted-foreground">
              {experience.startDate} - {experience.endDate}
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              {experience.description.map((item, index) => (
                <li key={`${experience.id || experience.title}-desc-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
