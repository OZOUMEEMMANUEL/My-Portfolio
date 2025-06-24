import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brown - Embedded Systems & Web Developer",
  description:
    "Passionate embedded systems and web developer specializing in Arduino, IoT, robotics, and modern web applications. From smart home automation to dynamic web platforms.",
  keywords:
    "embedded systems, web developer, Arduino, IoT, robotics, JavaScript, Python, C++, web development, automation",
  authors: [{ name: "Brown" }],
  creator: "Brown",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brown-portfolio.vercel.app",
    title: "Brown - Embedded Systems & Web Developer",
    description:
      "Passionate embedded systems and web developer specializing in Arduino, IoT, robotics, and modern web applications.",
    siteName: "Brown Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brown - Embedded Systems & Web Developer",
    description:
      "Passionate embedded systems and web developer specializing in Arduino, IoT, robotics, and modern web applications.",
    creator: "@brown_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
