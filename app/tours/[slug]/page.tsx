import { MainNav } from "@/components/navigation/main-nav"
import { MainFooter } from "@/components/footer/main-footer"
import { MonasteryHeader } from "@/components/monastery/monastery-header"
import { MonasteryContent } from "@/components/monastery/monastery-content"
import { MonasterySidebar } from "@/components/monastery/monastery-sidebar"
import { AudioStoriesSection } from "@/components/monastery/audio-stories-section"
import { WeatherWidget } from "@/components/monastery/weather-widget"
import { VisitorGuidelines } from "@/components/monastery/visitor-guidelines"
import { VirtualTourModal } from "@/components/monastery/virtual-tour-modal"

// Mock data - in a real app this would come from a database
const monasteryData = {
  pemayangtse: {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    established: "1705",
    type: "Nyingma",
    altitude: "2085m",
    description:
      "One of the oldest and most important monasteries in Sikkim, Pemayangtse means 'Perfect Sublime Lotus' and represents the pinnacle of Buddhist architecture in the region.",
    images: [
      "/pemayangtse-monastery-sikkim.jpg",
      "/pemayangtse-interior-prayer-hall.jpg",
      "/pemayangtse-three-story-structure.jpg",
      "/pemayangtse-mountain-view.jpg",
      "/pemayangtse-monks-ceremony.jpg",
    ],
    history:
      "Founded in 1705 by Lama Lhatsun Chempo, Pemayangtse Monastery stands as a testament to the rich Buddhist heritage of Sikkim. The monastery was built to house only the 'ta-tshang' (pure monks) of the Nyingma sect, making it one of the most sacred sites in the region.",
    keyFeatures: [
      "Three-story wooden structure representing the three worlds",
      "Exquisite wall paintings and sculptures",
      "Sacred relics and ancient manuscripts",
      "Panoramic views of Kanchenjunga range",
    ],
    upcomingEvents: [
      {
        name: "Chaam Dance Festival",
        date: "2025-02-15",
        description: "Traditional masked dance performances by monks",
      },
      {
        name: "Buddha Purnima Celebration",
        date: "2025-05-12",
        description: "Special prayers and offerings ceremony",
      },
    ],
    audioStories: [
      {
        id: 1,
        title: "The History of Pemayangtse",
        duration: "12:34",
        narrator: "Lama Tenzin",
        description: "Discover the founding story and spiritual significance",
      },
      {
        id: 2,
        title: "Architecture and Symbolism",
        duration: "8:45",
        narrator: "Dr. Karma Wangchuk",
        description: "Understanding the three-story structure's meaning",
      },
      {
        id: 3,
        title: "Daily Life of Monks",
        duration: "15:20",
        narrator: "Geshe Lobsang",
        description: "A glimpse into monastic routines and practices",
      },
    ],
  },
}

export default function MonasteryDetailPage({ params }: { params: { slug: string } }) {
  const monastery = monasteryData[params.slug as keyof typeof monasteryData]

  if (!monastery) {
    return <div>Monastery not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <MonasteryHeader monastery={monastery} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <MonasteryContent monastery={monastery} />
              <AudioStoriesSection stories={monastery.audioStories} />
              <VisitorGuidelines />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <MonasterySidebar monastery={monastery} />
              <WeatherWidget location={monastery.location} />
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
      <VirtualTourModal monasteryId={monastery.id} />
    </div>
  )
}
