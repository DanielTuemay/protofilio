"use client"

import dynamic from "next/dynamic"
import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Loading from "./components/Loading"
import Navigation from "./components/Navigation"
import ProfileImage from "./components/ProfileImage"
import DayNightToggle from "./components/DayNightToggle"

const Scene = dynamic(() => import("./components/Scene"), { ssr: false })
const About = dynamic(() => import("./components/About"), { ssr: false })
const Contact = dynamic(() => import("./components/Contact"), { ssr: false })
const Projects = dynamic(() => import("./components/Projects"), { ssr: false })
const Plans = dynamic(() => import("./components/Plans"), { ssr: false })
const Blog = dynamic(() => import("./components/Blog"), { ssr: false })

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isNightMode, setIsNightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("night-mode", isNightMode)
  }, [isNightMode])

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About isNightMode={isNightMode} />
      case "contact":
        return <Contact isNightMode={isNightMode} />
      case "projects":
        return <Projects isNightMode={isNightMode} />
      case "plans":
        return <Plans isNightMode={isNightMode} />
      case "blog":
        return <Blog isNightMode={isNightMode} />
      default:
        return <Scene isNightMode={isNightMode} />
    }
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4">
        <ProfileImage />
        <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} isNightMode={isNightMode} />
        <DayNightToggle isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      </div>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={isNightMode ? 0.3 : 0.5} />
        <pointLight
          position={[10, 10, 10]}
          intensity={isNightMode ? 0.7 : 1}
          color={isNightMode ? "#38BDF8" : "#3B82F6"}
        />
        <Suspense fallback={<Loading />}>
          {renderPage()}
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

