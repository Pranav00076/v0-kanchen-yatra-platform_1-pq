"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Filter, X } from "lucide-react"

export function ExperienceFilters() {
  const [priceRange, setPriceRange] = useState([1000, 5000])
  const [selectedDuration, setSelectedDuration] = useState<string[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const durations = [
    { id: "half-day", label: "Half Day (2-4 hours)", count: 15 },
    { id: "full-day", label: "Full Day (6-8 hours)", count: 23 },
    { id: "multi-day", label: "Multi-day (2+ days)", count: 9 },
  ]

  const difficulties = [
    { id: "easy", label: "Easy", count: 28 },
    { id: "moderate", label: "Moderate", count: 15 },
    { id: "challenging", label: "Challenging", count: 4 },
  ]

  const features = [
    { id: "small-group", label: "Small Group", count: 32 },
    { id: "private", label: "Private Experience", count: 18 },
    { id: "equipment-included", label: "Equipment Included", count: 24 },
    { id: "meal-included", label: "Meal Included", count: 19 },
    { id: "pickup-included", label: "Pickup Included", count: 26 },
    { id: "english-guide", label: "English Speaking Guide", count: 41 },
  ]

  const handleDurationChange = (durationId: string) => {
    setSelectedDuration((prev) =>
      prev.includes(durationId) ? prev.filter((id) => id !== durationId) : [...prev, durationId],
    )
  }

  const handleDifficultyChange = (difficultyId: string) => {
    setSelectedDifficulty((prev) =>
      prev.includes(difficultyId) ? prev.filter((id) => id !== difficultyId) : [...prev, difficultyId],
    )
  }

  const handleFeatureChange = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
    )
  }

  const clearAllFilters = () => {
    setPriceRange([1000, 5000])
    setSelectedDuration([])
    setSelectedDifficulty([])
    setSelectedFeatures([])
  }

  return (
    <div className="space-y-6">
      <Card className="sticky top-24">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Price Range */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Price Range</h3>
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={10000}
                min={500}
                step={250}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Duration</h3>
            <div className="space-y-2">
              {durations.map((duration) => (
                <div key={duration.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={duration.id}
                      checked={selectedDuration.includes(duration.id)}
                      onCheckedChange={() => handleDurationChange(duration.id)}
                    />
                    <label htmlFor={duration.id} className="text-sm text-foreground cursor-pointer">
                      {duration.label}
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {duration.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Difficulty Level</h3>
            <div className="space-y-2">
              {difficulties.map((difficulty) => (
                <div key={difficulty.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={difficulty.id}
                      checked={selectedDifficulty.includes(difficulty.id)}
                      onCheckedChange={() => handleDifficultyChange(difficulty.id)}
                    />
                    <label htmlFor={difficulty.id} className="text-sm text-foreground cursor-pointer">
                      {difficulty.label}
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {difficulty.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Features</h3>
            <div className="space-y-2">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={feature.id}
                      checked={selectedFeatures.includes(feature.id)}
                      onCheckedChange={() => handleFeatureChange(feature.id)}
                    />
                    <label htmlFor={feature.id} className="text-sm text-foreground cursor-pointer">
                      {feature.label}
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </CardContent>
      </Card>
    </div>
  )
}
