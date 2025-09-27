"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, MapPin, Clock, Sparkles } from "lucide-react"
import { PanoramaViewer } from "@/components/virtual-tour/panorama-viewer"

const recommendations = [
  {
    id: 1,
    type: "monastery",
    title: "Pemayangtse Monastery",
    description: "Ancient three-story monastery with stunning mountain views",
    image: "/pemayangtse-monastery-sikkim.jpg",
    rating: 4.9,
    location: "West Sikkim",
    duration: "2-3 hours",
    badge: "Most Popular",
  },
  {
    id: 2,
    type: "experience",
    title: "Thangka Painting Workshop",
    description: "Learn traditional Buddhist art from master artists",
    image: "/thangka-painting-workshop.jpg",
    rating: 4.8,
    location: "Gangtok",
    duration: "4 hours",
    badge: "Hands-on",
  },
  {
    id: 3,
    type: "monastery",
    title: "Rumtek Monastery",
    description: "Seat of the Karmapa lineage with rich history",
    image: "/rumtek-monastery-sikkim.jpg",
    rating: 4.9,
    location: "East Sikkim",
    duration: "2 hours",
    badge: "UNESCO Heritage",
  },
  {
    id: 4,
    type: "experience",
    title: "Sikkimese Cooking Class",
    description: "Master authentic local cuisine with local families",
    image: "/sikkimese-cooking-class.jpg",
    rating: 4.7,
    location: "Pelling",
    duration: "3 hours",
    badge: "Community-Run",
  },
  {
    id: 5,
    type: "experience",
    title: "Meditation Retreat",
    description: "Find inner peace in monastery settings",
    image: "/buddhist-meditation-retreat.jpg",
    rating: 4.9,
    location: "Tashiding",
    duration: "Full day",
    badge: "Spiritual",
  },
]

export function RecommendedSection() {
  const router = useRouter()
  const [showPanorama, setShowPanorama] = useState(false)
  const [selectedTour, setSelectedTour] = useState<any>(null)

  const handleItemClick = (item: any) => {
    if (item.type === "monastery") {
      const tourData = {
        id: item.id,
        title: `${item.title} Virtual Tour`,
        description: item.description,
        image: item.image,
        duration: "15 minutes",
        hotspots: 8,
        hasAudio: true,
      }
      setSelectedTour(tourData)
      setShowPanorama(true)
    } else {
      router.push(`/booking?type=experience&id=${item.id}`)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Personalized Suggestions for You</h2>
          </div>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            AI-curated experiences based on your interests and travel preferences
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {recommendations.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-yellow-500 text-black">{item.badge}</Badge>
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {item.rating}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.duration}
                      </div>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline" onClick={() => handleItemClick(item)}>
                      {item.type === "monastery" ? "Start Virtual Tour" : "Book Experience"}
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {selectedTour && (
          <PanoramaViewer isOpen={showPanorama} onClose={() => setShowPanorama(false)} tour={selectedTour} />
        )}
      </div>
    </section>
  )
}
