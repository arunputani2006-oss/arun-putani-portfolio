import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";

import type { Group, Mesh } from "three";

function Core() {
  const core = useRef<Mesh>(null);
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.x += delta * 0.15;
      core.current.rotation.y += delta * 0.3;
    }

    if (group.current) {
      group.current.rotation.y +=
        (state.pointer.x * 0.15 - group.current.rotation.y) *
        delta *
        2;

      group.current.rotation.x +=
        (-state.pointer.y * 0.12 - group.current.rotation.x) *
        delta *
        2;
    }
  });

  return (
    <group ref={group}>
      <Float
        speed={1.8}
        rotationIntensity={0.8}
        floatIntensity={1.2}
      >
        {/* Main energy core */}
        <mesh ref={core}>
          <icosahedronGeometry args={[1.1, 4]} />

          <MeshDistortMaterial
            color="#9670ff"
            emissive="#5125b8"
            emissiveIntensity={0.8}
            roughness={0.12}
            metalness={0.85}
            distort={0.35}
            speed={2}
          />
        </mesh>

        {/* Inner glowing sphere */}
        <mesh scale={0.55}>
          <icosahedronGeometry args={[1, 3]} />

          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={2}
            metalness={0.9}
            roughness={0.1}
            wireframe
          />
        </mesh>

        {/* Outer wireframe shell */}
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1, 2]} />

          <meshBasicMaterial
            color="#a78bfa"
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>
      </Float>
    </group>
  );
}

function OrbitRing({
  radius,
  rotation,
  speed,
  color,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  color: string;
}) {
  const ring = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (ring.current) {
      ring.current.rotation.z += speed * delta;
    }
  });

  return (
    <mesh ref={ring} rotation={rotation}>
      <torusGeometry args={[radius, 0.012, 16, 120]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function EnergyParticles() {
  return (
    <>
      <Sparkles
        count={130}
        scale={5.5}
        size={2.5}
        speed={0.4}
        color="#a78bfa"
      />

      <Sparkles
        count={60}
        scale={4}
        size={3}
        speed={0.7}
        color="#38bdf8"
      />

      <Stars
        radius={60}
        depth={35}
        count={1000}
        factor={3}
        saturation={0.5}
        fade
        speed={0.4}
      />
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <pointLight
        position={[4, 5, 5]}
        intensity={25}
        color="#a78bfa"
      />

      <pointLight
        position={[-5, -3, 3]}
        intensity={20}
        color="#38bdf8"
      />

      <pointLight
        position={[0, 0, -5]}
        intensity={12}
        color="#7c3aed"
      />

      <Core />

      <OrbitRing
        radius={1.75}
        rotation={[1.1, 0.5, 0]}
        speed={0.35}
        color="#38bdf8"
      />

      <OrbitRing
        radius={2.05}
        rotation={[0.5, 1.2, 0.8]}
        speed={-0.25}
        color="#a78bfa"
      />

      <OrbitRing
        radius={2.35}
        rotation={[1.5, 0.2, 1]}
        speed={0.2}
        color="#60a5fa"
      />

      <EnergyParticles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}