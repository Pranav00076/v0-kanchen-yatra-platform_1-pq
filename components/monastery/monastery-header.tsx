"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, MapPin, Mountain } from "lucide-react"

interface MonasteryHeaderProps {
  monastery: {
    name: string
    location: string
    established: string
    type: string
    altitude: string
    images: string[]
  }
}

export function MonasteryHeader({ monastery }: MonasteryHeaderProps) {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % monastery.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + monastery.images.length) % monastery.images.length)
  }

  return (
    <section className="relative">
      {/* Main Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={monastery.images[selectedImage] || "/placeholder.svg"}
          alt={monastery.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full p-2"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full p-2"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-yellow-500 text-black">{monastery.type}</Badge>
              <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                Est. {monastery.established}
              </Badge>
              <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                <Mountain className="h-3 w-3 mr-1" />
                {monastery.altitude}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{monastery.name}</h1>

            <div className="flex items-center text-lg mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              {monastery.location}
            </div>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              onClick={() => setIsGalleryOpen(true)}
            >
              View Gallery ({monastery.images.length} photos)
            </Button>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="bg-black/90 py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto">
            {monastery.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? "border-white" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${monastery.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Gallery */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
          <div className="relative w-full h-full bg-black">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full p-2"
              onClick={() => setIsGalleryOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <img
              src={monastery.images[selectedImage] || "/placeholder.svg"}
              alt={monastery.name}
              className="w-full h-full object-contain"
            />

            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-semibold">{monastery.name}</p>
              <p className="text-sm opacity-80">
                {selectedImage + 1} of {monastery.images.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
