import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PromoteLocal - Local Business Marketing Solutions',
  description: 'Professional digital marketing services to help local businesses grow their online presence and connect with their community.',
  keywords: 'local business marketing, SEO, social media, digital marketing, PPC, business promotion',
  openGraph: {
    title: 'PromoteLocal - Local Business Marketing Solutions',
    description: 'Professional digital marketing services for local businesses',
    url: 'https://promoteyourbusinesslocally.com',
    siteName: 'PromoteLocal',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
