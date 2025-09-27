"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

const festivals = [
  {
    id: 1,
    name: "Losar Festival",
    date: "2024-02-10",
    monastery: "Rumtek Monastery",
    type: "Tibetan New Year",
    duration: "3 days",
    participants: "500+",
    description: "The most important festival celebrating the Tibetan New Year with traditional dances and prayers.",
  },
  {
    id: 2,
    name: "Bumchu Festival",
    date: "2024-03-15",
    monastery: "Tashiding Monastery",
    type: "Sacred Water Ceremony",
    duration: "1 day",
    participants: "300+",
    description: "Sacred water ceremony where holy water is distributed to devotees for blessings.",
  },
  {
    id: 3,
    name: "Saga Dawa",
    date: "2024-05-23",
    monastery: "Pemayangtse Monastery",
    type: "Buddha's Enlightenment",
    duration: "1 day",
    participants: "800+",
    description: "Celebrates Buddha's birth, enlightenment, and death with special prayers and offerings.",
  },
  {
    id: 4,
    name: "Drukpa Kunley Festival",
    date: "2024-07-08",
    monastery: "Enchey Monastery",
    type: "Masked Dance",
    duration: "2 days",
    participants: "400+",
    description: "Traditional masked dance festival with colorful performances and cultural displays.",
  },
]

export function FestivalCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const filteredFestivals = festivals.filter((festival) => {
    const festivalMonth = new Date(festival.date).getMonth()
    return festivalMonth === selectedMonth
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Calendar className="h-6 w-6 text-primary" />
          Festival Calendar
        </CardTitle>
        <div className="flex flex-wrap gap-2 mt-4">
          {months.map((month, index) => (
            <Button
              key={month}
              variant={selectedMonth === index ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedMonth(index)}
              className="text-xs"
            >
              {month}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredFestivals.length > 0 ? (
            filteredFestivals.map((festival) => (
              <div key={festival.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-foreground">{festival.name}</h3>
                  <Badge variant="secondary">{festival.type}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {festival.monastery}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {festival.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {festival.participants}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{festival.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">
                    {new Date(festival.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No festivals scheduled for {months[selectedMonth]}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
