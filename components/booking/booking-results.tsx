"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Clock, Users, Leaf, Heart } from "lucide-react"

const bookingItems = [
  {
    id: 1,
    type: "pass",
    title: "Pemayangtse Monastery Pass",
    description: "Full access to the three-story monastery with guided tour and cultural presentation",
    image: "/pemayangtse-monastery-sikkim.jpg",
    price: 850,
    originalPrice: 1000,
    rating: 4.9,
    reviews: 234,
    location: "West Sikkim",
    duration: "2-3 hours",
    groupSize: "Up to 15 people",
    badges: ["Most Popular", "Cultural Heritage"],
    isEcoFriendly: false,
    isCommunityRun: true,
    features: ["English Guide", "Photography Allowed", "Cultural Presentation"],
    availability: "Available Today",
  },
  {
    id: 2,
    type: "stay",
    title: "Himalayan Eco Lodge",
    description: "Sustainable mountain lodge with organic meals and meditation sessions",
    image: "/himalayan-eco-lodge-sikkim.jpg",
    price: 3200,
    originalPrice: 4000,
    rating: 4.8,
    reviews: 156,
    location: "Pelling",
    duration: "Per night",
    groupSize: "2-4 guests",
    badges: ["Eco-Certified", "Mountain View"],
    isEcoFriendly: true,
    isCommunityRun: true,
    features: ["Organic Meals", "Meditation Sessions", "Mountain Views", "WiFi"],
    availability: "Available This Week",
  },
  {
    id: 3,
    type: "guide",
    title: "Expert Cultural Guide - Lama Tenzin",
    description: "30+ years experience in Buddhist culture and monastery traditions",
    image: "/lama-tenzin-cultural-guide.jpg",
    price: 2500,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    location: "All Regions",
    duration: "Full day",
    groupSize: "1-8 people",
    badges: ["Expert Level", "Multilingual"],
    isEcoFriendly: false,
    isCommunityRun: false,
    features: ["English & Hindi", "Cultural Stories", "Photography Tips", "Monastery Access"],
    availability: "Available Tomorrow",
  },
  {
    id: 4,
    type: "dining",
    title: "Traditional Sikkimese Feast",
    description: "Authentic multi-course meal with local family including cooking demonstration",
    image: "/traditional-sikkimese-feast.jpg",
    price: 1800,
    originalPrice: 2200,
    rating: 4.7,
    reviews: 67,
    location: "Gangtok",
    duration: "3 hours",
    groupSize: "2-8 people",
    badges: ["Family Recipe", "Hands-on"],
    isEcoFriendly: true,
    isCommunityRun: true,
    features: ["Cooking Demo", "Recipe Cards", "Organic Ingredients", "Family Stories"],
    availability: "Available Today",
  },
  {
    id: 5,
    type: "transport",
    title: "Safe Mountain Transport",
    description: "Reliable 4WD vehicle with experienced driver for monastery visits",
    image: "/mountain-transport-sikkim.jpg",
    price: 4500,
    originalPrice: null,
    rating: 4.6,
    reviews: 123,
    location: "All Routes",
    duration: "Full day",
    groupSize: "1-6 passengers",
    badges: ["Safety Certified", "Local Driver"],
    isEcoFriendly: false,
    isCommunityRun: false,
    features: ["4WD Vehicle", "Experienced Driver", "Safety Equipment", "Flexible Routes"],
    availability: "Available This Week",
  },
  {
    id: 6,
    type: "stay",
    title: "Monastery Guesthouse",
    description: "Simple accommodation within monastery grounds with meditation sessions",
    image: "/monastery-guesthouse-sikkim.jpg",
    price: 1200,
    originalPrice: 1500,
    rating: 4.5,
    reviews: 45,
    location: "Rumtek",
    duration: "Per night",
    groupSize: "1-2 guests",
    badges: ["Authentic", "Spiritual"],
    isEcoFriendly: true,
    isCommunityRun: true,
    features: ["Morning Prayers", "Meditation Sessions", "Simple Meals", "Peaceful Environment"],
    availability: "Available Next Week",
  },
]

export function BookingResults() {
  const [sortBy, setSortBy] = React.useState("popular")
  const [viewMode, setViewMode] = React.useState("grid")

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Available Options</h2>
          <p className="text-muted-foreground">{bookingItems.length} results found</p>
        </div>

        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {bookingItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <div className="relative">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                {item.isEcoFriendly && (
                  <Badge className="bg-green-500 text-white text-xs">
                    <Leaf className="h-3 w-3 mr-1" />
                    Eco-Friendly
                  </Badge>
                )}
                {item.isCommunityRun && (
                  <Badge className="bg-blue-500 text-white text-xs">
                    <Heart className="h-3 w-3 mr-1" />
                    Community-Run
                  </Badge>
                )}
                {item.badges.slice(0, 1).map((badge, index) => (
                  <Badge key={index} className="bg-yellow-500 text-black text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Rating */}
              <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center">
                <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                {item.rating}
              </div>

              {/* Availability */}
              <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                {item.availability}
              </div>
            </div>

            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                <div className="text-right">
                  {item.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</div>
                  )}
                  <div className="text-xl font-bold text-primary">₹{item.price}</div>
                </div>
              </div>
              <CardDescription className="line-clamp-2">{item.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-0 space-y-4">
              {/* Details */}
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {item.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {item.groupSize}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {item.rating} ({item.reviews})
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-1">
                {item.features.slice(0, 3).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {item.features.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{item.features.length - 3} more
                  </Badge>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button className="flex-1">Book Now</Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="bg-transparent">
          Load More Results
        </Button>
      </div>
    </div>
  )
}
