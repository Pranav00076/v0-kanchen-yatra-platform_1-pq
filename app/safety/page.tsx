import { Suspense } from "react"
import { SafetyHeader } from "@/components/safety/safety-header"
import { SafetyCategories } from "@/components/safety/safety-categories"
import { EmergencyContacts } from "@/components/safety/emergency-contacts"
import { SafetyGuidelines } from "@/components/safety/safety-guidelines"
import { WeatherAlerts } from "@/components/safety/weather-alerts"
import { TravelTips } from "@/components/safety/travel-tips"

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SafetyHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Emergency Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <EmergencyContacts />
            <WeatherAlerts />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <SafetyCategories />

            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <SafetyGuidelines />
            </Suspense>

            <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
              <TravelTips />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}
