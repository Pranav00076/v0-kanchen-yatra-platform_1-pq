import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, MapPin, Award } from "lucide-react"

export function FeaturedExperiences() {
  const featuredExperiences = [
    {
      id: 1,
      title: "Traditional Thangka Painting Workshop",
      description: "Learn the ancient art of Thangka painting from master artists at Pemayangtse Monastery",
      image: "/thangka-painting-workshop.jpg",
      duration: "4 hours",
      groupSize: "6-8 people",
      price: "₹3,500",
      rating: 4.9,
      reviews: 47,
      location: "Pemayangtse Monastery",
      badges: ["Premium", "Small Group", "Authentic"],
      highlights: ["Master artist instruction", "Traditional materials", "Take home your artwork"],
    },
    {
      id: 2,
      title: "Monastery Photography Masterclass",
      description: "Capture the spiritual essence of Sikkim's monasteries with professional photography guidance",
      image: "/rumtek-monastery-sikkim.jpg",
      duration: "6 hours",
      groupSize: "4-6 people",
      price: "₹4,200",
      rating: 4.8,
      reviews: 32,
      location: "Rumtek & Enchey Monasteries",
      badges: ["Photography", "Expert Guide", "Equipment Included"],
      highlights: ["Professional equipment", "Golden hour sessions", "Post-processing tips"],
    },
    {
      id: 3,
      title: "Traditional Sikkimese Cooking Class",
      description: "Master authentic Sikkimese cuisine with local families in their traditional kitchens",
      image: "/sikkimese-cooking-class.jpg",
      duration: "5 hours",
      groupSize: "8-10 people",
      price: "₹2,800",
      rating: 4.9,
      reviews: 68,
      location: "Local Family Home, Gangtok",
      badges: ["Culinary", "Family Experience", "Organic Ingredients"],
      highlights: ["Family recipes", "Organic ingredients", "Full meal included"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Featured Experiences</h2>
        <Button variant="outline">View All Featured</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredExperiences.map((experience) => (
          <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-primary text-primary-foreground">
                  <Award className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              </div>
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-black/50 text-white border-0">
                  {experience.price}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg leading-tight">{experience.title}</CardTitle>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{experience.rating}</span>
                  <span className="text-muted-foreground">({experience.reviews})</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{experience.description}</p>

              <div className="flex flex-wrap gap-1">
                {experience.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {experience.groupSize}
                </div>
                <div className="flex items-center gap-1 col-span-2">
                  <MapPin className="h-4 w-4" />
                  {experience.location}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Highlights:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full">Book Experience</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
