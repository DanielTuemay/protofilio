import { Text, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

export default function Contact() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <group>
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, -5]}>
        <meshStandardMaterial color="hotpink" />
      </Sphere>
      <Text position={[0, 2, -2]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        Contact Me
      </Text>
      <Text position={[0, 1, -2]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        Email: example@email.com
      </Text>
      <Text position={[0, 0, -2]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        Phone: (123) 456-7890
      </Text>
      <Text position={[0, -1, -2]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        LinkedIn: linkedin.com/in/yourprofile
      </Text>
    </group>
  )
}

