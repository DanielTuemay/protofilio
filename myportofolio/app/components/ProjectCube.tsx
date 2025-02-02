import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import type * as THREE from "three"

interface ProjectCubeProps {
  project: { id: number; title: string; description: string }
  position: [number, number, number]
  isHovered: boolean
  onHover: () => void
  onUnhover: () => void
}

export default function ProjectCube({ project, position, isHovered, onHover, onUnhover }: ProjectCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  const scale = isExpanded ? 1.5 : isHovered ? 1.2 : 1

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        scale={[scale, scale, scale]}
        onClick={handleClick}
        onPointerOver={onHover}
        onPointerOut={onUnhover}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
      </mesh>
      {isExpanded && (
        <Text position={[0, 1.5, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
          {project.title}
          {"\n"}
          {project.description}
        </Text>
      )}
    </group>
  )
}

