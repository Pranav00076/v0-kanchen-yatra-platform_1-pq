import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Edit, Trash2, Eye } from "lucide-react"

export function MyStories() {
  const stories = [
    {
      id: 1,
      title: "Morning Prayers at Enchey Monastery",
      content:
        "The morning prayers at Enchey Monastery were absolutely mesmerizing. The chanting echoed through the valley as the sun rose over the mountains...",
      image: "/enchey-monastery-gangtok-sikkim.jpg",
      location: "Enchey Monastery, Gangtok",
      publishDate: "2024-01-10",
      likes: 47,
      comments: 12,
      views: 234,
      status: "published",
      tags: ["Spiritual", "Morning Prayers", "Gangtok"],
    },
    {
      id: 2,
      title: "Learning Traditional Thangka Art",
      content:
        "Participated in a traditional thangka painting workshop today. The monks were incredibly patient teachers, and I learned so much about Buddhist art...",
      image: "/thangka-painting-workshop.jpg",
      location: "Pemayangtse Monastery",
      publishDate: "2024-01-08",
      likes: 34,
      comments: 8,
      views: 189,
      status: "published",
      tags: ["Workshop", "Thangka", "Art", "Learning"],
    },
    {
      id: 3,
      title: "Sunset Views from Rumtek",
      content:
        "The golden hour at Rumtek Monastery offers some of the most breathtaking views in Sikkim. The way the light hits the prayer wheels is magical...",
      image: "/rumtek-monastery-sikkim.jpg",
      location: "Rumtek Monastery",
      publishDate: "2024-01-05",
      likes: 89,
      comments: 23,
      views: 456,
      status: "published",
      tags: ["Photography", "Golden Hour", "Prayer Wheels"],
    },
    {
      id: 4,
      title: "My First Monastery Trek",
      content:
        "Just completed my first monastery trekking circuit. The journey between the three monasteries was challenging but incredibly rewarding...",
      image: "/dubdi-monastery-yuksom-sikkim.jpg",
      location: "Gangtok Circuit",
      publishDate: "2024-01-03",
      likes: 67,
      comments: 15,
      views: 312,
      status: "draft",
      tags: ["Trekking", "Adventure", "Circuit"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">My Stories</h2>
        <Button>
          <Edit className="h-4 w-4 mr-2" />
          Write New Story
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge className={story.status === "published" ? "bg-green-600" : "bg-yellow-600"}>
                  {story.status.charAt(0).toUpperCase() + story.status.slice(1)}
                </Badge>
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-black/20 hover:bg-black/40">
                  <Edit className="h-4 w-4 text-white" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-black/20 hover:bg-black/40">
                  <Trash2 className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg leading-tight">{story.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{story.location}</span>
                <span>•</span>
                <span>{new Date(story.publishDate).toLocaleDateString()}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{story.content}</p>

              <div className="flex flex-wrap gap-1">
                {story.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {story.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {story.comments}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {story.views}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  View Story
                </Button>
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
