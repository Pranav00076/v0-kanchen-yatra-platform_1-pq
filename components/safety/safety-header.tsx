import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Phone, AlertTriangle, MapPin } from "lucide-react"

export function SafetyHeader() {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 via-green-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-foreground">Safety Hub</h1>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Your comprehensive guide to safe and responsible travel in Sikkim's mountainous monastery regions
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800">
              <Phone className="h-4 w-4 mr-2" />
              24/7 Emergency Support
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-green-100 text-green-800">
              <MapPin className="h-4 w-4 mr-2" />
              Location-based Alerts
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-orange-100 text-orange-800">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Real-time Updates
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Emergency Contacts
            </Button>
            <Button size="lg" variant="outline">
              Download Safety Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
