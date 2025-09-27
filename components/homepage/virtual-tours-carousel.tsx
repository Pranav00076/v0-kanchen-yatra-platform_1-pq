"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Play, Eye, Clock, Users, VolumeX, Volume2 } from "lucide-react"
import { PanoramaViewer } from "@/components/virtual-tour/panorama-viewer"
import { useRouter } from "next/navigation"

const virtualTours = [
  {
    id: 1,
    title: "Pemayangtse Monastery 360°",
    description: "Explore the three-story monastery with interactive hotspots and historical narration",
    image: "/pemayangtse-monastery-sikkim.jpg",
    duration: "15-20 min",
    hotspots: 12,
    hasAudio: true,
    difficulty: "Easy",
    views: "2.3k",
    type: "Full Tour",
  },
  {
    id: 2,
    title: "Rumtek Monastery Interior",
    description: "Detailed view of the main prayer hall and sacred artifacts",
    image: "/rumtek-monastery-sikkim.jpg",
    duration: "10-12 min",
    hotspots: 8,
    hasAudio: true,
    difficulty: "Easy",
    views: "1.8k",
    type: "Interior Focus",
  },
  {
    id: 3,
    title: "Tashiding Sacred Walk",
    description: "Virtual pilgrimage around the monastery complex with mountain views",
    image: "/tashiding-monastery-sikkim.jpg",
    duration: "18-25 min",
    hotspots: 15,
    hasAudio: true,
    difficulty: "Moderate",
    views: "1.5k",
    type: "Pilgrimage",
  },
  {
    id: 4,
    title: "Enchey Monastery Sunrise",
    description: "Experience the morning prayers and rituals in 360° immersion",
    image: "/enchey-monastery-sunrise-gangtok.jpg",
    duration: "12-15 min",
    hotspots: 6,
    hasAudio: true,
    difficulty: "Easy",
    views: "987",
    type: "Ritual Experience",
  },
  {
    id: 5,
    title: "Dubdi Historical Journey",
    description: "Travel back in time to explore Sikkim's first monastery",
    image: "/dubdi-monastery-historical-yuksom.jpg",
    duration: "20-25 min",
    hotspots: 10,
    hasAudio: true,
    difficulty: "Moderate",
    views: "756",
    type: "Historical",
  },
]

export function VirtualToursCarousel() {
  const [selectedTour, setSelectedTour] = useState<(typeof virtualTours)[0] | null>(null)
  const [isPanoramaOpen, setIsPanoramaOpen] = useState(false)
  const router = useRouter()

  const handleStartTour = (tour: (typeof virtualTours)[0]) => {
    setSelectedTour(tour)
    setIsPanoramaOpen(true)
  }

  const handleViewAllTours = () => {
    router.push("/tours")
  }

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">360° Virtual Tours</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Immerse yourself in sacred spaces through cutting-edge virtual reality experiences
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {virtualTours.map((tour) => (
              <CarouselItem key={tour.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="relative">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        className="rounded-full w-16 h-16 p-0 bg-white/90 text-primary hover:bg-white"
                        onClick={() => handleStartTour(tour)}
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge className="bg-red-500 text-white text-xs">360°</Badge>
                      <Badge variant="outline" className="bg-black/50 text-white border-white/30 text-xs">
                        {tour.type}
                      </Badge>
                    </div>

                    {/* Audio indicator */}
                    <div className="absolute top-3 right-3">
                      {tour.hasAudio ? (
                        <Volume2 className="h-5 w-5 text-white" />
                      ) : (
                        <VolumeX className="h-5 w-5 text-white/60" />
                      )}
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">{tour.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{tour.description}</p>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {tour.views} views
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-1 flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        {tour.hotspots} hotspots
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {tour.difficulty}
                      </div>
                    </div>

                    <Button className="w-full" onClick={() => handleStartTour(tour)}>
                      <Play className="mr-2 h-4 w-4" />
                      Start Virtual Tour
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={handleViewAllTours}>
            View All Virtual Tours
          </Button>
        </div>
      </div>

      {/* Panorama viewer modal */}
      {selectedTour && (
        <PanoramaViewer isOpen={isPanoramaOpen} onClose={() => setIsPanoramaOpen(false)} tour={selectedTour} />
      )}
    </section>
  )
}
