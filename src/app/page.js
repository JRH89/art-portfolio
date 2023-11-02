'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const images = [
  {
    src: "/images/Interior_8.png",
    description: "Created with Blender",
  },
  {
    src: "/images/Interior_1.png",
    description: "Created with Blender",
  },
  {
    src: "/images/Interior_4.png",
    description: "Created with Blender",
  },
  {
    src: "/images/003.png",
    description: "Created with Blender and Unreal Engine",
  },
  {
    src: "/images/004.png",
    description: "Created with Blender and Unreal Engine",
  },
  {
    src: "/images/008.png",
    description: "Created with Blender",
  },
  {
    src: "/images/009.png",
    description: "Created with Blender",
  },
  {
    src: "/images/001.png",
    description: "Created with Blender",
  },
  {
    src: "/images/006.png",
    description: "Created with Blender and Unreal Engine",
  },
  {
    src: "/images/007.png",
    description: "Created with Blender and Unreal Engine",
  },
  {
    src: "/images/010.png",
    description: "Created with Blender and Unreal Engine",
  },
]

const videos = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-24_3.mp4?alt=media&token=baeb9dbf-8849-4f53-8365-cd3f94fd74f4",
    description: "Created with Blender, Unreal Engine, and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-7_3_HD_3.mp4?alt=media&token=dd5f88d1-a82f-4e2d-a5ee-e70347247d7e",
    description: "Created with Blender, Unreal Engine, and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-13_HD_8.mp4?alt=media&token=e940a3c1-2136-4dce-a54f-1498a0229381",
    description: "Created with Blender, Unreal Engine, and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2F10-9_2..mp4?alt=media&token=6f98b494-703e-4e69-9d04-0c4e9a34120d",
    description: "Created with Blender, Unreal Engine, and ffmpeg",
  },
]

const games = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2Fgames_1.mp4?alt=media&token=11c27fdf-bc40-43d6-8ea0-584c4f62bf3b",
    description: "Wall climb and ledge mantle mechanic. Unreal Engine 5.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2Flinkedinpost.mp4?alt=media&token=9db79c32-9b36-491b-855c-07928c1c098e",
    description: "Voxel cave system with moving platforms. Unreal Engine 5.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2FFireball%20Attack%20and%20Random%20Loot%20Drop.mp4?alt=media&token=ade637ca-7866-4f19-a9b5-3d78b8cad85b",
    description: "Fireball attack particle system and random loot drop from enemy. Unreal Engine 5.",
  },
{
url:"https://www.youtube.com/embed/eQgwyk0FoWI?si=-82UBp6X8D5N0q2E",
description:"Dynamic weather system featuring rain storms, snow storms, fog, and sfx. Created with Unreal Engine 5.",
},
]

export default function Home() {
  // state variables
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentGameIndex, setCurrentGameIndex] = useState(0)

  // Image button handlers
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // Video button handlers
  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  // Game button handlers
  const previousGame = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length)
  }

  const nextGame = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex + 1) % games.length)
  }

  return (
    <div className="bg-neutral-950 pt-2">
      {/* Hero Section */}
      <section className="bg-gray-900 rounded-md text-white pb-5 pt-3 max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5">Jared Robert Hooker</h1>
          <Image
            alt="profile-pic"
            className="mx-auto rounded-lg mb-5 border border-gray-400"
            width={200}
            height={200}
            src={"/profilepic.png"}
          />
          <p className="text-md mb-4 mx-5 text-justify">
            I specialize in using Blender and Unreal Engine to create outstanding 3D models, immersive environments, captivating animated videos, and entertaining video games.
          </p>
          <div>
</div>
          <div className="border mx-5 border-gray-400 rounded-lg mb-4">
            <table className="w-full mt-2 text-sm mx-auto mb-5 text-center">
              <tr>
                <td class="w-1/3 p-2">3D Modeling</td>
                <td class="w-1/3 p-2">Material Creation</td>
                <td class="w-1/3 p-2">Animation</td>
              </tr>
              <tr>
                <td class="w-1/3 p-2">Programming / Mechanics</td>
                <td class="w-1/3 p-2">Texturing</td>
                <td class="w-1/3 p-2">Level Design</td>
              </tr>
              <tr>
                <td class="w-1/3 p-2">Lighting and Rendering</td>
                <td class="w-1/3 p-2">Particle Systems</td>
                <td class="w-1/3 p-2">Shading and Texturing</td>
              </tr>
              <tr>
                <td class="w-1/3 p-2">Game Asset Optimization</td>
                <td class="w-1/3 p-2">Audio Integration</td>
                <td class="w-1/3 p-2">UI Design</td>
              </tr>
              <tr>
                <td class="w-1/3 p-2">Version Control (GIT)</td>
                <td class="w-1/3 p-2"> </td>
                <td class="w-1/3 p-2">Video Encoding / Editing</td>
              </tr>
            </table>
          </div>
          <div className="flex flex-col gap-4 max-w-2xl px-5">
            <Link legacyBehavior href="https://calendly.com/jaredhooker/30min">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Schedule Interview</a>
            </Link>
            <a href="/Game_Resume.pdf" className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded" download>
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-5 px-2 border-b-2 mt-2 border-neutral-950 bg-gray-800 text-white rounded-t max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Images</h2>
          <div className="flex justify-center mb-5">
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={previousImage}>
              Previous
            </button>
            <button className="bg-blue-500 w-full hover-bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextImage}>
              Next
            </button>
          </div>
          <div className="">
            <Image
              preload="true"
              width={1920}
              height={1080}
              src={images[currentImageIndex].src}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full max-w-2xl mx-auto rounded-md"
            />
          </div>
          <p className="text-sm my-4">{images[currentImageIndex].description}</p>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-10 px-2 bg-gray-800 text-white border-b-2 border-neutral-950 max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Animations</h2>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 w-full" onClick={previousVideo}>
              Previous
            </button>
            <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={nextVideo}>
              Next
            </button>
          </div>
          <div className="my-4">
            <video key={currentVideoIndex} preload="metadata" width={1920} height={1080} controls className="rounded-md w-full max-w-2xl mx-auto">
              <source src={videos[currentVideoIndex].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-sm my-4">{videos[currentVideoIndex].description}</p>
        </div>
      </section>

      {/* Game Gallery Section */}
      <section className="py-10 px-2 bg-gray-800 text-white rounded-b max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Games</h2>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 w-full" onClick={previousGame}>
              Previous
            </button>
            <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={nextGame}>
              Next
            </button>
          </div>
          <div className="my-4">
            <video key={currentGameIndex} preload="metadata" width={1920} height={1080} controls className="rounded-md w-full max-w-2xl mx-auto">
              <source src={games[currentGameIndex].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-sm my-4">{games[currentGameIndex].description}</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-2">
        <div className="bg-neutral-950 text-center duration-200">
          <a href="https://www.hookerhillstudios.com" className="hover-link transition duration-300">
            <span className="word">Hooker </span>
            <span className="word">Hill </span>
            <span className="word">Studios</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
