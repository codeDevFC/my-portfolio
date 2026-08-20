import { cn } from "@/lib/utils";

interface ChipContainerProps {
  textArr: string[];
  className?: string;
}

export default function ChipContainer({ textArr, className }: ChipContainerProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {textArr.map((it) => (
        <span key={it} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
          {it}
        </span>
      ))}
    </div>
  );
}
