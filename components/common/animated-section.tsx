"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  key?: string | number;
  id?: string;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  key,
  id,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up": return "translateY(20px)";
      case "down": return "translateY(-20px)";
      case "left": return "translateX(20px)";
      case "right": return "translateX(-20px)";
      default: return "translateY(20px)";
    }
  };

  return (
    <div
      ref={ref}
      key={key}
      id={id}
      className={cn(
        "opacity-0 transition-all duration-700 ease-out",
        className
      )}
      style={{
        transform: getTransform(),
        transitionDelay: `${delay}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
