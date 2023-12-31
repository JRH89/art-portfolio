'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const images = [
  {
    src: "/images/I3-12.png",
    description: "Created with Blender",
  },
  {
    src: "/images/Glass3.png",
    description: "Created with Blender",
  },
  {
    src: "/images/CheeseBurger-10.png",
    description: "Created with Blender",
  },
  {
    src: "/images/21.png",
    description: "Created with Blender",
  },
  {
    src: "/images/SapphireLot-1HD.png",
    description: "Created with Blender",
  },
  {
    src: "/images/1.png",
    description: "Created with Blender",
  },
  {
    src: "/images/KW.png",
    description: "Created with Blender and Unreal Engine",
  },

  {
    src: "/images/DarkHHSLogoFinal-Gray-HDpng.png",
    description: "Created with Blender",
  },
  {
    src: "/images/Leather-003.png",
    description: "Created with Blender",
  },
]

const videos = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2FOceanShark-HHS.mp4?alt=media&token=6177101d-2176-495d-89ae-ad7bc8ae45d3",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2FDiamondRing-Slow-HD.mp4?alt=media&token=94f5d932-304d-4d7b-8dc7-d866c43bf2e4",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2Fdonuts-slow5.mp4?alt=media&token=b0d00afa-1af1-4ff7-b44d-00a7d4f4d794",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2Fcheeseburger-slow.mp4?alt=media&token=224b7fca-b938-4fec-919f-ebd93b5a228f",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2FHHS-ChristmasVideo-HD-C.mp4?alt=media&token=6ae10d98-1165-4961-aa72-2911c337681e",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2Fsapphire-slow-4.mp4?alt=media&token=ea1b2aa5-1e0f-4eb0-bbfb-1df2f0b7ed37",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2FLeather-Slow-3.mp4?alt=media&token=2543f26e-23fd-407f-8e28-77131fea3188",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2F11-14_2..mp4?alt=media&token=6c62916f-7c3f-4d9c-b920-937882ef3e57",
    description: "Created with Blender, Unreal Engine, and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-7_3_HD_3.mp4?alt=media&token=dd5f88d1-a82f-4e2d-a5ee-e70347247d7e",
    description: "Created with Blender, Unreal Engine, and ffmpeg",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2F10-9_2..mp4?alt=media&token=6f98b494-703e-4e69-9d04-0c4e9a34120d",
    description: "Created with Blender, Unreal Engine, and ffmpeg",
  },
]

const games = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2F1_3.mp4?alt=media&token=260d24fc-04fb-48ad-977e-8f74f9fa44d6",
    description: "Wall climb, ledge mantle, random chest loot, environmental puzzles. Unreal Engine 5.",
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
    url: "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/videos%2FWeather%20system%20progress.mp4?alt=media&token=a8db830f-0a55-4215-9422-b5d2b7b76773",
    description: "Dynamic weather system featuring rain storms, snow storms, fog, and sfx. Created with Unreal Engine 5.",
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
    <div className="bg-neutral-950 m-1 pt-5">
      {/* Hero Section */}
      <section className="bg-neutral-900 rounded-md p-1 border border-neutral-200 text-neutral-200 pb-5 pt-3 max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5">Jared Hooker</h1>
          <Image
            alt="profile-pic"
            className="mx-auto rounded-lg mb-5 border border-gray-400"
            width={200}
            height={200}
            src={"/profilepic.png"}
          />
          <p className="text-md mb-4 mx-3 text-justify">
            I specialize in utilizing Blender and Unreal Engine to create outstanding 3D models, immersive environments, captivating animated videos, and entertaining games.
          </p>
          <div>
          </div>
          <div className="border mx-3 border-gray-400 rounded-lg mb-4">
            <table className="w-full mt-2 text-sm mx-auto mb-5 text-center">
              <tr>
                <td class="w-1/3 p-2">3D Modeling</td>
                <td class="w-1/3 p-2">Material Creation</td>
                <td class="w-1/3 p-2">Animation</td>
              </tr>
              <tr>
                <td class="w-1/3 p-2">Programming</td>
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
                <td class="w-1/3 p-2">Mechanics</td>
                <td class="w-1/3 p-2">Video Encoding / Editing</td>
              </tr>
            </table>
          </div>
          <div className="flex flex-col gap-4 max-w-2xl px-3">
            <Link legacyBehavior href="https://calendly.com/jaredhooker/30min">
              <a className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded">Schedule Interview</a>
            </Link>
            <a href="/Game_Resume.pdf" className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded" download>
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-10 px-2 border-b-2 mt-8 border-neutral-200 border  bg-neutral-900  text-neutral-200 rounded-t max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 underline">Images</h2>
          <div className="flex justify-center mb-5">
            <button className="bg-cyan-700 w-full hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded mr-2" onClick={previousImage}>
              Previous
            </button>
            <button className="bg-cyan-700 w-full hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded" onClick={nextImage}>
              Next
            </button>
          </div>
          <div className="">
            <Image
              preload="true"
              quality={100}
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
      <section className="py-10 px-2 bg-neutral-900 border-neutral-200 border text-neutral-200 border-b-2  max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 underline">Animations</h2>
          <div className="flex justify-center">
            <button className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded mr-2 w-full" onClick={previousVideo}>
              Previous
            </button>
            <button className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded w-full" onClick={nextVideo}>
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
      <section className="py-10 px-2 bg-neutral-900 border  border-t-2 border-neutral-200 text-neutral-200 rounded-b max-w-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 underline">Games</h2>
          <div className="flex justify-center">
            <button className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded mr-2 w-full" onClick={previousGame}>
              Previous
            </button>
            <button className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded w-full" onClick={nextGame}>
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
