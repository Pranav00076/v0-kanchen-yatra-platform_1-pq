"use client"

import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Home, Utensils, Car } from "lucide-react"

const categories = [
  {
    id: "passes",
    label: "Monastery Passes",
    icon: MapPin,
    count: 45,
    description: "Access to sacred sites",
  },
  {
    id: "guides",
    label: "Guides",
    icon: Users,
    count: 28,
    description: "Expert local guides",
  },
  {
    id: "stays",
    label: "Stays",
    icon: Home,
    count: 67,
    description: "Eco-friendly accommodation",
  },
  {
    id: "dining",
    label: "Food & Dining",
    icon: Utensils,
    count: 34,
    description: "Authentic local cuisine",
  },
  {
    id: "transport",
    label: "Transportation",
    icon: Car,
    count: 19,
    description: "Safe & reliable transport",
  },
]

export function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = React.useState("passes")

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">What would you like to book?</h2>
        <p className="text-muted-foreground">Choose a category to explore available options</p>
      </div>

      <ToggleGroup
        type="single"
        value={selectedCategory}
        onValueChange={(value) => value && setSelectedCategory(value)}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full"
      >
        {categories.map((category) => (
          <ToggleGroupItem
            key={category.id}
            value={category.id}
            className="flex flex-col items-center p-6 h-auto data-[state=on]:bg-primary data-[state=on]:text-primary-foreground hover:bg-muted/50 transition-all duration-200"
          >
            <category.icon className="h-8 w-8 mb-3" />
            <div className="text-center space-y-1">
              <div className="font-semibold text-sm">{category.label}</div>
              <div className="text-xs opacity-80">{category.description}</div>
              <Badge variant="secondary" className="text-xs">
                {category.count} options
              </Badge>
            </div>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
