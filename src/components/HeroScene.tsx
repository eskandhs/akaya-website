import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function CoreGeometry({ show }: { show: boolean }) {
  const group = useRef<THREE.Group>(null);
  const appear = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += delta * 0.04;
    // Grow the core in only once the content is revealed.
    const target = show ? 1 : 0;
    appear.current += (target - appear.current) * Math.min(1, delta * 4);
    group.current.scale.setScalar(appear.current);
  });

  return (
    <group ref={group} scale={0}>
      {/* Solid distorted core */}
      <Icosahedron args={[1.0, 6]}>
        <MeshDistortMaterial
          color="#3a25b8"
          emissive="#6644ee"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.5}
          distort={0.34}
          speed={1.4}
        />
      </Icosahedron>
      {/* Wireframe shell — gives the "computed data" feel */}
      <Icosahedron args={[1.55, 2]}>
        <meshBasicMaterial
          color="#8066ff"
          wireframe
          transparent
          opacity={0.28}
        />
      </Icosahedron>
    </group>
  );
}

function DataField({ revealed }: { revealed: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const mat = useRef<THREE.PointsMaterial>(null);
  const appear = useRef(0);
  const opacity = useRef(0);

  const positions = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute on a spherical shell for an abstract orbital pattern.
      const r = 3.2 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.03;
    // Subtle scale-up entrance.
    appear.current += (1 - appear.current) * Math.min(1, delta * 1.2);
    ref.current.scale.setScalar(0.85 + 0.15 * appear.current);
    // Hold at 50% opacity during the intro, rise to full when revealed.
    const target = revealed ? 0.9 : 0.5;
    opacity.current += (target - opacity.current) * Math.min(1, delta * 1.5);
    if (mat.current) mat.current.opacity = opacity.current;
  });

  return (
    <points ref={ref} scale={0.85}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={mat}
        color="#a594ff"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene({ revealed }: { revealed: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#8066ff" />
      <pointLight position={[-6, -2, -4]} intensity={1.8} color="#6644ee" />
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.7}>
        <CoreGeometry show={revealed} />
      </Float>
      <DataField revealed={revealed} />
      <fog attach="fog" args={["#000000", 6, 13]} />
    </Canvas>
  );
}
