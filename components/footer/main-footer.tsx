"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Contrast } from "lucide-react"

export function MainFooter() {
  const [highContrast, setHighContrast] = React.useState(false)

  React.useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-xl">Kanchen Yatra</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preserving and sharing the sacred heritage of Sikkim through immersive digital experiences and authentic
              cultural connections.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-foreground transition-colors">
                  Virtual Tours
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-muted-foreground hover:text-foreground transition-colors">
                  Local Experiences
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="text-muted-foreground hover:text-foreground transition-colors">
                  Festivals & Events
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-muted-foreground hover:text-foreground transition-colors">
                  Digital Library
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/booking" className="text-muted-foreground hover:text-foreground transition-colors">
                  Book Services
                </Link>
              </li>
              <li>
                <Link href="/itinerary" className="text-muted-foreground hover:text-foreground transition-colors">
                  Smart Planner
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-foreground transition-colors">
                  Safety Hub
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rules & Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#responsible-tourism"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Responsible Tourism
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Accessibility */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@kanchenyatra.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 3592 123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Gangtok, Sikkim, India</span>
              </div>
            </div>

            <Separator />

            {/* Accessibility Toggle */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Accessibility</h4>
              <div className="flex items-center space-x-2">
                <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
                <Label htmlFor="high-contrast" className="text-sm flex items-center space-x-1">
                  <Contrast className="h-3 w-3" />
                  <span>High Contrast</span>
                </Label>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Kanchen Yatra. All rights reserved. Built with respect for Sikkimese culture and heritage.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
