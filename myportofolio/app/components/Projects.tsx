import { Text, Cylinder } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

const projects = [
  { name: "Project 1", description: "A web application built with React and Node.js" },
  { name: "Project 2", description: "An e-commerce platform using Next.js and Stripe" },
  { name: "Project 3", description: "A 3D visualization tool with Three.js and WebGL" },
]

export default function Projects() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => (
        <group
          key={index}
          position={[Math.cos((index * Math.PI * 2) / 3) * 3, 0, Math.sin((index * Math.PI * 2) / 3) * 3]}
        >
          <Cylinder args={[0.5, 0.5, 2, 32]}>
            <meshStandardMaterial color={`hsl(${index * 120}, 70%, 50%)`} />
          </Cylinder>
          <Text position={[0, 1.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
            {project.name}
          </Text>
          <Text position={[0, -1.5, 0]} fontSize={0.15} color="white" anchorX="center" anchorY="middle" maxWidth={2}>
            {project.description}
          </Text>
        </group>
      ))}
    </group>
  )
}

