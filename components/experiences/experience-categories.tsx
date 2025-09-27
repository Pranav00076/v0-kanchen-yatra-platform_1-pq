"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Camera, Utensils, Mountain, Users, Sparkles } from "lucide-react"

export function ExperienceCategories() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    {
      id: "all",
      name: "All Experiences",
      icon: Sparkles,
      count: 47,
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      id: "cultural",
      name: "Cultural Workshops",
      icon: Palette,
      count: 12,
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      id: "photography",
      name: "Photography Tours",
      icon: Camera,
      count: 8,
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      id: "culinary",
      name: "Culinary Experiences",
      icon: Utensils,
      count: 15,
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      id: "trekking",
      name: "Monastery Treks",
      icon: Mountain,
      count: 9,
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      id: "community",
      name: "Community Visits",
      icon: Users,
      count: 3,
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Experience Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedCategory === category.id ? category.color : "hover:bg-muted/50"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <CardContent className="p-4 text-center space-y-2">
              <category.icon className="h-8 w-8 mx-auto" />
              <h3 className="font-semibold text-sm">{category.name}</h3>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
