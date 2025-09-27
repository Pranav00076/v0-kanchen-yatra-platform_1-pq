"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Music, Palette, Utensils } from "lucide-react"
import Image from "next/image"

const traditions = {
  dances: [
    {
      name: "Cham Dance",
      description: "Sacred masked dance performed by monks to ward off evil spirits",
      significance: "Spiritual purification and protection",
      image: "/cham-dance-monastery.jpg",
    },
    {
      name: "Yak Dance",
      description: "Traditional folk dance celebrating the highland culture",
      significance: "Cultural heritage and community bonding",
      image: "/yak-dance-sikkim.jpg",
    },
  ],
  music: [
    {
      name: "Tibetan Horns",
      description: "Long ceremonial horns that create deep, resonant sounds",
      significance: "Calling deities and creating sacred atmosphere",
      image: "/tibetan-horns.jpg",
    },
    {
      name: "Prayer Chanting",
      description: "Rhythmic recitation of sacred mantras and prayers",
      significance: "Meditation and spiritual connection",
      image: "/monks-chanting.jpg",
    },
  ],
  art: [
    {
      name: "Butter Sculptures",
      description: "Intricate sculptures made from colored yak butter",
      significance: "Impermanence and artistic devotion",
      image: "/butter-sculptures.jpg",
    },
    {
      name: "Sand Mandalas",
      description: "Detailed geometric patterns created with colored sand",
      significance: "Meditation and cosmic representation",
      image: "/sand-mandala.jpg",
    },
  ],
  food: [
    {
      name: "Tsampa",
      description: "Roasted barley flour mixed with butter tea",
      significance: "Traditional staple food and offering",
      image: "/tsampa-traditional.jpg",
    },
    {
      name: "Momos",
      description: "Steamed dumplings filled with vegetables or meat",
      significance: "Community sharing and celebration",
      image: "/traditional-momos.jpg",
    },
  ],
}

export function FestivalTraditions() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Sparkles className="h-6 w-6 text-primary" />
          Festival Traditions
        </CardTitle>
        <p className="text-muted-foreground">
          Discover the rich cultural heritage and sacred practices of Sikkimese monastery festivals
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="dances" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dances" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Dances</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Music</span>
            </TabsTrigger>
            <TabsTrigger value="art" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Art</span>
            </TabsTrigger>
            <TabsTrigger value="food" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              <span className="hidden sm:inline">Food</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(traditions).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-background/90 text-foreground">Traditional</Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-primary mb-1">Cultural Significance</p>
                          <p className="text-xs text-muted-foreground">{item.significance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
