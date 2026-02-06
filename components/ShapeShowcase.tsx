"use client";

import { Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function ShapeShowcase({ variant = "orb" }: { variant?: "orb" | "ring" | "crystal" | "stack" }) {
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-3xl border border-white/20 bg-black/35">
      <Canvas camera={{ position: [0, 0, 3.4], fov: 48 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 2, 3]} intensity={1.2} />
        <pointLight position={[-2, -1, 2]} intensity={0.6} color="#8b5cf6" />
        {variant === "orb" && (
          <Float speed={1.4} floatIntensity={1.1}>
            <mesh>
              <icosahedronGeometry args={[1, 8]} />
              <MeshDistortMaterial color="#a78bfa" roughness={0.15} metalness={0.7} distort={0.45} speed={2.2} />
            </mesh>
          </Float>
        )}
        {variant === "ring" && (
          <Float speed={1.8} floatIntensity={1.2}>
            <mesh rotation={[0.4, 0.5, 0]}>
              <torusGeometry args={[0.95, 0.3, 32, 120]} />
              <MeshWobbleMaterial color="#22d3ee" factor={0.45} speed={1.6} roughness={0.2} />
            </mesh>
          </Float>
        )}
        {variant === "crystal" && (
          <Float speed={2} floatIntensity={1}>
            <mesh rotation={[0.2, 0.8, 0.1]}>
              <octahedronGeometry args={[1.05, 0]} />
              <meshStandardMaterial color="#f43f5e" metalness={0.75} roughness={0.2} />
            </mesh>
          </Float>
        )}
        {variant === "stack" && (
          <group>
            <Float speed={1.2} floatIntensity={0.8}>
              <mesh position={[-0.8, 0.2, 0]}>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshStandardMaterial color="#facc15" metalness={0.2} roughness={0.6} />
              </mesh>
            </Float>
            <Float speed={1.6} floatIntensity={1.1}>
              <mesh position={[0.2, -0.2, 0.1]} rotation={[0.4, 0.2, 0.8]}>
                <dodecahedronGeometry args={[0.7, 0]} />
                <meshStandardMaterial color="#2563eb" metalness={0.35} roughness={0.45} />
              </mesh>
            </Float>
          </group>
        )}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.4} />
      </Canvas>
    </div>
  );
}
