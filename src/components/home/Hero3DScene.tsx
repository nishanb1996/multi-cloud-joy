import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, OrbitControls, Sparkles, Text, Environment } from "@react-three/drei";
import * as THREE from "three";

const ORBIT_ITEMS = [
  { label: "AWS", color: "#FF9900", radius: 2.6, speed: 0.35, offset: 0, y: 0.3 },
  { label: "GCP", color: "#4285F4", radius: 2.8, speed: 0.28, offset: 1.6, y: -0.4 },
  { label: "Azure", color: "#00A4EF", radius: 2.5, speed: 0.42, offset: 3.0, y: 0.8 },
  { label: "K8s", color: "#326CE5", radius: 3.0, speed: 0.22, offset: 4.4, y: -0.1 },
  { label: "AI", color: "#10B981", radius: 2.7, speed: 0.38, offset: 5.6, y: 0.5 },
];

function OrbitNode({ item }: { item: (typeof ORBIT_ITEMS)[number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * item.speed + item.offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * item.radius;
      ref.current.position.z = Math.sin(t) * item.radius;
      ref.current.position.y = item.y + Math.sin(t * 2) * 0.15;
    }
  });
  return (
    <group ref={ref}>
      <Float speed={3} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh castShadow>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial
            color={item.color}
            metalness={0.85}
            roughness={0.18}
            emissive={item.color}
            emissiveIntensity={0.35}
          />
        </mesh>
        <Text
          position={[0, 0.55, 0]}
          fontSize={0.18}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.012}
          outlineColor="#0f172a"
        >
          {item.label}
        </Text>
      </Float>
    </group>
  );
}

function OrbitRing({ radius, tilt = 0 }: { radius: number; tilt?: number }) {
  const geometry = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2, false, 0);
    const points = curve.getPoints(128).map((p) => new THREE.Vector3(p.x, 0, p.y));
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);
  return (
    <line rotation={[tilt, 0, 0]}>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color="#10B981" transparent opacity={0.18} />
    </line>
  );
}

function CoreCloud() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.15;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <Icosahedron ref={ref} args={[1.2, 6]}>
        <MeshDistortMaterial
          color="#10B981"
          distort={0.35}
          speed={1.6}
          metalness={0.9}
          roughness={0.12}
          emissive="#0ea5e9"
          emissiveIntensity={0.25}
        />
      </Icosahedron>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#10B981" />
      <pointLight position={[-5, -3, -5]} intensity={1} color="#0066FF" />
      <directionalLight position={[0, 8, 4]} intensity={0.6} />

      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>

      <CoreCloud />

      <OrbitRing radius={2.5} tilt={Math.PI / 2.4} />
      <OrbitRing radius={2.8} tilt={Math.PI / 3} />
      <OrbitRing radius={3.0} tilt={Math.PI / 2.1} />

      {ORBIT_ITEMS.map((item) => (
        <OrbitNode key={item.label} item={item} />
      ))}

      <Sparkles count={60} scale={8} size={2} speed={0.4} color="#10B981" opacity={0.6} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        enableDamping
        dampingFactor={0.08}
      />
    </>
  );
}

export const Hero3DScene = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1.2, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Scene />
    </Canvas>
  );
};

export default Hero3DScene;
