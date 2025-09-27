"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Eye, Camera, Clock, Star } from "lucide-react"
import { useRouter } from "next/navigation"

const monasteries = [
  {
    id: 1,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    image: "/pemayangtse-monastery-sikkim.jpg",
    description: "One of the oldest and most important monasteries in Sikkim",
    established: "1705",
    type: "Nyingma",
    size: "large",
    altitude: "2,085m",
    visitDuration: "2-3 hours",
    significance: "Royal monastery of the Chogyal dynasty",
    bestTime: "Oct-Dec, Mar-May",
    rating: 4.8,
    reviews: 234,
    highlights: ["Three-story wooden structure", "Ancient murals", "Panoramic valley views"],
  },
  {
    id: 2,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    image: "/rumtek-monastery-sikkim.jpg",
    description: "The seat of the Karmapa lineage",
    established: "1966",
    type: "Kagyu",
    size: "medium",
    altitude: "1,550m",
    visitDuration: "1-2 hours",
    significance: "Seat of the 16th Karmapa",
    bestTime: "Year-round",
    rating: 4.7,
    reviews: 189,
    highlights: ["Golden stupa", "Monastery school", "Traditional architecture"],
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    image: "/tashiding-monastery-sikkim.jpg",
    description: "Sacred hilltop monastery with panoramic views",
    established: "1641",
    type: "Nyingma",
    size: "medium",
    altitude: "1,465m",
    visitDuration: "2-3 hours",
    significance: "Most sacred monastery in Sikkim",
    bestTime: "Oct-Dec, Mar-May",
    rating: 4.9,
    reviews: 156,
    highlights: ["Sacred chorten", "Bumchu festival", "Himalayan views"],
  },
  {
    id: 4,
    name: "Enchey Monastery",
    location: "Gangtok",
    image: "/enchey-monastery-gangtok-sikkim.jpg",
    description: "Beautiful monastery overlooking Gangtok city",
    established: "1909",
    type: "Nyingma",
    size: "small",
    altitude: "1,675m",
    visitDuration: "1 hour",
    significance: "Guardian deity Mahakala",
    bestTime: "Year-round",
    rating: 4.6,
    reviews: 98,
    highlights: ["City views", "Cham dance", "Peaceful gardens"],
  },
  {
    id: 5,
    name: "Dubdi Monastery",
    location: "Yuksom",
    image: "/dubdi-monastery-yuksom-sikkim.jpg",
    description: "The first monastery built in Sikkim",
    established: "1701",
    type: "Nyingma",
    size: "small",
    altitude: "1,780m",
    visitDuration: "1-2 hours",
    significance: "First monastery in Sikkim",
    bestTime: "Oct-Dec, Mar-May",
    rating: 4.5,
    reviews: 67,
    highlights: ["Historical significance", "Forest trek", "Ancient relics"],
  },
  {
    id: 6,
    name: "Phensang Monastery",
    location: "North Sikkim",
    image: "/phensang-monastery-north-sikkim.jpg",
    description: "Remote monastery in the high Himalayas",
    established: "1721",
    type: "Nyingma",
    size: "small",
    altitude: "3,200m",
    visitDuration: "3-4 hours",
    significance: "High-altitude meditation center",
    bestTime: "May-Sep",
    rating: 4.4,
    reviews: 43,
    highlights: ["Alpine location", "Meditation retreats", "Snow peaks"],
  },
]

export function FeaturedMonasteriesGallery() {
  const router = useRouter()

  const handleViewMonastery = (monasteryId: number) => {
    router.push(`/tours/monastery-${monasteryId}`)
  }

  const handleVirtualTour = (monasteryId: number) => {
    router.push(`/tours/monastery-${monasteryId}?tour=360`)
  }

  const handleViewAll = () => {
    router.push("/tours")
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sacred Monasteries of Sikkim</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Explore centuries-old spiritual centers through high-resolution imagery and immersive virtual tours
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {monasteries.map((monastery, index) => (
            <Card
              key={monastery.id}
              className={`group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                index === 0 ? "md:row-span-2" : ""
              } ${index === 2 ? "lg:row-span-2" : ""}`}
              onClick={() => handleViewMonastery(monastery.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={monastery.image || "/placeholder.svg"}
                  alt={monastery.name}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index === 0 ? "h-96 md:h-full" : "h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {monastery.type}
                  </Badge>
                  <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                    Est. {monastery.established}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full p-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleViewMonastery(monastery.id)
                    }}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full p-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleVirtualTour(monastery.id)
                    }}
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 text-balance">{monastery.name}</h3>
                  <div className="flex items-center text-sm mb-2 opacity-90">
                    <MapPin className="h-4 w-4 mr-1" />
                    {monastery.location} • {monastery.altitude}
                  </div>
                  <p className="text-sm opacity-80 line-clamp-2 text-pretty mb-3">{monastery.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-xs opacity-90 mb-3">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {monastery.visitDuration}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {monastery.rating} ({monastery.reviews})
                    </div>
                  </div>

                  <div className="text-xs opacity-75 mb-2">
                    <strong>Best Time:</strong> {monastery.bestTime}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {monastery.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-white/20 text-white border-white/30">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={handleViewAll}>
            View All Monasteries
          </Button>
        </div>
      </div>
    </section>
  )
}
