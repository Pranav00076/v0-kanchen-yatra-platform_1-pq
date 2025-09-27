import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, Camera, Shirt, Volume2, Clock, Heart } from "lucide-react"

export function VisitorGuidelines() {
  const guidelines = [
    {
      icon: Shirt,
      title: "Dress Code",
      description: "Modest clothing required. Cover shoulders and knees. Remove shoes before entering prayer halls.",
      type: "required",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Photography allowed in courtyards. No flash photography inside prayer halls. Ask permission before photographing monks.",
      type: "restricted",
    },
    {
      icon: Volume2,
      title: "Noise Level",
      description:
        "Maintain silence in prayer halls. Speak in whispers. Turn off mobile phones or keep on silent mode.",
      type: "required",
    },
    {
      icon: Clock,
      title: "Visiting Hours",
      description:
        "Open daily 6:00 AM - 6:00 PM. Prayer times: 6:00 AM, 12:00 PM, 6:00 PM. Visitors welcome during non-prayer times.",
      type: "info",
    },
    {
      icon: Heart,
      title: "Respectful Behavior",
      description:
        "Walk clockwise around stupas and prayer wheels. Do not touch religious artifacts. Bow slightly when greeting monks.",
      type: "required",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Visitor Guidelines & Etiquette
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert className="border-yellow-200 bg-yellow-50">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <strong>Important:</strong> This is a sacred space actively used for worship and meditation. Please follow
            all guidelines to show respect for the monks and the Buddhist tradition.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          {guidelines.map((guideline, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-full ${
                    guideline.type === "required"
                      ? "bg-red-100 text-red-600"
                      : guideline.type === "restricted"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <guideline.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{guideline.title}</h4>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        guideline.type === "required"
                          ? "border-red-200 text-red-700"
                          : guideline.type === "restricted"
                            ? "border-yellow-200 text-yellow-700"
                            : "border-blue-200 text-blue-700"
                      }`}
                    >
                      {guideline.type === "required"
                        ? "Required"
                        : guideline.type === "restricted"
                          ? "Restricted"
                          : "Info"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">{guideline.description}</p>
                </div>
              </div>
              {index < guidelines.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        <Alert className="border-green-200 bg-green-50">
          <Heart className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>Cultural Tip:</strong> A small donation to the monastery is appreciated and helps maintain this
            sacred site. Donation boxes are available near the entrance.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
