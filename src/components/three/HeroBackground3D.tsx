import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 1500;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#10b981"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function FloatingOrb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.35}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-5, -5, 2]} intensity={0.6} color="#10b981" />
        <Suspense fallback={null}>
          <ParticleField />
          <FloatingOrb position={[-3, 1.5, -1]} color="#10b981" />
          <FloatingOrb position={[3, -1, -2]} color="#3b82f6" />
          <FloatingOrb position={[2.5, 2, 0]} color="#06b6d4" />
        </Suspense>
      </Canvas>
    </div>
  );
};
