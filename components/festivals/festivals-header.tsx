import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Sparkles, Users, Camera } from "lucide-react"

export function FestivalsHeader() {
  return (
    <div className="relative bg-gradient-to-r from-orange-100 via-yellow-50 to-red-100 py-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="/buddhist-festival-celebrations.jpg"
          alt="Festival celebrations"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-foreground">Sacred Festivals</h1>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Experience the vibrant colors, ancient rituals, and spiritual celebrations of Sikkim's monastery festivals
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-orange-100 text-orange-800">
              <Calendar className="h-4 w-4 mr-2" />
              Year-round Celebrations
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-yellow-100 text-yellow-800">
              <Users className="h-4 w-4 mr-2" />
              Community Events
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-100 text-red-800">
              <Camera className="h-4 w-4 mr-2" />
              Photography Opportunities
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              View Festival Calendar
            </Button>
            <Button size="lg" variant="outline">
              Plan Your Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
