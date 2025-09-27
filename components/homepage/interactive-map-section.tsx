"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPin, Eye, Star, Clock, Camera, Navigation } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { PanoramaViewer } from "@/components/virtual-tour/panorama-viewer"

const monasteries = [
  {
    id: 1,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    image: "/pemayangtse-monastery-sikkim.jpg",
    description: "One of the oldest and most important monasteries in Sikkim",
    rating: 4.9,
    visitDuration: "2-3 hours",
    type: "Nyingma",
    coordinates: { lat: 27.3389, lng: 88.2096 },
  },
  {
    id: 2,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    image: "/rumtek-monastery-sikkim.jpg",
    description: "The seat of the Karmapa lineage",
    rating: 4.8,
    visitDuration: "2 hours",
    type: "Kagyu",
    coordinates: { lat: 27.3389, lng: 88.5583 },
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    image: "/tashiding-monastery-sikkim.jpg",
    description: "Sacred hilltop monastery with panoramic views",
    rating: 4.7,
    visitDuration: "1-2 hours",
    type: "Nyingma",
    coordinates: { lat: 27.3389, lng: 88.2096 },
  },
  {
    id: 4,
    name: "Enchey Monastery",
    location: "Gangtok",
    image: "/enchey-monastery-gangtok.jpg",
    description: "Beautiful monastery overlooking Gangtok city",
    rating: 4.6,
    visitDuration: "1 hour",
    type: "Nyingma",
    coordinates: { lat: 27.3389, lng: 88.6138 },
  },
  {
    id: 5,
    name: "Dubdi Monastery",
    location: "Yuksom",
    image: "/dubdi-monastery-yuksom.jpg",
    description: "The first monastery built in Sikkim",
    rating: 4.5,
    visitDuration: "1-2 hours",
    type: "Nyingma",
    coordinates: { lat: 27.3389, lng: 88.2096 },
  },
]

export function InteractiveMapSection() {
  const router = useRouter()
  const [selectedMonastery, setSelectedMonastery] = React.useState(monasteries[0])
  const [showPanorama, setShowPanorama] = useState(false)
  const [selectedTour, setSelectedTour] = useState<any>(null)

  const handleViewMonastery = (monasteryId: number) => {
    router.push(`/tours/monastery-${monasteryId}`)
  }

  const handleVirtualTour = (monastery: any) => {
    const tourData = {
      id: monastery.id,
      title: `${monastery.name} Virtual Tour`,
      description: monastery.description,
      image: monastery.image,
      duration: "15 minutes",
      hotspots: 8,
      hasAudio: true,
    }
    setSelectedTour(tourData)
    setShowPanorama(true)
  }

  const handleOpenFullMap = () => {
    router.push("/map")
  }

  return (
    <section id="interactive-map" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Explore Sacred Sites</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Navigate through Sikkim's spiritual landscape with our interactive map and detailed monastery guides
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Interactive Map */}
          <div className="relative">
            <Card className="h-[500px] overflow-hidden">
              <div className="relative h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                {/* Placeholder for actual map */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: "url('/sikkim-map-monasteries.jpg')" }}
                />

                {/* Map Markers */}
                <div className="relative z-10 w-full h-full">
                  {monasteries.map((monastery, index) => (
                    <button
                      key={monastery.id}
                      onClick={() => setSelectedMonastery(monastery)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                        selectedMonastery.id === monastery.id ? "scale-125 z-20" : "hover:scale-110 z-10"
                      }`}
                      style={{
                        left: `${20 + index * 15}%`,
                        top: `${30 + index * 10}%`,
                      }}
                    >
                      <div
                        className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                          selectedMonastery.id === monastery.id
                            ? "bg-primary text-white"
                            : "bg-white text-primary hover:bg-primary hover:text-white"
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                    +
                  </Button>
                  <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                    -
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xs font-medium mb-2">Monastery Types</div>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                      Nyingma
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                      Kagyu
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Monastery List */}
          <div className="space-y-4">
            <ScrollArea className="h-[500px] pr-4">
              {monasteries.map((monastery) => (
                <Card
                  key={monastery.id}
                  className={`mb-4 cursor-pointer transition-all duration-200 hover:shadow-md group ${
                    selectedMonastery.id === monastery.id ? "ring-2 ring-primary shadow-md" : ""
                  }`}
                  onClick={() => setSelectedMonastery(monastery)}
                >
                  <div className="flex">
                    <div className="w-24 h-24 flex-shrink-0 relative overflow-hidden">
                      <img
                        src={monastery.image || "/placeholder.svg"}
                        alt={monastery.name}
                        className="w-full h-full object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-sm line-clamp-1">{monastery.name}</h3>
                        <Badge variant="outline" className="text-xs ml-2">
                          {monastery.type}
                        </Badge>
                      </div>

                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{monastery.description}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {monastery.location}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                          {monastery.rating}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {monastery.visitDuration}
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 text-xs px-2 bg-transparent"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleVirtualTour(monastery)
                            }}
                          >
                            <Camera className="h-3 w-3 mr-1" />
                            360°
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 text-xs px-2 bg-transparent"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleViewMonastery(monastery.id)
                            }}
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </ScrollArea>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" onClick={handleOpenFullMap}>
            <Navigation className="mr-2 h-5 w-5" />
            Open Full Map
          </Button>
        </div>

        {selectedTour && (
          <PanoramaViewer isOpen={showPanorama} onClose={() => setShowPanorama(false)} tour={selectedTour} />
        )}
      </div>
    </section>
  )
}
