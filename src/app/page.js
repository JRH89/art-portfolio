'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const images = [
  {
    src: "/Sample/1A.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/1B.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/1B-Rear.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/2A.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/2B.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/2B-Rear.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/3A.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/3B.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/I3.png",
    description: "Created with Blender",
  },

  {
    src: "/Sample/I1.png",
    description: "Created with Blender",
  },
  {
    src: "/Sample/I2.png",
    description: "Created with Blender",
  },
]

const videos = [
  {
    url: "/Sample/360.mp4",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "/Sample/V1.mp4",
    description: "Created with Blender and ffmpeg",
  },
  {
    url: "/Sample/V2.mp4",
    description: "Created with Blender and ffmpeg",
  },
]

export default function Home() {
  // state variables
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

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

  return (
    <div className="bg-neutral-950 m-1 pt-5">
      {/*Section 1 */}
      <section className="bg-neutral-900 rounded-md p-1 border border-neutral-200 text-neutral-200 pb-5  justify-center w-full  pt-3 max-w-4xl mx-auto">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5">Jared Hooker</h1>
          <Image
            alt="profile-pic"
            quality={100}
            className="mx-auto rounded-lg mb-5 border border-gray-400"
            width={200}
            height={200}
            src={"/profilepic.png"}
          />
          <p className="text-md mb-4 mx-3 text-justify">
            Employing a meticulous approach, I ensure the development of lifelike environments characterized by precise lighting, intricate textures, and well-thought-out spatial arrangements. My portfolio serves as a testament to my unwavering dedication to excellence, with each project showcasing a blend of technical proficiency and a keen aesthetic sense.
          </p>
          <div>
          </div>
          <div className="border mx-3 border-gray-400 rounded-lg mb-4">
            <table className="w-full mt-2 text-sm mx-auto mb-5 text-center">
              <tr>
                <td class="w-1/3 p-2">3D Modeling</td>
                <td class="w-1/3 p-2">Materials/Textures</td>
                <td class="w-1/3 p-2">Animation</td>
              </tr>
              <tr>
                <td class="w-1/3 p-2">Lighting and Rendering</td>
                <td class="w-1/3 p-2">Shading</td>
                <td class="w-1/3 p-2">Video Encoding / Editing</td>
              </tr>
            </table>
          </div>
          <div className="flex flex-col gap-4 mx-auto max-w-4xl px-3">
            <Link legacyBehavior href="https://calendly.com/jaredhooker/30min">
              <a className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded">Schedule Interview</a>
            </Link>
            <a href="https://www.hookerhillstudios.com/arcvizquote" className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded" download>
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-4 px-2  mt-8 border-neutral-200 border  bg-neutral-900 text-neutral-200 rounded mb-8 max-w-4xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 underline">Images</h2>

          <div className="">
            <Image
              preload="true"
              quality={100}
              width={1920}
              height={1080}
              src={images[currentImageIndex].src}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full max-w-4xl mx-auto rounded-md"
            />
          </div>
          <p className="text-sm my-4">{images[currentImageIndex].description}</p>
          <div className="flex justify-center mb-5">
            <button className="bg-cyan-700 w-full hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded mr-2" onClick={previousImage}>
              Previous
            </button>
            <button className="bg-cyan-700 w-full hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded" onClick={nextImage}>
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="py-4 rounded px-2 bg-neutral-900 border-neutral-200 border text-neutral-200 max-w-4xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 underline">Animations</h2>

          <div className="my-4">
            <video key={currentVideoIndex} preload="metadata" width={1920} height={1080} controls className="rounded-md w-full max-w-4xl mx-auto">
              <source src={videos[currentVideoIndex].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-sm my-4">{videos[currentVideoIndex].description}</p>
          <div className="flex justify-center">
            <button className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded mr-2 w-full" onClick={previousVideo}>
              Previous
            </button>
            <button className="bg-cyan-700 hover:bg-cyan-800 text-neutral-200 font-bold py-2 px-4 rounded w-full" onClick={nextVideo}>
              Next
            </button>
          </div>
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
