import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageCircle, Award, TrendingUp } from "lucide-react"

export function CommunityStats() {
  const stats = [
    { label: "Active Members", value: "2,847", icon: Users, change: "+12%" },
    { label: "Discussions", value: "1,234", icon: MessageCircle, change: "+8%" },
    { label: "Expert Guides", value: "47", icon: Award, change: "+3%" },
    { label: "Stories Shared", value: "856", icon: TrendingUp, change: "+15%" },
  ]

  const topContributors = [
    {
      name: "Lama Tenzin",
      role: "Monastery Expert",
      avatar: "/lama-tenzin-cultural-guide.jpg",
      contributions: 89,
      badge: "Expert Guide",
    },
    {
      name: "Pemba Sherpa",
      role: "Photography Guide",
      avatar: "/sherpa-guide.jpg",
      contributions: 67,
      badge: "Photo Expert",
    },
    {
      name: "Dr. Karma Lhamo",
      role: "Cultural Historian",
      avatar: "/tibetan-woman-scholar.jpg",
      contributions: 54,
      badge: "Historian",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Community Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <stat.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">{stat.value}</p>
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
          <CardTitle className="text-lg">Top Contributors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {topContributors.map((contributor, index) => (
            <div key={contributor.name} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {index + 1}
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                <AvatarFallback>
                  {contributor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{contributor.name}</p>
                <p className="text-xs text-muted-foreground">{contributor.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">{contributor.contributions}</p>
                <Badge variant="outline" className="text-xs">
                  {contributor.badge}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-4 text-center space-y-3">
          <Award className="h-8 w-8 text-primary mx-auto" />
          <h3 className="font-semibold text-foreground">Become a Guide</h3>
          <p className="text-sm text-muted-foreground">
            Share your expertise and help fellow travelers discover Sikkim's monasteries
          </p>
          <button className="text-sm text-primary hover:underline font-medium">Apply Now</button>
        </CardContent>
      </Card>
    </div>
  )
}
