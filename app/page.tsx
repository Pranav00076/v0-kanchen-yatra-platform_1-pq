import { MainNav } from "@/components/navigation/main-nav"
import { MainFooter } from "@/components/footer/main-footer"
import { HeroSection } from "@/components/homepage/hero-section"
import { RecommendedSection } from "@/components/homepage/recommended-section"
import { FeaturedMonasteriesGallery } from "@/components/homepage/featured-monasteries-gallery"
import { LocalExperiencesCarousel } from "@/components/homepage/local-experiences-carousel"
import { InteractiveMapSection } from "@/components/homepage/interactive-map-section"
import { VirtualToursCarousel } from "@/components/homepage/virtual-tours-carousel"
import { FestivalsEventsSection } from "@/components/homepage/festivals-events-section" // Added festivals section
import { BookingCommunityTeasers } from "@/components/homepage/booking-community-teasers"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 overflow-x-hidden">
        {" "}
        {/* Added overflow-x-hidden to prevent horizontal scroll */}
        <HeroSection />
        <RecommendedSection />
        <FeaturedMonasteriesGallery />
        <LocalExperiencesCarousel />
        <InteractiveMapSection />
        <VirtualToursCarousel />
        <FestivalsEventsSection /> {/* Added festivals section */}
        <BookingCommunityTeasers />
      </main>
      <MainFooter />
    </div>
  )
}
