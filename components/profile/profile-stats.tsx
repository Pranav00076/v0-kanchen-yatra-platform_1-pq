import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Star, TrendingUp } from "lucide-react"

export function ProfileStats() {
  const achievements = [
    {
      title: "Monastery Explorer",
      description: "Visited 10+ monasteries",
      progress: 12,
      target: 15,
      icon: Trophy,
      color: "text-yellow-600",
    },
    {
      title: "Cultural Enthusiast",
      description: "Completed 5+ experiences",
      progress: 8,
      target: 10,
      icon: Target,
      color: "text-blue-600",
    },
    {
      title: "Community Contributor",
      description: "Shared 10+ stories",
      progress: 15,
      target: 20,
      icon: Star,
      color: "text-purple-600",
    },
  ]

  const stats = [
    { label: "Total Visits", value: "12", change: "+2 this month" },
    { label: "Stories Shared", value: "15", change: "+3 this week" },
    { label: "Community Rank", value: "#47", change: "↑ 12 positions" },
    { label: "Experience Rating", value: "4.9", change: "Excellent" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Profile Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                  {stat.change}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="space-y-2">
              <div className="flex items-center gap-2">
                <achievement.icon className={`h-4 w-4 ${achievement.color}`} />
                <span className="font-medium text-foreground text-sm">{achievement.title}</span>
              </div>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
              <div className="space-y-1">
                <Progress value={(achievement.progress / achievement.target) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>
                    {achievement.progress}/{achievement.target}
                  </span>
                  <span>{Math.round((achievement.progress / achievement.target) * 100)}%</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
