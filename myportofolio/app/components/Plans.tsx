import { Text, Torus } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

const plans = [
  { name: "Basic", price: "$9.99/mo", features: ["Feature 1", "Feature 2", "Feature 3"] },
  { name: "Pro", price: "$19.99/mo", features: ["All Basic features", "Feature 4", "Feature 5"] },
  { name: "Enterprise", price: "$49.99/mo", features: ["All Pro features", "Feature 6", "Feature 7"] },
]

export default function Plans() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {plans.map((plan, index) => (
        <group
          key={index}
          position={[Math.cos((index * Math.PI * 2) / 3) * 3, 0, Math.sin((index * Math.PI * 2) / 3) * 3]}
        >
          <Torus args={[1, 0.3, 16, 100]}>
            <meshStandardMaterial color={`hsl(${index * 120}, 70%, 50%)`} />
          </Torus>
          <Text position={[0, 1.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
            {plan.name}
          </Text>
          <Text position={[0, 1, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
            {plan.price}
          </Text>
          {plan.features.map((feature, featureIndex) => (
            <Text
              key={featureIndex}
              position={[0, -0.5 - featureIndex * 0.5, 0]}
              fontSize={0.15}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {feature}
            </Text>
          ))}
        </group>
      ))}
    </group>
  )
}

