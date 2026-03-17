import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollEffects } from "@/components/ui/scroll-effects";
import { StickyChatWidget } from "@/components/chat/sticky-chat-widget";
import { siteConfig } from "@/lib/data/site-config";
import { navigationData } from "@/lib/data/navigation";
import { chatMarketData, stickyChatWelcomeHtml } from "@/lib/data/pages/home";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar rating={siteConfig.topBar.rating} phone={siteConfig.topBar.phone} />
      <Header
        logo={siteConfig.logo}
        desktopLinks={navigationData.desktopLinks}
        menuGroups={navigationData.menuGroups}
        menuNeighborhoods={navigationData.menuNeighborhoods}
        menuExtraNeighborhoods={navigationData.menuExtraNeighborhoods}
      />
      <main>{children}</main>
      <Footer
        logo={siteConfig.logo}
        contact={siteConfig.contact}
        socialLinks={siteConfig.socialLinks}
        footerColumns={navigationData.footerColumns}
        newsletter={siteConfig.newsletter}
      />
      <ScrollEffects />
      <StickyChatWidget welcomeHtml={stickyChatWelcomeHtml} marketData={chatMarketData} />
    </>
  );
}
