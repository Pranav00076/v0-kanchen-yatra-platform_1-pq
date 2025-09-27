"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Users, Clock, Leaf, Heart } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Thangka Painting Workshop",
    description: "Learn the sacred art of Thangka painting from master artists in a traditional setting",
    image: "/thangka-painting-workshop.jpg",
    price: "₹2,500",
    duration: "4 hours",
    groupSize: "6-8 people",
    rating: 4.9,
    reviews: 127,
    host: "Lama Tenzin",
    badges: ["Authentic", "Hands-on"],
    isEcoFriendly: false,
    isCommunityRun: true,
  },
  {
    id: 2,
    title: "Sikkimese Cooking Class",
    description: "Master traditional recipes like momos, thukpa, and gundruk with local families",
    image: "/sikkimese-cooking-class.jpg",
    price: "₹1,800",
    duration: "3 hours",
    groupSize: "4-6 people",
    rating: 4.8,
    reviews: 89,
    host: "Ama Dolma",
    badges: ["Family Recipe", "Organic"],
    isEcoFriendly: true,
    isCommunityRun: true,
  },
  {
    id: 3,
    title: "Meditation & Mindfulness Retreat",
    description: "Find inner peace through guided meditation in serene monastery settings",
    image: "/buddhist-meditation-retreat.jpg",
    price: "₹3,200",
    duration: "Full day",
    groupSize: "8-12 people",
    rating: 4.9,
    reviews: 156,
    host: "Geshe Lobsang",
    badges: ["Spiritual", "Transformative"],
    isEcoFriendly: true,
    isCommunityRun: false,
  },
  {
    id: 4,
    title: "Traditional Weaving Workshop",
    description: "Learn ancient weaving techniques and create your own traditional textile",
    image: "/traditional-weaving-workshop-sikkim.jpg",
    price: "₹2,200",
    duration: "5 hours",
    groupSize: "4-6 people",
    rating: 4.7,
    reviews: 73,
    host: "Ani Pema",
    badges: ["Handicraft", "Take Home"],
    isEcoFriendly: true,
    isCommunityRun: true,
  },
  {
    id: 5,
    title: "Himalayan Herbal Walk",
    description: "Discover medicinal plants and traditional healing practices with local healers",
    image: "/himalayan-herbal-walk-sikkim.jpg",
    price: "₹1,500",
    duration: "3 hours",
    groupSize: "6-10 people",
    rating: 4.6,
    reviews: 94,
    host: "Dr. Karma",
    badges: ["Educational", "Nature"],
    isEcoFriendly: true,
    isCommunityRun: true,
  },
]

export function LocalExperiencesCarousel() {
  const router = useRouter()

  const handleBookExperience = (experienceId: number) => {
    router.push(`/booking?type=experience&id=${experienceId}`)
  }

  const handleViewAllExperiences = () => {
    router.push("/experiences")
  }

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Authentic Local Experiences</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Connect with local culture through hands-on workshops and immersive experiences led by community experts
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {experiences.map((experience) => (
              <CarouselItem key={experience.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
                      {experience.isEcoFriendly && (
                        <Badge className="bg-green-500 text-white text-xs">
                          <Leaf className="h-3 w-3 mr-1" />
                          Eco-Friendly
                        </Badge>
                      )}
                      {experience.isCommunityRun && (
                        <Badge className="bg-blue-500 text-white text-xs">
                          <Heart className="h-3 w-3 mr-1" />
                          Community-Run
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {experience.rating}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white text-primary px-3 py-1 rounded-full font-bold">
                      {experience.price}
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-1">{experience.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{experience.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {experience.groupSize}
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Host: <span className="font-medium">{experience.host}</span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {experience.rating} ({experience.reviews} reviews)
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4 flex-wrap">
                      {experience.badges.map((badge, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full" onClick={() => handleBookExperience(experience.id)}>
                      Book Experience
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={handleViewAllExperiences}>
            View All Experiences
          </Button>
        </div>
      </div>
    </section>
  )
}
