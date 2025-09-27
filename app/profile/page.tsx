import { Suspense } from "react"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileTabs } from "@/components/profile/profile-tabs"
import { ProfileStats } from "@/components/profile/profile-stats"
import { RecentActivity } from "@/components/profile/recent-activity"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <ProfileHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileStats />
            <RecentActivity />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <ProfileTabs />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}
