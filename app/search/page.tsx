"use client"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { MainNav } from "@/components/navigation/main-nav"
import { MainFooter } from "@/components/footer/main-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock } from "lucide-react"

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  // Mock search results - in a real app, this would come from an API
  const searchResults = [
    {
      id: 1,
      type: "monastery",
      title: "Pemayangtse Monastery",
      description: "Ancient three-story monastery with stunning mountain views",
      image: "/pemayangtse-monastery-sikkim.jpg",
      rating: 4.9,
      location: "West Sikkim",
      duration: "2-3 hours",
    },
    {
      id: 2,
      type: "experience",
      title: "Thangka Painting Workshop",
      description: "Learn traditional Buddhist art from master artists",
      image: "/thangka-painting-workshop.jpg",
      rating: 4.8,
      location: "Gangtok",
      duration: "4 hours",
    },
    {
      id: 3,
      type: "festival",
      title: "Losar Festival",
      description: "Tibetan New Year celebration at Rumtek Monastery",
      image: "/losar-festival-rumtek.jpg",
      rating: 4.9,
      location: "Rumtek",
      duration: "3 days",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Search Results</h1>
            <p className="text-muted-foreground">
              {query
                ? `Showing results for "${query}"`
                : "Enter a search term to find monasteries, experiences, and festivals"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={result.image || "/placeholder.svg"}
                    alt={result.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 capitalize">{result.type}</Badge>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {result.rating}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{result.title}</CardTitle>
                  <CardDescription>{result.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {result.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {result.duration}
                    </div>
                  </div>
                  <Button className="w-full">
                    {result.type === "monastery"
                      ? "Start Virtual Tour"
                      : result.type === "experience"
                        ? "Book Experience"
                        : "View Details"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  )
}
