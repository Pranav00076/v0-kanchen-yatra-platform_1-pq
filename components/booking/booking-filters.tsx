"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Filter, X, Leaf, Heart, Star, MapPin, Calendar, Users, Clock } from "lucide-react"

export function BookingFilters() {
  const [priceRange, setPriceRange] = React.useState([500, 5000])
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setPriceRange([500, 5000])
  }

  return (
    <div className="space-y-6 sticky top-24">
      {/* Cultural Notice */}
      <Alert className="border-yellow-200 bg-yellow-50">
        <AlertTriangle className="h-4 w-4 text-yellow-600" />
        <AlertDescription className="text-yellow-800">
          <strong>A respectful journey begins with understanding.</strong> Please review our{" "}
          <a href="/cultural-guidelines" className="underline font-medium">
            Cultural Guidelines
          </a>{" "}
          before booking.
        </AlertDescription>
      </Alert>

      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Active Filters
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-3 w-3 mr-1" />
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="text-xs">
                  {filter}
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="ml-1 hover:bg-destructive hover:text-destructive-foreground rounded-full"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={10000} min={0} step={100} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="east">East Sikkim</SelectItem>
              <SelectItem value="west">West Sikkim</SelectItem>
              <SelectItem value="north">North Sikkim</SelectItem>
              <SelectItem value="south">South Sikkim</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Accommodation Type (for Stays) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Accommodation Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { id: "homestay", label: "Homestay", count: 23 },
            { id: "guesthouse", label: "Guesthouse", count: 18 },
            { id: "monastery", label: "Monastery Stay", count: 8 },
            { id: "eco-lodge", label: "Eco Lodge", count: 12 },
            { id: "hotel", label: "Hotel", count: 6 },
          ].map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={selectedFilters.includes(type.label)}
                  onCheckedChange={() => toggleFilter(type.label)}
                />
                <Label htmlFor={type.id} className="text-sm">
                  {type.label}
                </Label>
              </div>
              <span className="text-xs text-muted-foreground">({type.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Special Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Special Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="eco-friendly"
              checked={selectedFilters.includes("Eco-Friendly")}
              onCheckedChange={() => toggleFilter("Eco-Friendly")}
            />
            <Label htmlFor="eco-friendly" className="text-sm flex items-center">
              <Leaf className="h-4 w-4 mr-1 text-green-500" />
              Eco-Friendly
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="community-run"
              checked={selectedFilters.includes("Community-Run")}
              onCheckedChange={() => toggleFilter("Community-Run")}
            />
            <Label htmlFor="community-run" className="text-sm flex items-center">
              <Heart className="h-4 w-4 mr-1 text-red-500" />
              Community-Run
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="wheelchair-accessible"
              checked={selectedFilters.includes("Wheelchair Accessible")}
              onCheckedChange={() => toggleFilter("Wheelchair Accessible")}
            />
            <Label htmlFor="wheelchair-accessible" className="text-sm">
              Wheelchair Accessible
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="english-speaking"
              checked={selectedFilters.includes("English Speaking")}
              onCheckedChange={() => toggleFilter("English Speaking")}
            />
            <Label htmlFor="english-speaking" className="text-sm">
              English Speaking Guide
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center">
            <Star className="h-4 w-4 mr-2" />
            Minimum Rating
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedFilters.includes(`${rating}+ Stars`)}
                onCheckedChange={() => toggleFilter(`${rating}+ Stars`)}
              />
              <Label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                {rating}+
                <div className="flex ml-1">
                  {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Duration (for Experiences) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Duration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {["1-2 hours", "3-4 hours", "Half day", "Full day", "Multi-day"].map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox
                id={duration}
                checked={selectedFilters.includes(duration)}
                onCheckedChange={() => toggleFilter(duration)}
              />
              <Label htmlFor={duration} className="text-sm">
                {duration}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Group Size */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Group Size
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            "Private (1-2 people)",
            "Small group (3-6 people)",
            "Medium group (7-12 people)",
            "Large group (13+ people)",
          ].map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={size} checked={selectedFilters.includes(size)} onCheckedChange={() => toggleFilter(size)} />
              <Label htmlFor={size} className="text-sm">
                {size}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Availability
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select dates" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Available Today</SelectItem>
              <SelectItem value="tomorrow">Available Tomorrow</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="custom">Custom Date Range</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  )
}
