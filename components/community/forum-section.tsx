import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, ThumbsUp, Clock, Pin } from "lucide-react"

export function ForumSection() {
  const forumTopics = [
    {
      id: 1,
      title: "First time visiting Pemayangtse Monastery - What should I know?",
      author: {
        name: "Sarah Chen",
        avatar: "/woman-traveler.png",
        badge: "New Traveler",
      },
      category: "Monastery Visits",
      replies: 12,
      likes: 8,
      lastActivity: "2 hours ago",
      isPinned: false,
      isAnswered: true,
    },
    {
      id: 2,
      title: "Photography guidelines for monastery interiors",
      author: {
        name: "Rajesh Kumar",
        avatar: "/indian-photographer.jpg",
        badge: "Photography Expert",
      },
      category: "Photography",
      replies: 24,
      likes: 31,
      lastActivity: "4 hours ago",
      isPinned: true,
      isAnswered: true,
    },
    {
      id: 3,
      title: "Best time to visit during Losar festival?",
      author: {
        name: "Emma Thompson",
        avatar: "/western-woman-traveler.jpg",
        badge: "Festival Enthusiast",
      },
      category: "Festivals",
      replies: 7,
      likes: 15,
      lastActivity: "6 hours ago",
      isPinned: false,
      isAnswered: false,
    },
    {
      id: 4,
      title: "Accommodation near Rumtek Monastery recommendations",
      author: {
        name: "David Park",
        avatar: "/asian-man-backpacker.jpg",
        badge: "Budget Traveler",
      },
      category: "Accommodation",
      replies: 18,
      likes: 22,
      lastActivity: "1 day ago",
      isPinned: false,
      isAnswered: true,
    },
  ]

  const categories = [
    { name: "Monastery Visits", count: 45, color: "bg-primary/10 text-primary" },
    { name: "Photography", count: 32, color: "bg-secondary/10 text-secondary" },
    { name: "Festivals", count: 28, color: "bg-accent/10 text-accent" },
    { name: "Accommodation", count: 19, color: "bg-muted text-muted-foreground" },
    { name: "Transportation", count: 15, color: "bg-muted text-muted-foreground" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Community Forum</h2>
        <Button>Start New Discussion</Button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category.name}
            variant="secondary"
            className={`${category.color} cursor-pointer hover:opacity-80`}
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>

      {/* Forum Topics */}
      <div className="space-y-4">
        {forumTopics.map((topic) => (
          <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      {topic.isPinned && <Pin className="h-4 w-4 text-primary" />}
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      {topic.isAnswered && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Answered
                        </Badge>
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {topic.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={topic.author.avatar || "/placeholder.svg"} alt={topic.author.name} />
                      <AvatarFallback>
                        {topic.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium text-foreground">{topic.author.name}</p>
                      <p className="text-muted-foreground">{topic.author.badge}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {topic.replies}
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {topic.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {topic.lastActivity}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline">Load More Discussions</Button>
      </div>
    </div>
  )
}
