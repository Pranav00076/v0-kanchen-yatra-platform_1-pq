import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Heart, MessageCircle, Camera, Calendar } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "story_liked",
      title: "Your story received 5 new likes",
      description: "Morning Prayers at Enchey Monastery",
      time: "2 hours ago",
      icon: Heart,
      color: "text-red-500",
    },
    {
      id: 2,
      type: "comment_received",
      title: "New comment on your story",
      description: "Amazing photos! Thanks for sharing",
      time: "4 hours ago",
      icon: MessageCircle,
      color: "text-blue-500",
    },
    {
      id: 3,
      type: "story_published",
      title: "Story published successfully",
      description: "Learning Traditional Thangka Art",
      time: "1 day ago",
      icon: Camera,
      color: "text-green-500",
    },
    {
      id: 4,
      type: "booking_confirmed",
      title: "Booking confirmed",
      description: "Photography Masterclass at Rumtek",
      time: "2 days ago",
      icon: Calendar,
      color: "text-purple-500",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-foreground">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
