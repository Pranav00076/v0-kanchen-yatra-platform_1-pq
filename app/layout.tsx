import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kanchen Yatra - Discover Sacred Sikkim",
  description:
    "Explore the spiritual heritage of Sikkim through immersive virtual tours, authentic local experiences, and cultural preservation.",
  keywords: "Sikkim, monasteries, heritage, travel, virtual tours, Buddhism, culture",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans">{children}</body>
    </html>
  )
}
