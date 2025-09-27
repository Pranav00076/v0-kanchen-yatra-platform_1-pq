import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Share2, Award, MapPin, Calendar } from "lucide-react"

export function ProfileHeader() {
  const user = {
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    avatar: "/woman-traveler.png",
    location: "Mumbai, India",
    joinDate: "March 2023",
    badges: ["Explorer", "Photography Enthusiast", "Cultural Learner"],
    stats: {
      visits: 12,
      experiences: 8,
      stories: 15,
      followers: 47,
    },
  }

  return (
    <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar and Basic Info */}
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-2xl">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {user.joinDate}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {user.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="bg-primary/10 text-primary">
                    <Award className="h-3 w-3 mr-1" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats and Actions */}
          <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">{user.stats.visits}</p>
                <p className="text-sm text-muted-foreground">Monastery Visits</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{user.stats.experiences}</p>
                <p className="text-sm text-muted-foreground">Experiences</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{user.stats.stories}</p>
                <p className="text-sm text-muted-foreground">Stories Shared</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{user.stats.followers}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </Button>
              <Button>
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
