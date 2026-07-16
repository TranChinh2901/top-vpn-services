import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RankingSection from "../components/RankingSection";
import { ComparisonSection, EditorialSection, FaqSection, FooterSection, GuidesSection, MethodologySection, StoriesSection, VoicesSection } from "../components/ContentSections";

export default function Home() {
  return <main id="top"><Header /><HeroSection /><RankingSection /><EditorialSection /><MethodologySection /><ComparisonSection /><GuidesSection /><StoriesSection /><VoicesSection /><FaqSection /><FooterSection /></main>;
}
