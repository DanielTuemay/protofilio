import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import type * as THREE from "three"
import InteractiveShape from "./InteractiveShape"

interface SceneProps {
  isNightMode: boolean
}

export default function Scene({ isNightMode }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.1) * 0.05
    }
  })

  const textColor = isNightMode ? "#E0F2FE" : "#1E40AF"

  const content = [
    {
      title: "Project 1",
      description: "A web application built with React and Node.js",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Project 2",
      description: "Mobile app developed using React Native",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Project 3",
      description: "Data visualization dashboard with D3.js",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <group ref={groupRef}>
      <Text position={[0, 2, -2]} fontSize={0.5} color={textColor} anchorX="center" anchorY="middle">
        Welcome to My Portfolio
      </Text>
      <Text position={[0, 1.5, -2]} fontSize={0.3} color={textColor} anchorX="center" anchorY="middle">
        Click on the shapes to explore my projects
      </Text>
      <InteractiveShape position={[-2, 0, -3]} shape="box" content={content[0]} isNightMode={isNightMode} />
      <InteractiveShape position={[0, 0, -3]} shape="sphere" content={content[1]} isNightMode={isNightMode} />
      <InteractiveShape position={[2, 0, -3]} shape="cylinder" content={content[2]} isNightMode={isNightMode} />
    </group>
  )
}

