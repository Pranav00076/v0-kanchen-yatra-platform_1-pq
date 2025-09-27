"use client"
import { useState } from "react"
import { MainNav } from "@/components/navigation/main-nav"
import { MainFooter } from "@/components/footer/main-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Eye, Clock, Users, VolumeX, Volume2, Search, Filter, MapPin, Star } from "lucide-react"
import { PanoramaViewer } from "@/components/virtual-tour/panorama-viewer"
import { useRouter } from "next/navigation"

const allTours = [
  {
    id: 1,
    title: "Pemayangtse Monastery 360°",
    description: "Explore the three-story monastery with interactive hotspots and historical narration",
    image: "/pemayangtse-monastery-sikkim.jpg",
    duration: "15-20 min",
    hotspots: 12,
    hasAudio: true,
    difficulty: "Easy",
    views: "2.3k",
    type: "Full Tour",
    location: "West Sikkim",
    rating: 4.8,
    category: "monastery",
    featured: true,
  },
  {
    id: 2,
    title: "Rumtek Monastery Interior",
    description: "Detailed view of the main prayer hall and sacred artifacts",
    image: "/rumtek-monastery-sikkim.jpg",
    duration: "10-12 min",
    hotspots: 8,
    hasAudio: true,
    difficulty: "Easy",
    views: "1.8k",
    type: "Interior Focus",
    location: "East Sikkim",
    rating: 4.7,
    category: "monastery",
    featured: true,
  },
  {
    id: 3,
    title: "Tashiding Sacred Walk",
    description: "Virtual pilgrimage around the monastery complex with mountain views",
    image: "/tashiding-monastery-sikkim.jpg",
    duration: "18-25 min",
    hotspots: 15,
    hasAudio: true,
    difficulty: "Moderate",
    views: "1.5k",
    type: "Pilgrimage",
    location: "West Sikkim",
    rating: 4.9,
    category: "pilgrimage",
    featured: false,
  },
  {
    id: 4,
    title: "Enchey Monastery Sunrise",
    description: "Experience the morning prayers and rituals in 360° immersion",
    image: "/enchey-monastery-sunrise-gangtok.jpg",
    duration: "12-15 min",
    hotspots: 6,
    hasAudio: true,
    difficulty: "Easy",
    views: "987",
    type: "Ritual Experience",
    location: "Gangtok",
    rating: 4.6,
    category: "ritual",
    featured: false,
  },
  {
    id: 5,
    title: "Dubdi Historical Journey",
    description: "Travel back in time to explore Sikkim's first monastery",
    image: "/dubdi-monastery-historical-yuksom.jpg",
    duration: "20-25 min",
    hotspots: 10,
    hasAudio: true,
    difficulty: "Moderate",
    views: "756",
    type: "Historical",
    location: "Yuksom",
    rating: 4.5,
    category: "historical",
    featured: false,
  },
  {
    id: 6,
    title: "Gangtok City Temple Walk",
    description: "Urban spiritual journey through Gangtok's sacred sites",
    image: "/gangtok-temples-urban-tour.jpg",
    duration: "25-30 min",
    hotspots: 18,
    hasAudio: true,
    difficulty: "Easy",
    views: "1.2k",
    type: "City Tour",
    location: "Gangtok",
    rating: 4.4,
    category: "urban",
    featured: false,
  },
  {
    id: 7,
    title: "Himalayan Meditation Retreat",
    description: "Immersive meditation experience in mountain monasteries",
    image: "/himalayan-meditation-retreat.jpg",
    duration: "30-40 min",
    hotspots: 8,
    hasAudio: true,
    difficulty: "Advanced",
    views: "543",
    type: "Meditation",
    location: "North Sikkim",
    rating: 4.9,
    category: "meditation",
    featured: true,
  },
  {
    id: 8,
    title: "Festival Celebrations 360°",
    description: "Experience traditional Buddhist festivals in virtual reality",
    image: "/buddhist-festival-celebrations.jpg",
    duration: "22-28 min",
    hotspots: 14,
    hasAudio: true,
    difficulty: "Moderate",
    views: "892",
    type: "Festival",
    location: "Various",
    rating: 4.7,
    category: "festival",
    featured: false,
  },
]

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<(typeof allTours)[0] | null>(null)
  const [isPanoramaOpen, setIsPanoramaOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const router = useRouter()

  const handleStartTour = (tour: (typeof allTours)[0]) => {
    setSelectedTour(tour)
    setIsPanoramaOpen(true)
  }

  const handleViewDetails = (tourId: number) => {
    // Navigate to individual tour page based on tour type
    const tour = allTours.find((t) => t.id === tourId)
    if (tour?.category === "monastery") {
      router.push(`/tours/pemayangtse`) // Default to pemayangtse for demo
    } else {
      router.push(`/tours/tour-${tourId}`)
    }
  }

  // Filter and sort tours
  const filteredTours = allTours
    .filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || tour.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || tour.difficulty.toLowerCase() === selectedDifficulty
      return matchesSearch && matchesCategory && matchesDifficulty
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return b.featured ? 1 : -1
        case "rating":
          return b.rating - a.rating
        case "duration":
          return Number.parseInt(a.duration) - Number.parseInt(b.duration)
        case "views":
          return Number.parseInt(b.views.replace("k", "000")) - Number.parseInt(a.views.replace("k", "000"))
        default:
          return 0
      }
    })

  const featuredTours = allTours.filter((tour) => tour.featured)

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Virtual Tours Collection</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Explore sacred monasteries, ancient temples, and spiritual sites through immersive 360° virtual reality
              experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="monastery">Monasteries</SelectItem>
                    <SelectItem value="pilgrimage">Pilgrimage</SelectItem>
                    <SelectItem value="ritual">Rituals</SelectItem>
                    <SelectItem value="historical">Historical</SelectItem>
                    <SelectItem value="meditation">Meditation</SelectItem>
                    <SelectItem value="festival">Festivals</SelectItem>
                    <SelectItem value="urban">Urban Tours</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="views">Most Viewed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        {featuredTours.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-7xl">
              <h2 className="text-3xl font-bold mb-8">Featured Tours</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTours.map((tour) => (
                  <Card
                    key={tour.id}
                    className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={tour.image || "/placeholder.svg"}
                        alt={tour.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="lg"
                          className="rounded-full w-16 h-16 p-0 bg-white/90 text-primary hover:bg-white"
                          onClick={() => handleStartTour(tour)}
                        >
                          <Play className="h-8 w-8 ml-1" />
                        </Button>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className="bg-red-500 text-white text-xs">360°</Badge>
                        <Badge className="bg-yellow-500 text-black text-xs">Featured</Badge>
                        <Badge variant="outline" className="bg-black/50 text-white border-white/30 text-xs">
                          {tour.type}
                        </Badge>
                      </div>

                      {/* Audio indicator */}
                      <div className="absolute top-3 right-3">
                        {tour.hasAudio ? (
                          <Volume2 className="h-5 w-5 text-white" />
                        ) : (
                          <VolumeX className="h-5 w-5 text-white/60" />
                        )}
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">{tour.title}</h3>
                        <div className="flex items-center text-white/80 text-sm">
                          <MapPin className="h-3 w-3 mr-1" />
                          {tour.location}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tour.description}</p>

                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {tour.duration}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {tour.rating}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {tour.views} views
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {tour.difficulty}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1" onClick={() => handleStartTour(tour)}>
                          <Play className="mr-2 h-4 w-4" />
                          Start Tour
                        </Button>
                        <Button variant="outline" onClick={() => handleViewDetails(tour.id)}>
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Tours */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">All Tours ({filteredTours.length})</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTours.map((tour) => (
                <Card
                  key={tour.id}
                  className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        className="rounded-full w-12 h-12 p-0 bg-white/90 text-primary hover:bg-white"
                        onClick={() => handleStartTour(tour)}
                      >
                        <Play className="h-5 w-5 ml-0.5" />
                      </Button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex gap-1">
                      <Badge className="bg-red-500 text-white text-xs">360°</Badge>
                      {tour.featured && <Badge className="bg-yellow-500 text-black text-xs">Featured</Badge>}
                    </div>

                    {/* Audio indicator */}
                    <div className="absolute top-2 right-2">
                      {tour.hasAudio ? (
                        <Volume2 className="h-4 w-4 text-white" />
                      ) : (
                        <VolumeX className="h-4 w-4 text-white/60" />
                      )}
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">{tour.title}</h3>
                      <div className="flex items-center text-white/80 text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {tour.location}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-3">
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{tour.description}</p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-500" />
                        {tour.rating}
                      </div>
                    </div>

                    <div className="flex gap-1">
                      <Button size="sm" className="flex-1 text-xs" onClick={() => handleStartTour(tour)}>
                        <Play className="mr-1 h-3 w-3" />
                        Start
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleViewDetails(tour.id)}>
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No tours found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setSelectedDifficulty("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <MainFooter />

      {/* Panorama viewer modal */}
      {selectedTour && (
        <PanoramaViewer isOpen={isPanoramaOpen} onClose={() => setIsPanoramaOpen(false)} tour={selectedTour} />
      )}
    </div>
  )
}
