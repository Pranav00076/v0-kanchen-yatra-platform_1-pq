"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MessageCircle, BookOpen, MapPin, Shield, Star, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"

export function BookingCommunityTeasers() {
  const router = useRouter()

  const handleBookingClick = () => {
    router.push("/booking")
  }

  const handleCommunityClick = () => {
    router.push("/community")
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Services Teaser */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Book Your Journey</CardTitle>
                </div>
                <Badge className="bg-green-500 text-white">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              </div>
              <CardDescription className="text-base">
                Plan your perfect Sikkim adventure with our comprehensive booking platform
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10 space-y-6">
              {/* Service Categories */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Monastery Passes</div>
                    <div className="text-xs text-muted-foreground">50+ sacred sites</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Expert Guides</div>
                    <div className="text-xs text-muted-foreground">Local experts</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Eco Stays</div>
                    <div className="text-xs text-muted-foreground">Sustainable lodging</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Safe Transport</div>
                    <div className="text-xs text-muted-foreground">Reliable & secure</div>
                  </div>
                </div>
              </div>

              {/* Featured Offer */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-primary">Complete Heritage Package</h4>
                  <Badge variant="outline" className="text-primary border-primary">
                    20% Off
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  7-day guided tour including 5 monasteries, local experiences, and eco-friendly accommodation
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9 (127 reviews)</span>
                  </div>
                  <div className="text-lg font-bold text-primary">₹25,999</div>
                </div>
              </div>

              <Button size="lg" className="w-full" onClick={handleBookingClick}>
                <Calendar className="mr-2 h-5 w-5" />
                Explore Booking Options
              </Button>
            </CardContent>
          </Card>

          {/* Community Hub Teaser */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-2xl">Join Our Community</CardTitle>
                </div>
                <Badge className="bg-blue-500 text-white">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              </div>
              <CardDescription className="text-base">
                Connect with fellow travelers and local experts in our vibrant community
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10 space-y-6">
              {/* Community Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2.5k+</div>
                  <div className="text-xs text-muted-foreground">Members</div>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">450+</div>
                  <div className="text-xs text-muted-foreground">Discussions</div>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">89</div>
                  <div className="text-xs text-muted-foreground">Travelogues</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Recent Activity</h4>

                <div className="space-y-2">
                  <div className="flex items-start space-x-3 p-3 bg-white/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      S
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm line-clamp-2">
                        <span className="font-medium">Sarah M.</span> shared her amazing experience at Pemayangtse
                        Monastery
                      </p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-white/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      L
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm line-clamp-2">
                        <span className="font-medium">Lama Tenzin</span> is hosting a live Q&A about Buddhist traditions
                      </p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Event */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-blue-600">Live Q&A Session</h4>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    Tomorrow
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  "Understanding Monastery Etiquette" with local expert Geshe Lobsang
                </p>
                <div className="text-sm font-medium text-blue-600">Tomorrow at 7:00 PM IST</div>
              </div>

              <Button size="lg" className="w-full bg-transparent" variant="outline" onClick={handleCommunityClick}>
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
