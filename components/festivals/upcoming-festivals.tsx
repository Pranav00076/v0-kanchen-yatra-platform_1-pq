"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"

const upcomingFestivals = [
  {
    id: 1,
    name: "Losar Festival 2024",
    monastery: "Rumtek Monastery",
    date: "February 10-12, 2024",
    image: "/losar-festival-rumtek.jpg",
    rating: 4.9,
    highlights: ["Traditional Dances", "Butter Sculptures", "Prayer Ceremonies"],
    price: "Free Entry",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Bumchu Festival",
    monastery: "Tashiding Monastery",
    date: "March 15, 2024",
    image: "/bumchu-festival-tashiding.jpg",
    rating: 4.8,
    highlights: ["Sacred Water Ceremony", "Blessing Rituals", "Cultural Performances"],
    price: "Free Entry",
    status: "Registration Open",
  },
  {
    id: 3,
    name: "Saga Dawa Festival",
    monastery: "Pemayangtse Monastery",
    date: "May 23, 2024",
    image: "/saga-dawa-festival.jpg",
    rating: 4.9,
    highlights: ["Buddha's Enlightenment", "Prayer Flags", "Community Feast"],
    price: "Free Entry",
    status: "Early Bird",
  },
]

export function UpcomingFestivals() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <CalendarDays className="h-6 w-6 text-primary" />
          Upcoming Festivals
        </CardTitle>
        <p className="text-muted-foreground">
          Experience the sacred traditions and vibrant celebrations of Sikkim's monasteries
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingFestivals.map((festival) => (
            <div
              key={festival.id}
              className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={festival.image || "/placeholder.svg"}
                  alt={festival.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={festival.status === "Upcoming" ? "default" : "secondary"}
                    className="bg-background/90 text-foreground"
                  >
                    {festival.status}
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{festival.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-primary font-medium">{festival.price}</span>
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {festival.name}
                </h3>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  {festival.monastery}
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <Clock className="h-4 w-4" />
                  {festival.date}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {festival.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full" size="sm">
                  Register Interest
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
