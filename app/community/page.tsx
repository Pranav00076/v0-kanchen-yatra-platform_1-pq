import { Suspense } from "react"
import { CommunityHeader } from "@/components/community/community-header"
import { CommunityTabs } from "@/components/community/community-tabs"
import { LiveQASection } from "@/components/community/live-qa-section"
import { ForumSection } from "@/components/community/forum-section"
import { UserContentSection } from "@/components/community/user-content-section"
import { CommunityStats } from "@/components/community/community-stats"

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <CommunityHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <CommunityTabs />

            <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
              <LiveQASection />
            </Suspense>

            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <ForumSection />
            </Suspense>

            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <UserContentSection />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CommunityStats />
          </div>
        </div>
      </div>
    </main>
  )
}
