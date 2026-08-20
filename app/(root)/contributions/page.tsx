import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { featuredContributions } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contributions.metadata.title,
  description: pagesConfig.contributions.metadata.description,
};

export default function ContributionsPage() {
  return (
    <PageContainer
      title={pagesConfig.contributions.title}
      description={pagesConfig.contributions.description}
    >
      <ContributionCard contributions={featuredContributions} />
    </PageContainer>
  );
}
