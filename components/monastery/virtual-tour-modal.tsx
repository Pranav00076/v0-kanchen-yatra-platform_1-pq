"use client"

import * as React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { X, RotateCcw, ZoomIn, ZoomOut, Volume2, VolumeX, Info, Maximize, Minimize, Navigation } from "lucide-react"

interface VirtualTourModalProps {
  monasteryId: string
}

export function VirtualTourModal({ monasteryId }: VirtualTourModalProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentHotspot, setCurrentHotspot] = React.useState(0)
  const [isAudioEnabled, setIsAudioEnabled] = React.useState(true)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  // Mock hotspots data
  const hotspots = [
    { id: 1, title: "Main Prayer Hall", description: "The heart of the monastery where daily prayers are conducted" },
    { id: 2, title: "Buddha Statue", description: "A magnificent 15-foot golden Buddha statue" },
    { id: 3, title: "Prayer Wheels", description: "Traditional Tibetan prayer wheels containing sacred mantras" },
    { id: 4, title: "Monastery Courtyard", description: "Open space used for ceremonies and gatherings" },
    { id: 5, title: "Mountain View", description: "Breathtaking view of the Kanchenjunga range" },
  ]

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  // Listen for tour start trigger
  React.useEffect(() => {
    const handleTourStart = () => setIsOpen(true)
    window.addEventListener("start-virtual-tour", handleTourStart)
    return () => window.removeEventListener("start-virtual-tour", handleTourStart)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={`p-0 border-0 ${isFullscreen ? "max-w-full w-screen h-screen" : "max-w-6xl w-full h-[80vh]"}`}
      >
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          {/* 360° Viewer */}
          <div className="relative w-full h-full">
            <img
              src="https://i.postimg.cc/Z530pSFX/pemayangste-monastery-in-sikkim-PTRYXG.jpg"
              alt="360° Virtual Tour"
              className="w-full h-full object-cover"
            />

            {/* Interactive Hotspots */}
            {hotspots.map((hotspot, index) => (
              <button
                key={hotspot.id}
                className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
                  currentHotspot === index
                    ? "bg-primary scale-125 animate-pulse"
                    : "bg-white/80 hover:bg-primary hover:scale-110"
                }`}
                style={{
                  left: `${20 + index * 15}%`,
                  top: `${30 + index * 10}%`,
                }}
                onClick={() => setCurrentHotspot(index)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-current rounded-full" />
                </div>
              </button>
            ))}

            {/* Hotspot Info Panel */}
            {currentHotspot !== null && (
              <div className="absolute bottom-20 left-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{hotspots[currentHotspot].title}</h3>
                <p className="text-sm text-gray-300">{hotspots[currentHotspot].description}</p>
              </div>
            )}
          </div>

          {/* Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                >
                  {isAudioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
              </div>

              {/* Center Info */}
              <div className="flex items-center space-x-4">
                <Badge className="bg-red-500 text-white">360° LIVE</Badge>
                <div className="text-white text-sm">
                  Hotspot {currentHotspot + 1} of {hotspots.length}
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Info className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Navigation className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <Progress value={((currentHotspot + 1) / hotspots.length) * 100} className="h-1" />
            </div>
          </div>

          {/* Attribution Footer */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-xs text-white/60">
            Virtual Tour powered by Kanchen Yatra
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
