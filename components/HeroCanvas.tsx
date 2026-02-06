"use client";

import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function HeroCanvas() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40">
      <Canvas camera={{ position: [0, 0, 3.3], fov: 48 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <Float speed={1.7} floatIntensity={1.1}>
          <mesh>
            <torusKnotGeometry args={[0.85, 0.22, 180, 40]} />
            <MeshDistortMaterial color="#7c3aed" roughness={0.15} metalness={0.7} distort={0.4} speed={3} />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.6} />
      </Canvas>
    </div>
  );
}
