"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, Volume2, Clock, User } from "lucide-react"

interface AudioStory {
  id: number
  title: string
  duration: string
  narrator: string
  description: string
}

interface AudioStoriesSectionProps {
  stories: AudioStory[]
}

export function AudioStoriesSection({ stories }: AudioStoriesSectionProps) {
  const [currentPlaying, setCurrentPlaying] = React.useState<number | null>(null)
  const [progress, setProgress] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handlePlayPause = (storyId: number) => {
    if (currentPlaying === storyId) {
      setIsPlaying(!isPlaying)
    } else {
      setCurrentPlaying(storyId)
      setIsPlaying(true)
      setProgress(0)
    }
  }

  // Simulate progress for demo
  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            setCurrentPlaying(null)
            return 0
          }
          return prev + 1
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentPlaying])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Volume2 className="h-5 w-5 mr-2" />
          Audio Stories & Podcasts
        </CardTitle>
        <CardDescription>
          Listen to captivating stories about the monastery's history, traditions, and spiritual significance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className={`p-4 rounded-lg border transition-all ${
              currentPlaying === story.id ? "bg-primary/5 border-primary/20" : "bg-muted/20"
            }`}
          >
            <div className="flex items-start gap-4">
              <Button
                variant={currentPlaying === story.id ? "default" : "outline"}
                size="sm"
                className="rounded-full w-12 h-12 p-0 flex-shrink-0"
                onClick={() => handlePlayPause(story.id)}
              >
                {currentPlaying === story.id && isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" />
                )}
              </Button>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm mb-1 line-clamp-1">{story.title}</h4>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2 text-pretty">{story.description}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {story.narrator}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {story.duration}
                  </div>
                </div>

                {currentPlaying === story.id && (
                  <div className="space-y-2">
                    <Progress value={progress} className="h-1" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        {Math.floor((progress / 100) * 12)}:
                        {String(Math.floor(((progress / 100) * 34) % 60)).padStart(2, "0")}
                      </span>
                      <span>{story.duration}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center pt-4">
          <Button variant="outline" size="sm" className="bg-transparent">
            View All Audio Content
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
