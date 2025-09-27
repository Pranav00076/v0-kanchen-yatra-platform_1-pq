import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Calendar, Award } from "lucide-react"

export function CommunityHeader() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/gangtok-temples-urban-tour.jpg" alt="Community gathering" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Kanchen Community</h1>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Connect with fellow travelers, share experiences, and learn from local experts about Sikkim's rich monastery
            heritage
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Active Discussions
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Live Q&A Sessions
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Award className="h-4 w-4 mr-2" />
              Expert Guides
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join Discussion
            </Button>
            <Button size="lg" variant="outline">
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
