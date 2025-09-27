"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MyBookings } from "./my-bookings"
import { MyStories } from "./my-stories"
import { DigitalLibrary } from "./digital-library"
import { TravelItinerary } from "./travel-itinerary"
import { Badge } from "@/components/ui/badge"
import { Calendar, Camera, BookOpen, Map } from "lucide-react"

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("bookings")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-muted/50">
        <TabsTrigger value="bookings" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">My Bookings</span>
          <Badge variant="secondary" className="ml-1">
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="stories" className="flex items-center gap-2">
          <Camera className="h-4 w-4" />
          <span className="hidden sm:inline">My Stories</span>
          <Badge variant="secondary" className="ml-1">
            15
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="library" className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          <span className="hidden sm:inline">Digital Library</span>
          <Badge variant="secondary" className="ml-1">
            24
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="itinerary" className="flex items-center gap-2">
          <Map className="h-4 w-4" />
          <span className="hidden sm:inline">Itinerary</span>
          <Badge variant="secondary" className="ml-1">
            2
          </Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="bookings" className="mt-6">
        <MyBookings />
      </TabsContent>

      <TabsContent value="stories" className="mt-6">
        <MyStories />
      </TabsContent>

      <TabsContent value="library" className="mt-6">
        <DigitalLibrary />
      </TabsContent>

      <TabsContent value="itinerary" className="mt-6">
        <TravelItinerary />
      </TabsContent>
    </Tabs>
  )
}
