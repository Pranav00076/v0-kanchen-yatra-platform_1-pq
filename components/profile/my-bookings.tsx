import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Phone, MessageCircle } from "lucide-react"

export function MyBookings() {
  const bookings = [
    {
      id: 1,
      title: "Traditional Thangka Painting Workshop",
      type: "Experience",
      status: "confirmed",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      location: "Pemayangtse Monastery",
      participants: 2,
      totalPrice: "₹7,000",
      bookingRef: "KY-EXP-001234",
      guide: {
        name: "Lama Tenzin Norbu",
        phone: "+91 98765 43210",
      },
      image: "/thangka-painting-workshop.jpg",
    },
    {
      id: 2,
      title: "Monastery Photography Masterclass",
      type: "Experience",
      status: "upcoming",
      date: "2024-01-22",
      time: "6:00 AM - 12:00 PM",
      location: "Rumtek & Enchey Monasteries",
      participants: 1,
      totalPrice: "₹4,200",
      bookingRef: "KY-EXP-001235",
      guide: {
        name: "Pemba Sherpa",
        phone: "+91 98765 43211",
      },
      image: "/rumtek-monastery-sikkim.jpg",
    },
    {
      id: 3,
      title: "Himalayan Eco Lodge",
      type: "Accommodation",
      status: "pending",
      date: "2024-02-05",
      time: "Check-in: 2:00 PM",
      location: "Near Tashiding Monastery",
      participants: 2,
      totalPrice: "₹8,500",
      bookingRef: "KY-ACC-001236",
      nights: 3,
      image: "/himalayan-eco-lodge-sikkim.jpg",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">My Bookings</h2>
        <Button variant="outline">View All Bookings</Button>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-48 aspect-video md:aspect-square relative overflow-hidden">
                <img
                  src={booking.image || "/placeholder.svg"}
                  alt={booking.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </Badge>
                </div>
              </div>

              <div className="flex-1 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{booking.title}</h3>
                      <p className="text-sm text-muted-foreground">Booking Ref: {booking.bookingRef}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(booking.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {booking.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {booking.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {booking.participants} {booking.participants === 1 ? "person" : "people"}
                        {booking.nights && ` • ${booking.nights} nights`}
                      </div>
                    </div>

                    {booking.guide && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Guide:</span>
                        <span className="font-medium text-foreground">{booking.guide.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{booking.totalPrice}</p>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                    </div>

                    <div className="flex gap-2">
                      {booking.guide && (
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4 mr-1" />
                          Call Guide
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {booking.status === "pending" && <Button size="sm">Complete Payment</Button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
