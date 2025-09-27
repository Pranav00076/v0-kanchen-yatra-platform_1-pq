import { Suspense } from "react"
import { FestivalsHeader } from "@/components/festivals/festivals-header"
import { FestivalCalendar } from "@/components/festivals/festival-calendar"
import { UpcomingFestivals } from "@/components/festivals/upcoming-festivals"
import { FestivalGuide } from "@/components/festivals/festival-guide"
import { FestivalTraditions } from "@/components/festivals/festival-traditions"

export default function FestivalsPage() {
  return (
    <main className="min-h-screen bg-background">
      <FestivalsHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <FestivalCalendar />
            </Suspense>

            <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
              <UpcomingFestivals />
            </Suspense>

            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <FestivalTraditions />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FestivalGuide />
          </div>
        </div>
      </div>
    </main>
  )
}
