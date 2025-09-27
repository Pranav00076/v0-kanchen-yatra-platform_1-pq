import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, MapPin, Heart } from "lucide-react"

export function ExperienceGrid() {
  const experiences = [
    {
      id: 4,
      title: "Sunrise Meditation at Tashiding",
      description: "Experience the spiritual awakening of dawn prayers at one of Sikkim's most sacred monasteries",
      image: "/tashiding-monastery-sikkim.jpg",
      duration: "3 hours",
      groupSize: "4-8 people",
      price: "₹1,800",
      originalPrice: "₹2,200",
      rating: 4.9,
      reviews: 34,
      location: "Tashiding Monastery",
      difficulty: "Easy",
      badges: ["Early Bird", "Spiritual", "Small Group"],
      isPopular: true,
    },
    {
      id: 5,
      title: "Monastery Architecture Photography Walk",
      description: "Discover the intricate architectural details of Rumtek Monastery with a professional photographer",
      image: "/rumtek-monastery-sikkim.jpg",
      duration: "4 hours",
      groupSize: "6-8 people",
      price: "₹3,200",
      rating: 4.7,
      reviews: 28,
      location: "Rumtek Monastery",
      difficulty: "Easy",
      badges: ["Photography", "Architecture", "Professional Guide"],
    },
    {
      id: 6,
      title: "Traditional Butter Tea & Momos Workshop",
      description: "Learn to prepare authentic Tibetan butter tea and hand-made momos with monastery cooks",
      image: "/sikkimese-cooking-class.jpg",
      duration: "3 hours",
      groupSize: "8-12 people",
      price: "₹2,100",
      rating: 4.8,
      reviews: 52,
      location: "Enchey Monastery Kitchen",
      difficulty: "Easy",
      badges: ["Culinary", "Traditional", "Hands-on"],
    },
    {
      id: 7,
      title: "Monastery Trekking Circuit",
      description: "Trek through ancient paths connecting three sacred monasteries in the Gangtok region",
      image: "/dubdi-monastery-yuksom-sikkim.jpg",
      duration: "2 days",
      groupSize: "6-10 people",
      price: "₹6,500",
      rating: 4.6,
      reviews: 19,
      location: "Gangtok Circuit",
      difficulty: "Moderate",
      badges: ["Trekking", "Multi-day", "Adventure"],
    },
    {
      id: 8,
      title: "Prayer Flag Making Workshop",
      description: "Create your own traditional prayer flags while learning about their spiritual significance",
      image: "/thangka-painting-workshop.jpg",
      duration: "2 hours",
      groupSize: "8-15 people",
      price: "₹1,500",
      rating: 4.9,
      reviews: 67,
      location: "Pemayangtse Monastery",
      difficulty: "Easy",
      badges: ["Craft", "Spiritual", "Take Home"],
    },
    {
      id: 9,
      title: "Monastery Music & Chanting Experience",
      description: "Participate in traditional Buddhist chanting and learn about monastery musical instruments",
      image: "/enchey-monastery-gangtok-sikkim.jpg",
      duration: "2.5 hours",
      groupSize: "10-15 people",
      price: "₹1,900",
      rating: 4.8,
      reviews: 41,
      location: "Enchey Monastery",
      difficulty: "Easy",
      badges: ["Music", "Spiritual", "Interactive"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">All Experiences</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Showing {experiences.length} of 47 experiences</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((experience) => (
          <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                {experience.isPopular && <Badge className="bg-orange-500 text-white">Popular</Badge>}
                {experience.originalPrice && (
                  <Badge variant="destructive">
                    Save ₹
                    {Number.parseInt(experience.originalPrice.replace("₹", "")) -
                      Number.parseInt(experience.price.replace("₹", ""))}
                  </Badge>
                )}
              </div>
              <div className="absolute top-3 right-3">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-black/20 hover:bg-black/40">
                  <Heart className="h-4 w-4 text-white" />
                </Button>
              </div>
              <div className="absolute bottom-3 right-3">
                <Badge variant="secondary" className="bg-black/50 text-white border-0">
                  {experience.difficulty}
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

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">{experience.price}</span>
                  {experience.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{experience.originalPrice}</span>
                  )}
                  <span className="text-sm text-muted-foreground">per person</span>
                </div>
                <Button>Book Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Experiences
        </Button>
      </div>
    </div>
  )
}
