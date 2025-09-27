"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play, MapPin, Calendar } from "lucide-react"
import { PanoramaViewer } from "@/components/virtual-tour/panorama-viewer"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showPanorama, setShowPanorama] = React.useState(false)
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const demoTour = {
    id: 1,
    title: "Pemayangtse Monastery Virtual Tour",
    description: "Explore the ancient three-story monastery with stunning mountain views",
    image: "/pemayangtse-monastery-sikkim.jpg",
    duration: "15 minutes",
    hotspots: 8,
    hasAudio: true,
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/pemayangtse-monastery-sikkim.jpg')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Discover Sacred
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Sikkim
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 text-pretty max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the spiritual heritage of the Himalayas through virtual tours, authentic experiences,
            and cultural preservation
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search monasteries, experiences, or festivals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 pr-4 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full shadow-lg focus:bg-white transition-all"
              />
              <Button
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-8"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
              onClick={() => setShowPanorama(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Start Virtual Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
              onClick={() => {
                const element = document.getElementById("interactive-map")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explore Map
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
              onClick={() => router.push("/booking")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Plan Journey
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">50+</div>
              <div className="text-sm text-gray-300">Sacred Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">360°</div>
              <div className="text-sm text-gray-300">Virtual Tours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">100+</div>
              <div className="text-sm text-gray-300">Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm text-gray-300">Safety Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <PanoramaViewer isOpen={showPanorama} onClose={() => setShowPanorama(false)} tour={demoTour} />
    </section>
  )
}
