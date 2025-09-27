import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Compass, Star, Users, Award } from "lucide-react"

export function ExperiencesHeader() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/thangka-painting-workshop.jpg" alt="Cultural experiences" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Compass className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Authentic Experiences</h1>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Immerse yourself in Sikkim's rich cultural heritage through carefully curated experiences led by local
            experts
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Star className="h-4 w-4 mr-2" />
              Premium Experiences
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Users className="h-4 w-4 mr-2" />
              Small Groups
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Award className="h-4 w-4 mr-2" />
              Expert Guides
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Browse All Experiences
            </Button>
            <Button size="lg" variant="outline">
              Create Custom Experience
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
