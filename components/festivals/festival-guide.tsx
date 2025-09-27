"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Camera, Gift, Heart, Info, Users } from "lucide-react"

const guideItems = [
  {
    icon: BookOpen,
    title: "Festival Etiquette",
    description: "Learn proper behavior and customs during monastery festivals",
    badge: "Essential",
  },
  {
    icon: Camera,
    title: "Photography Guidelines",
    description: "Understand when and where photography is permitted",
    badge: "Important",
  },
  {
    icon: Gift,
    title: "Offering Traditions",
    description: "Traditional gifts and offerings for different ceremonies",
    badge: "Cultural",
  },
  {
    icon: Users,
    title: "Community Participation",
    description: "How visitors can respectfully join in celebrations",
    badge: "Participation",
  },
]

const quickTips = [
  "Dress modestly and remove shoes when entering prayer halls",
  "Maintain silence during prayer ceremonies",
  "Follow the guidance of monastery officials",
  "Bring small offerings like fruits or flowers",
  "Arrive early for better viewing positions",
]

export function FestivalGuide() {
  return (
    <div className="space-y-6">
      {/* Festival Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Festival Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {guideItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <item.icon className="h-5 w-5 text-primary mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {item.badge}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            Download Full Guide
          </Button>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Quick Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {quickTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Our local guides are here to help you make the most of your festival experience.
          </p>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            Contact Local Guide
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
