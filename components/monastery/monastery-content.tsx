import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Star, Calendar } from "lucide-react"

interface MonasteryContentProps {
  monastery: {
    name: string
    description: string
    history: string
    keyFeatures: string[]
    upcomingEvents: Array<{
      name: string
      date: string
      description: string
    }>
  }
}

export function MonasteryContent({ monastery }: MonasteryContentProps) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            About {monastery.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-pretty">{monastery.description}</p>
        </CardContent>
      </Card>

      {/* History */}
      <Card>
        <CardHeader>
          <CardTitle>History & Significance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-pretty">{monastery.history}</p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="h-5 w-5 mr-2" />
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {monastery.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-pretty">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Events & Festivals
          </CardTitle>
          <CardDescription>Experience authentic Buddhist ceremonies and cultural celebrations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {monastery.upcomingEvents.map((event, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <h4 className="font-semibold text-balance">{event.name}</h4>
                <Badge variant="outline">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-pretty">{event.description}</p>
              {index < monastery.upcomingEvents.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
