"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Play, Smartphone, MapPin, Clock, Users, Calendar } from "lucide-react"

interface MonasterySidebarProps {
  monastery: {
    id: string
    name: string
    location: string
    established: string
    type: string
    altitude: string
    upcomingEvents: Array<{
      name: string
      date: string
      description: string
    }>
  }
}

export function MonasterySidebar({ monastery }: MonasterySidebarProps) {
  return (
    <div className="space-y-6">
      {/* Virtual Tour CTA */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center text-primary">
            <Play className="h-5 w-5 mr-2" />
            360° Virtual Tour
          </CardTitle>
          <CardDescription>Immerse yourself in this sacred space from anywhere in the world</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button size="lg" className="w-full">
            <Play className="mr-2 h-5 w-5" />
            Start Virtual Tour
          </Button>

          <Button variant="outline" size="lg" className="w-full bg-transparent">
            <Smartphone className="mr-2 h-5 w-5" />
            View in AR
          </Button>
        </CardContent>
      </Card>

      {/* Key Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Key Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Location</span>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {monastery.location}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Established</span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {monastery.established}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Tradition</span>
            <Badge variant="outline">{monastery.type}</Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Altitude</span>
            <span className="font-medium">{monastery.altitude}</span>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Visit Duration</span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              2-3 hours
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Group Size</span>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Max 15 people
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {monastery.upcomingEvents.map((event, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-sm line-clamp-2">{event.name}</h4>
                <Badge variant="outline" className="text-xs ml-2">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{event.description}</p>
              {index < monastery.upcomingEvents.length - 1 && <Separator />}
            </div>
          ))}

          <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
            View All Events
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Plan Your Visit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <MapPin className="mr-2 h-4 w-4" />
            Get Directions
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <Calendar className="mr-2 h-4 w-4" />
            Add to Itinerary
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <Users className="mr-2 h-4 w-4" />
            Book Guide
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
