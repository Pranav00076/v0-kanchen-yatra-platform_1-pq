"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { useRouter } from "next/navigation"

const upcomingFestivals = [
  {
    id: 1,
    name: "Losar Festival",
    date: "February 10-12, 2024",
    location: "Rumtek Monastery",
    image: "/losar-festival-rumtek.jpg",
    description: "Tibetan New Year celebration with traditional dances and prayers",
    type: "Religious",
    duration: "3 days",
    attendance: "5000+",
    highlights: ["Cham Dance", "Butter Sculptures", "Traditional Music"],
  },
  {
    id: 2,
    name: "Bumchu Festival",
    date: "March 15, 2024",
    location: "Tashiding Monastery",
    image: "/bumchu-festival-tashiding.jpg",
    description: "Sacred water ceremony predicting the year ahead",
    type: "Sacred Ritual",
    duration: "1 day",
    attendance: "3000+",
    highlights: ["Holy Water Ceremony", "Pilgrimage", "Blessings"],
  },
  {
    id: 3,
    name: "Saga Dawa",
    date: "May 23, 2024",
    location: "Multiple Monasteries",
    image: "/saga-dawa-festival.jpg",
    description: "Celebrating Buddha's birth, enlightenment, and death",
    type: "Buddhist",
    duration: "1 day",
    attendance: "8000+",
    highlights: ["Prayer Flags", "Meditation", "Community Feast"],
  },
]

export function FestivalsEventsSection() {
  const router = useRouter()

  const handleViewFestival = (festivalId: number) => {
    router.push(`/festivals/${festivalId}`)
  }

  const handleViewAllFestivals = () => {
    router.push("/festivals")
  }

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sacred Festivals & Events</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Experience the vibrant spiritual celebrations and cultural festivals of Sikkim's monasteries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingFestivals.map((festival) => (
            <Card
              key={festival.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => handleViewFestival(festival.id)}
            >
              <div className="relative">
                <img
                  src={festival.image || "/placeholder.svg?height=200&width=400&query=Buddhist festival celebration"}
                  alt={festival.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-orange-500 text-white">{festival.type}</Badge>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{festival.name}</h3>
                  <div className="flex items-center text-sm mb-2 opacity-90">
                    <Calendar className="h-4 w-4 mr-1" />
                    {festival.date}
                  </div>
                  <div className="flex items-center text-sm opacity-90">
                    <MapPin className="h-4 w-4 mr-1" />
                    {festival.location}
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{festival.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {festival.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {festival.attendance}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {festival.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={handleViewAllFestivals}>
            View All Festivals & Events
          </Button>
        </div>
      </div>
    </section>
  )
}
