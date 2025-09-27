"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Video, Camera, Calendar } from "lucide-react"

export function CommunityTabs() {
  const [activeTab, setActiveTab] = useState("discussions")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-muted/50">
        <TabsTrigger value="discussions" className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Discussions</span>
          <Badge variant="secondary" className="ml-1">
            24
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="live-qa" className="flex items-center gap-2">
          <Video className="h-4 w-4" />
          <span className="hidden sm:inline">Live Q&A</span>
          <Badge variant="destructive" className="ml-1">
            Live
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="stories" className="flex items-center gap-2">
          <Camera className="h-4 w-4" />
          <span className="hidden sm:inline">Stories</span>
          <Badge variant="secondary" className="ml-1">
            156
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="events" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">Events</span>
          <Badge variant="secondary" className="ml-1">
            8
          </Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="discussions" className="mt-6">
        <div className="text-center py-8 text-muted-foreground">Forum discussions will be displayed here</div>
      </TabsContent>

      <TabsContent value="live-qa" className="mt-6">
        <div className="text-center py-8 text-muted-foreground">Live Q&A sessions will be displayed here</div>
      </TabsContent>

      <TabsContent value="stories" className="mt-6">
        <div className="text-center py-8 text-muted-foreground">User stories and photos will be displayed here</div>
      </TabsContent>

      <TabsContent value="events" className="mt-6">
        <div className="text-center py-8 text-muted-foreground">Community events will be displayed here</div>
      </TabsContent>
    </Tabs>
  )
}
