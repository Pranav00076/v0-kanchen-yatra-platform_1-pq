"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, Search, Filter, Star, Clock, Eye } from "lucide-react"

export function DigitalLibrary() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const libraryItems = [
    {
      id: 1,
      title: "Complete Guide to Pemayangtse Monastery",
      type: "Guide",
      category: "monastery-guides",
      description: "Comprehensive historical and architectural guide with detailed floor plans and ritual explanations",
      thumbnail: "/pemayangtse-monastery-sikkim.jpg",
      pages: 45,
      downloadCount: 1247,
      rating: 4.9,
      size: "12.3 MB",
      format: "PDF",
      lastUpdated: "2 weeks ago",
      tags: ["History", "Architecture", "Rituals"],
    },
    {
      id: 2,
      title: "Traditional Thangka Art Techniques",
      type: "Tutorial",
      category: "cultural-resources",
      description: "Step-by-step guide to traditional Thangka painting methods and symbolism",
      thumbnail: "/thangka-painting-workshop.jpg",
      pages: 32,
      downloadCount: 892,
      rating: 4.8,
      size: "18.7 MB",
      format: "PDF",
      lastUpdated: "1 month ago",
      tags: ["Art", "Tutorial", "Symbolism"],
    },
    {
      id: 3,
      title: "Sikkim Monastery Photography Guide",
      type: "Photography",
      category: "photography-resources",
      description: "Professional tips for capturing monastery architecture and spiritual moments",
      thumbnail: "/rumtek-monastery-sikkim.jpg",
      pages: 28,
      downloadCount: 654,
      rating: 4.7,
      size: "25.1 MB",
      format: "PDF",
      lastUpdated: "3 weeks ago",
      tags: ["Photography", "Techniques", "Ethics"],
    },
    {
      id: 4,
      title: "Buddhist Festival Calendar 2024",
      type: "Calendar",
      category: "festival-guides",
      description: "Complete calendar of monastery festivals with dates, significance, and visitor information",
      thumbnail: "/buddhist-festival-calendar.jpg",
      pages: 16,
      downloadCount: 1156,
      rating: 4.9,
      size: "8.4 MB",
      format: "PDF",
      lastUpdated: "1 week ago",
      tags: ["Festivals", "Calendar", "Planning"],
    },
    {
      id: 5,
      title: "Monastery Etiquette & Cultural Guidelines",
      type: "Guide",
      category: "cultural-resources",
      description: "Essential cultural guidelines for respectful monastery visits and interactions",
      thumbnail: "/monastery-etiquette-guide.jpg",
      pages: 12,
      downloadCount: 2341,
      rating: 4.9,
      size: "5.2 MB",
      format: "PDF",
      lastUpdated: "4 days ago",
      tags: ["Etiquette", "Culture", "Respect"],
    },
    {
      id: 6,
      title: "Traditional Sikkimese Recipes Collection",
      type: "Recipe Book",
      category: "cultural-resources",
      description: "Authentic recipes from monastery kitchens and local families",
      thumbnail: "/sikkimese-cooking-class.jpg",
      pages: 38,
      downloadCount: 743,
      rating: 4.6,
      size: "14.8 MB",
      format: "PDF",
      lastUpdated: "2 months ago",
      tags: ["Recipes", "Food", "Traditional"],
    },
  ]

  const categories = [
    { id: "all", name: "All Resources", count: libraryItems.length },
    { id: "monastery-guides", name: "Monastery Guides", count: 8 },
    { id: "cultural-resources", name: "Cultural Resources", count: 12 },
    { id: "photography-resources", name: "Photography", count: 6 },
    { id: "festival-guides", name: "Festival Guides", count: 4 },
  ]

  const filteredItems = libraryItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Digital Library</h2>
        <Button variant="outline">
          <BookOpen className="h-4 w-4 mr-2" />
          Request Resource
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources, guides, tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Advanced Filters
        </Button>
      </div>

      {/* Categories */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-5 bg-muted/50">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name}
              <Badge variant="secondary" className="ml-1 text-xs">
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary text-primary-foreground">{item.type}</Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-black/50 text-white border-0">
                      {item.format}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {item.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {item.downloadCount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {item.lastUpdated}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item.pages} pages</span>
                    <span>{item.size}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No resources found</h3>
          <p className="text-muted-foreground">Try adjusting your search or browse different categories</p>
        </div>
      )}
    </div>
  )
}
