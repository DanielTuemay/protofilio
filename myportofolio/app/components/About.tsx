import { Text } from "@react-three/drei"
import InteractiveShape from "./InteractiveShape"

interface AboutProps {
  isNightMode: boolean
}

export default function About({ isNightMode }: AboutProps) {
  const textColor = isNightMode ? "#E0F2FE" : "#1E40AF"

  const content = {
    title: "About Me",
    description:
      "I'm a passionate developer with experience in creating innovative web solutions. My skills include React, Three.js, and Next.js.",
    imageUrl: "/placeholder.svg?height=200&width=200",
  }

  return (
    <group>
      <Text position={[0, 2, -2]} fontSize={0.7} color={textColor} anchorX="center" anchorY="middle">
        About Me
      </Text>
      <InteractiveShape position={[0, 0, -3]} shape="box" content={content} isNightMode={isNightMode} />
    </group>
  )
}

