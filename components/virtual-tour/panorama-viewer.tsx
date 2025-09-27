"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, RotateCcw, ZoomIn, ZoomOut, Volume2, VolumeX, Info, Maximize2 } from "lucide-react"

interface PanoramaViewerProps {
  isOpen: boolean
  onClose: () => void
  tour: {
    id: number
    title: string
    description: string
    image: string
    duration: string
    hotspots: number
    hasAudio: boolean
  }
}

export function PanoramaViewer({ isOpen, onClose, tour }: PanoramaViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [zoom, setZoom] = useState(1)
  const [rotationAngle, setRotationAngle] = useState(0)
  const [verticalOffset, setVerticalOffset] = useState(0)
  const [isAudioEnabled, setIsAudioEnabled] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [lastRotation, setLastRotation] = useState(0)
  const [lastVerticalOffset, setLastVerticalOffset] = useState(0)
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const panoramaUrl = "/pemayangtse-monastery-panorama.jpg"

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      setZoom(1)
      setRotationAngle(0)
      setVerticalOffset(0)
      setLastRotation(0)
      setLastVerticalOffset(0)
      // Simulate loading time
      const timer = setTimeout(() => setIsLoading(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
    setLastRotation(rotationAngle)
    setLastVerticalOffset(verticalOffset)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const deltaX = e.clientX - dragStart.x
    const deltaY = e.clientY - dragStart.y

    const containerWidth = containerRef.current.offsetWidth
    const rotationSensitivity = 360 / containerWidth
    const newRotation = lastRotation + deltaX * rotationSensitivity
    const normalizedRotation = ((newRotation % 360) + 360) % 360

    const verticalSensitivity = 0.3
    const newVerticalOffset = Math.max(-50, Math.min(50, lastVerticalOffset + deltaY * verticalSensitivity))

    setRotationAngle(normalizedRotation)
    setVerticalOffset(newVerticalOffset)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setDragStart({ x: touch.clientX, y: touch.clientY })
    setLastRotation(rotationAngle)
    setLastVerticalOffset(verticalOffset)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()

    const touch = e.touches[0]
    const deltaX = touch.clientX - dragStart.x
    const deltaY = touch.clientY - dragStart.y

    const containerWidth = containerRef.current.offsetWidth
    const rotationSensitivity = 360 / containerWidth
    const newRotation = lastRotation + deltaX * rotationSensitivity
    const normalizedRotation = ((newRotation % 360) + 360) % 360

    const verticalSensitivity = 0.3
    const newVerticalOffset = Math.max(-50, Math.min(50, lastVerticalOffset + deltaY * verticalSensitivity))

    setRotationAngle(normalizedRotation)
    setVerticalOffset(newVerticalOffset)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5))
  const handleReset = () => {
    setZoom(1)
    setRotationAngle(0)
    setVerticalOffset(0)
    setLastRotation(0)
    setLastVerticalOffset(0)
  }

  const calculateTranslateX = () => {
    const translatePercentage = (rotationAngle / 360) * 100
    return -translatePercentage
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="absolute top-0 left-0 right-0 z-20 bg-black/80 text-white p-4 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <DialogTitle className="text-xl">{tour.title}</DialogTitle>
            <Badge className="bg-red-500 text-white">360°</Badge>
            {tour.hasAudio && (
              <Badge variant="outline" className="border-white/30 text-white">
                Audio Guide
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>

        {isLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-lg">Loading 360° Experience...</p>
              <p className="text-sm text-white/70 mt-2">Preparing immersive view</p>
            </div>
          </div>
        )}

        <div
          ref={containerRef}
          className="relative w-full h-full bg-black overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            ref={imageRef}
            src={panoramaUrl || "/placeholder.svg"}
            alt={tour.title}
            className={`h-full object-cover transition-transform duration-75 select-none user-select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              width: `${500 * zoom}%`,
              transform: `translateX(${calculateTranslateX()}%) translateY(${verticalOffset}px) scale(${zoom})`,
              transformOrigin: "left center",
            }}
            onLoad={() => setIsLoading(false)}
            draggable={false}
          />

          <div className="absolute top-1/3 z-10" style={{ left: `${25 + ((rotationAngle * 0.1) % 100)}%` }}>
            <div className="relative">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
              </div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                Prayer Hall
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 z-10" style={{ right: `${33 - ((rotationAngle * 0.08) % 100)}%` }}>
            <div className="relative">
              <div className="w-4 h-4 bg-secondary rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform">
                <div className="absolute inset-0 bg-secondary rounded-full animate-ping"></div>
              </div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                Sacred Artifacts
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/3 z-10" style={{ left: `${50 + ((rotationAngle * 0.05) % 100)}%` }}>
            <div className="relative">
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform">
                <div className="absolute inset-0 bg-accent rounded-full animate-ping"></div>
              </div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                Mountain View
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/80 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleZoomOut} className="text-white hover:bg-white/20">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleZoomIn} className="text-white hover:bg-white/20">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleReset} className="text-white hover:bg-white/20">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <div className="text-sm">Zoom: {Math.round(zoom * 100)}%</div>
              <div className="text-sm">Rotation: {Math.round(rotationAngle)}°</div>
            </div>

            <div className="flex items-center space-x-4">
              {tour.hasAudio && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                  className="text-white hover:bg-white/20"
                >
                  {isAudioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowInfo(!showInfo)}
                className="text-white hover:bg-white/20"
              >
                <Info className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {showInfo && (
            <div className="mt-4 p-4 bg-white/10 rounded-lg">
              <h3 className="font-semibold mb-2">{tour.title}</h3>
              <p className="text-sm text-white/80 mb-2">{tour.description}</p>
              <div className="flex items-center space-x-4 text-sm text-white/70">
                <span>Duration: {tour.duration}</span>
                <span>Hotspots: {tour.hotspots}</span>
                <span>Drag horizontally for 360° rotation • Drag vertically to tilt • Use controls to zoom</span>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
