import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, Users, Clock } from "lucide-react"

export function LiveQASection() {
  const liveSession = {
    title: "Monastery Etiquette and Cultural Practices",
    expert: {
      name: "Lama Tenzin Norbu",
      role: "Senior Monk, Rumtek Monastery",
      avatar: "/lama-tenzin-cultural-guide.jpg",
    },
    participants: 47,
    duration: "45 min",
    status: "live",
  }

  const upcomingSessions = [
    {
      title: "Best Photography Spots in Sikkim Monasteries",
      expert: "Pemba Sherpa",
      time: "Tomorrow, 3:00 PM IST",
      participants: 23,
    },
    {
      title: "Traditional Festival Celebrations",
      expert: "Dr. Karma Lhamo",
      time: "Friday, 5:00 PM IST",
      participants: 31,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Live Q&A Sessions</h2>
        <Button variant="outline">View All Sessions</Button>
      </div>

      {/* Live Session */}
      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="destructive" className="animate-pulse">
                <Video className="h-3 w-3 mr-1" />
                LIVE
              </Badge>
              <CardTitle className="text-lg">{liveSession.title}</CardTitle>
            </div>
            <Button className="bg-destructive hover:bg-destructive/90">Join Live Session</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={liveSession.expert.avatar || "/placeholder.svg"} alt={liveSession.expert.name} />
                <AvatarFallback>LT</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{liveSession.expert.name}</p>
                <p className="text-sm text-muted-foreground">{liveSession.expert.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {liveSession.participants} watching
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {liveSession.duration}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {upcomingSessions.map((session, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">{session.title}</h3>
                <p className="text-sm text-muted-foreground">with {session.expert}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-primary font-medium">{session.time}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    {session.participants} interested
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Set Reminder
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
