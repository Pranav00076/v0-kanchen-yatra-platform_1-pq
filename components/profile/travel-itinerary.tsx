import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Plus, Edit, Share2 } from "lucide-react"

export function TravelItinerary() {
  const itineraries = [
    {
      id: 1,
      title: "Sikkim Monastery Circuit - Winter 2024",
      description: "A comprehensive 7-day journey through Sikkim's most sacred monasteries",
      startDate: "2024-02-15",
      endDate: "2024-02-22",
      duration: "7 days",
      participants: 2,
      status: "planned",
      totalBudget: "₹45,000",
      monasteries: ["Pemayangtse", "Rumtek", "Tashiding", "Enchey"],
      activities: [
        {
          day: 1,
          title: "Arrival & Pemayangtse Visit",
          time: "10:00 AM",
          location: "Pemayangtse Monastery",
          type: "monastery-visit",
        },
        {
          day: 2,
          title: "Thangka Painting Workshop",
          time: "9:00 AM",
          location: "Pemayangtse Monastery",
          type: "experience",
        },
        {
          day: 3,
          title: "Travel to Rumtek",
          time: "8:00 AM",
          location: "Rumtek Monastery",
          type: "travel",
        },
        {
          day: 4,
          title: "Photography Masterclass",
          time: "6:00 AM",
          location: "Rumtek Monastery",
          type: "experience",
        },
      ],
    },
    {
      id: 2,
      title: "Spring Festival Tour 2024",
      description: "Experience the vibrant spring festivals across multiple monasteries",
      startDate: "2024-03-20",
      endDate: "2024-03-25",
      duration: "5 days",
      participants: 1,
      status: "draft",
      totalBudget: "₹28,000",
      monasteries: ["Rumtek", "Enchey", "Tashiding"],
      activities: [
        {
          day: 1,
          title: "Losar Festival at Rumtek",
          time: "7:00 AM",
          location: "Rumtek Monastery",
          type: "festival",
        },
        {
          day: 2,
          title: "Traditional Dance Performance",
          time: "2:00 PM",
          location: "Enchey Monastery",
          type: "cultural",
        },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planned":
        return "bg-blue-100 text-blue-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "monastery-visit":
        return "🏛️"
      case "experience":
        return "🎨"
      case "travel":
        return "🚗"
      case "festival":
        return "🎉"
      case "cultural":
        return "💃"
      default:
        return "📍"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Travel Itinerary</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create New Itinerary
        </Button>
      </div>

      <div className="space-y-6">
        {itineraries.map((itinerary) => (
          <Card key={itinerary.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl">{itinerary.title}</CardTitle>
                    <Badge className={getStatusColor(itinerary.status)}>
                      {itinerary.status.charAt(0).toUpperCase() + itinerary.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{itinerary.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Itinerary Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{itinerary.duration}</p>
                    <p className="text-muted-foreground">Duration</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{itinerary.participants} people</p>
                    <p className="text-muted-foreground">Travelers</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{itinerary.monasteries.length} monasteries</p>
                    <p className="text-muted-foreground">Locations</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 text-muted-foreground">💰</div>
                  <div>
                    <p className="font-medium text-foreground">{itinerary.totalBudget}</p>
                    <p className="text-muted-foreground">Budget</p>
                  </div>
                </div>
              </div>

              {/* Monasteries */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Monasteries to Visit</h4>
                <div className="flex flex-wrap gap-2">
                  {itinerary.monasteries.map((monastery) => (
                    <Badge key={monastery} variant="secondary" className="bg-primary/10 text-primary">
                      {monastery}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Activities Timeline */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Activities Timeline</h4>
                <div className="space-y-3">
                  {itinerary.activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {activity.day}
                      </div>
                      <div className="text-lg">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground">{activity.title}</h5>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {activity.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {activity.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button className="flex-1">View Full Itinerary</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
