import { Text, Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

const blogPosts = [
  {
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building your first component.",
  },
  {
    title: "Advanced Three.js Techniques",
    excerpt: "Dive deep into Three.js and discover advanced 3D rendering techniques.",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Explore upcoming trends and technologies shaping the future of web development.",
  },
]

export default function Blog() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {blogPosts.map((post, index) => (
        <group key={index} position={[0, -index * 2.5, 0]}>
          <Plane args={[4, 1.5]} position={[0, 0, -3]}>
            <meshStandardMaterial color={`hsl(${index * 120}, 70%, 50%)`} />
          </Plane>
          <Text position={[0, 0.5, -2]} fontSize={0.3} color="white" anchorX="center" anchorY="middle" maxWidth={3.5}>
            {post.title}
          </Text>
          <Text position={[0, -0.2, -2]} fontSize={0.15} color="white" anchorX="center" anchorY="middle" maxWidth={3.5}>
            {post.excerpt}
          </Text>
        </group>
      ))}
    </group>
  )
}

