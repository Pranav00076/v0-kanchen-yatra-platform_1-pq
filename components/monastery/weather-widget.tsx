"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from "lucide-react"

interface WeatherWidgetProps {
  location: string
}

export function WeatherWidget({ location }: WeatherWidgetProps) {
  // Mock weather data - in a real app this would come from a weather API
  const currentWeather = {
    temperature: 18,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    icon: Cloud,
  }

  const forecast = [
    { day: "Today", high: 22, low: 15, icon: Cloud },
    { day: "Tomorrow", high: 20, low: 12, icon: CloudRain },
    { day: "Thu", high: 24, low: 16, icon: Sun },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Thermometer className="h-5 w-5 mr-2" />
          Weather in {location}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Weather */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center">
            <currentWeather.icon className="h-12 w-12 text-primary" />
          </div>
          <div className="text-3xl font-bold">{currentWeather.temperature}°C</div>
          <div className="text-sm text-muted-foreground">{currentWeather.condition}</div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <Droplets className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-muted-foreground">Humidity</span>
            <span className="ml-auto font-medium">{currentWeather.humidity}%</span>
          </div>
          <div className="flex items-center">
            <Wind className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-muted-foreground">Wind</span>
            <span className="ml-auto font-medium">{currentWeather.windSpeed} km/h</span>
          </div>
        </div>

        {/* 3-Day Forecast */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">3-Day Forecast</h4>
          {forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground w-16">{day.day}</span>
              <day.icon className="h-4 w-4 text-primary" />
              <div className="flex items-center space-x-2">
                <span className="font-medium">{day.high}°</span>
                <span className="text-muted-foreground">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs text-muted-foreground text-center pt-2">Best visiting hours: 6:00 AM - 6:00 PM</div>
      </CardContent>
    </Card>
  )
}
