import { useState, useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Box, Sphere, Cylinder } from "@react-three/drei"
import * as THREE from "three"

interface InteractiveShapeProps {
  position: [number, number, number]
  shape: "box" | "sphere" | "cylinder"
  content: {
    title: string
    description: string
    imageUrl?: string
  }
  isNightMode: boolean
}

export default function InteractiveShape({ position, shape, content, isNightMode }: InteractiveShapeProps) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const meshRef = useRef<THREE.Mesh>(null)
  const textureLoader = new THREE.TextureLoader()
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    if (content.imageUrl) {
      textureLoader.load(content.imageUrl, (loadedTexture) => {
        setTexture(loadedTexture)
      })
    }
  }, [content.imageUrl, textureLoader])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  const mainColor = isNightMode ? "#38BDF8" : "#3B82F6"
  const accentColor = isNightMode ? "#A78BFA" : "#8B5CF6"
  const textColor = isNightMode ? "#E0F2FE" : "#1E40AF"

  const ShapeComponent = shape === "box" ? Box : shape === "sphere" ? Sphere : Cylinder

  return (
    <group position={position}>
      <ShapeComponent
        ref={meshRef}
        args={shape === "box" ? [1, 1, 1] : shape === "sphere" ? [0.5, 32, 32] : [0.5, 0.5, 1, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial color={hovered ? accentColor : mainColor} map={texture || null} />
      </ShapeComponent>
      {clicked && (
        <>
          <Text position={[0, 1.2, 0]} fontSize={0.2} color={textColor} anchorX="center" anchorY="middle" maxWidth={2}>
            {content.title}
          </Text>
          <Text position={[0, 0.8, 0]} fontSize={0.1} color={textColor} anchorX="center" anchorY="middle" maxWidth={2}>
            {content.description}
          </Text>
        </>
      )}
    </group>
  )
}

