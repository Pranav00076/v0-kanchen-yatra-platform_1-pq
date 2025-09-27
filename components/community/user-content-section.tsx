import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, MapPin, Camera } from "lucide-react"

export function UserContentSection() {
  const userStories = [
    {
      id: 1,
      author: {
        name: "Priya Sharma",
        avatar: "/indian-woman-traveler.jpg",
        location: "Mumbai, India",
      },
      content:
        "The morning prayers at Enchey Monastery were absolutely mesmerizing. The chanting echoed through the valley as the sun rose over the mountains. A truly spiritual experience that I'll never forget.",
      image: "/enchey-monastery-gangtok-sikkim.jpg",
      location: "Enchey Monastery, Gangtok",
      likes: 47,
      comments: 12,
      timeAgo: "3 hours ago",
      tags: ["Spiritual", "Morning Prayers", "Gangtok"],
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        avatar: "/asian-man-photographer.png",
        location: "Singapore",
      },
      content:
        "Captured this incredible shot of the prayer wheels at Rumtek Monastery during golden hour. The intricate details and the way the light hit the brass was magical.",
      image: "/rumtek-monastery-sikkim.jpg",
      location: "Rumtek Monastery",
      likes: 89,
      comments: 23,
      timeAgo: "1 day ago",
      tags: ["Photography", "Golden Hour", "Prayer Wheels"],
    },
    {
      id: 3,
      author: {
        name: "Lisa Anderson",
        avatar: "/blonde-woman-backpacker.jpg",
        location: "California, USA",
      },
      content:
        "Participated in a traditional thangka painting workshop today. The monks were incredibly patient teachers, and I learned so much about Buddhist art and symbolism.",
      image: "/thangka-painting-workshop.jpg",
      location: "Pemayangtse Monastery",
      likes: 34,
      comments: 8,
      timeAgo: "2 days ago",
      tags: ["Workshop", "Thangka", "Art", "Learning"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Traveler Stories</h2>
        <Button variant="outline">
          <Camera className="h-4 w-4 mr-2" />
          Share Your Story
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userStories.map((story) => (
          <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={story.image || "/placeholder.svg"}
                alt={story.location}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-black/50 text-white border-0">
                  <MapPin className="h-3 w-3 mr-1" />
                  {story.location}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={story.author.avatar || "/placeholder.svg"} alt={story.author.name} />
                  <AvatarFallback>
                    {story.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">{story.author.name}</p>
                  <p className="text-xs text-muted-foreground">{story.author.location}</p>
                </div>
                <p className="text-xs text-muted-foreground">{story.timeAgo}</p>
              </div>

              <p className="text-sm text-foreground leading-relaxed">{story.content}</p>

              <div className="flex flex-wrap gap-1">
                {story.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive transition-colors">
                    <Heart className="h-4 w-4" />
                    {story.likes}
                  </button>
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    {story.comments}
                  </button>
                </div>
                <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline">Load More Stories</Button>
      </div>
    </div>
  )
}
