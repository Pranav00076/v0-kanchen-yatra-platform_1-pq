import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowLeft, Navigation, Layers } from "lucide-react"
import Link from "next/link"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Interactive Map</h1>
                <p className="text-sm text-muted-foreground">Explore all monasteries and sacred sites</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Layers className="h-4 w-4 mr-2" />
                Layers
              </Button>
              <Button variant="outline" size="sm">
                <Navigation className="h-4 w-4 mr-2" />
                My Location
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="h-[calc(100vh-120px)] relative">
        <Card className="h-full m-4 overflow-hidden">
          <div className="relative h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('/sikkim-map-monasteries.jpg')" }}
            />
            <div className="text-center z-10">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">Full Interactive Map</h2>
              <p className="text-muted-foreground mb-4">
                This would be integrated with a mapping service like Google Maps or Mapbox
              </p>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
