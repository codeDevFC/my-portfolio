import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { getFeaturedBlogs } from "@/lib/blogs";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img1.jpg";

export const metadata: Metadata = {
  title: `Felix Cobbinah | Frontend Engineer & Digital Shepherd`,
  description: "Felix Cobbinah - Frontend Engineer with a pastoral heart. Building human-centered digital experiences with React, TypeScript, and empathy.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const featuredBlogs = getFeaturedBlogs();
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Frontend Engineer | Digital Shepherd",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section - Your Digital Shepherd Story */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Profile Image with Ring */}
            <AnimatedText delay={0.1}>
              <div className="relative mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/30 rounded-full blur opacity-30" />
                <Image
                  src={profileImg}
                  height={180}
                  width={180}
                  className="relative rounded-full border-4 border-primary/20 shadow-2xl"
                  alt="Felix Cobbinah - Frontend Engineer"
                  priority
                />
              </div>
            </AnimatedText>

            {/* Name */}
            <AnimatedText
              as="h1"
              delay={0.2}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="gradient-text">Felix Cobbinah</span>
            </AnimatedText>

            {/* Title */}
            <AnimatedText
              as="h2"
              delay={0.3}
              className="mt-2 text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground"
            >
              Frontend Engineer <span className="text-primary">|</span> Digital Shepherd
            </AnimatedText>

            {/* Description */}
            <AnimatedText delay={0.4}>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Turning complex code into <span className="text-foreground font-medium">human experiences</span> with a pastoral heart.
                Building with <span className="text-foreground font-medium">React, TypeScript,</span> and <span className="text-foreground font-medium">empathy</span>.
              </p>
            </AnimatedText>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedText delay={0.5}>
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                  )}
                >
                  <Icons.star className="w-4 h-4 mr-2" />
                  View My Work
                </Link>
              </AnimatedText>
              <AnimatedText delay={0.6}>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-primary/20 hover:border-primary/40"
                  )}
                >
                  <Icons.contact className="w-4 h-4 mr-2" />
                  Let's Connect
                </Link>
              </AnimatedText>
            </div>

            {/* Scroll indicator */}
            <AnimatedText delay={0.7}>
              <div className="mt-12 flex flex-col items-center gap-2 text-muted-foreground/60 text-sm">
                <span>Scroll to explore</span>
                <Icons.chevronDown className="h-5 w-5 animate-bounce" />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted/50 py-16 my-8 rounded-2xl"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-4xl font-bold"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant="outline" className="rounded-full px-6">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Projects
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-16 my-8"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-4xl font-bold"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant="outline" className="rounded-full px-6">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Experience
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted/50 py-16 my-8 rounded-2xl"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-4xl font-bold"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant="outline" className="rounded-full px-6">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Skills
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* Contributions Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-16 my-8"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-4xl font-bold"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <ContributionCard contributions={featuredContributions} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant="outline" className="rounded-full px-6">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Contributions
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* Blogs Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted/50 py-16 my-8 rounded-2xl"
        id="blogs"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-4xl font-bold"
          >
            {pagesConfig.blogs.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg"
          >
            {pagesConfig.blogs.description}
          </AnimatedText>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBlogs.map((blog, index) => (
            <AnimatedSection
              key={blog.slug}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full"
            >
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/blogs">
            <Button variant="outline" className="rounded-full px-6">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Blog Posts
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
