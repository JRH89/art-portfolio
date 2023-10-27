'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const videos = [
  "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-24_3.mp4?alt=media&token=baeb9dbf-8849-4f53-8365-cd3f94fd74f4",
  "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-7_3_HD_3.mp4?alt=media&token=dd5f88d1-a82f-4e2d-a5ee-e70347247d7e",
  "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-13_HD_8.mp4?alt=media&token=e940a3c1-2136-4dce-a54f-1498a0229381",
  "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2F10-9_2..mp4?alt=media&token=6f98b494-703e-4e69-9d04-0c4e9a34120d",
]

const images = [
  "/images/Interior_1.png",
  "/images/003.png",
  "/images/004.png",
  "/images/005.png",
  "/images/008.png",
  "/images/009.png",
  "/images/001.png",
  "/images/006.png",
  "/images/007.png",
  "/images/010.png",
  "/images/Trashbag.png",
]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  return (
    <div className="bg-neutral-950 pt-2">
      {/* Hero Section */}
      <section className="bg-gray-900 rounded-md text-white pb-10 pt-5 max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Jared Robert Hooker</h1>
          <p className="text-lg mb-8">
            Welcome to my collection of 3D models and video animations created with Blender and Unreal Engine 5.
          </p>

          <Link legacyBehavior href="https://calendly.com/jaredhooker/30min">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Schedule Interview</a>
          </Link>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-5 px-2 bg-gray-800 text-white rounded-t max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
          <div className="flex justify-center">
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={previousImage}>
              Previous
            </button>
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextImage}>
              Next
            </button>
          </div>
          <div className="my-4">
            <Image
              width={1920}
              height={1080}
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full max-w-2xl mx-auto rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-5 px-2 bg-gray-800 text-white rounded-b max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Video Gallery</h2>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 w-full" onClick={previousVideo}>
              Previous
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={nextVideo}>
              Next
            </button>
          </div>
          <div className="my-4">
            <video key={currentVideoIndex} preload="metadata" width={1920} height={1080} controls className="rounded-md w-full max-w-2xl mx-auto">
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  )
}