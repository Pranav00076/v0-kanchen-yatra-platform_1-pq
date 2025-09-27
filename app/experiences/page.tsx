import { Suspense } from "react"
import { ExperiencesHeader } from "@/components/experiences/experiences-header"
import { ExperienceCategories } from "@/components/experiences/experience-categories"
import { FeaturedExperiences } from "@/components/experiences/featured-experiences"
import { ExperienceFilters } from "@/components/experiences/experience-filters"
import { ExperienceGrid } from "@/components/experiences/experience-grid"

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ExperiencesHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ExperienceFilters />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <ExperienceCategories />

            <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
              <FeaturedExperiences />
            </Suspense>

            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <ExperienceGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}
