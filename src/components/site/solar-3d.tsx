"use client";

/**
 * Διαδραστική 3D σκηνή φωτοβολταϊκού πάρκου (Three.js / react-three-fiber).
 * Χαμηλού κόστους γεωμετρία (χωρίς εξωτερικά models) — γρήγορο φόρτωμα σε κάθε συσκευή.
 */

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const NAVY_PANEL = "#16456b";
const NAVY_PANEL_EDGE = "#1e5a86";
const LEG_COLOR = "#8b9199";
const GROUND_COLOR = "#dfe6cf";
const GROUND_INNER = "#eef0e0";
const TREE_GREEN = "#2c7a3e";
const SUN_COLOR = "#ffcf7a";

/* ---------------- Πάνελ ---------------- */

function SolarPanel({
  position,
  tilt = -0.52,
}: {
  position: [number, number, number];
  tilt?: number;
}) {
  return (
    <group position={position} rotation={[tilt, 0, 0]}>
      {/* πόδια */}
      <mesh position={[-0.85, -0.32, 0]}>
        <boxGeometry args={[0.07, 0.5, 0.07]} />
        <meshStandardMaterial color={LEG_COLOR} roughness={0.7} />
      </mesh>
      <mesh position={[0.85, -0.32, 0]}>
        <boxGeometry args={[0.07, 0.5, 0.07]} />
        <meshStandardMaterial color={LEG_COLOR} roughness={0.7} />
      </mesh>
      {/* πλαίσιο */}
      <mesh>
        <boxGeometry args={[2.3, 0.09, 1.55]} />
        <meshStandardMaterial color={NAVY_PANEL_EDGE} metalness={0.35} roughness={0.45} />
      </mesh>
      {/* επιφάνεια γυαλιού */}
      <mesh position={[0, 0.051, 0]}>
        <boxGeometry args={[2.16, 0.03, 1.4]} />
        <meshStandardMaterial
          color={NAVY_PANEL}
          metalness={0.6}
          roughness={0.22}
          envMapIntensity={0.6}
        />
      </mesh>
      {/* διαχωριστικά cells */}
      <mesh position={[0, 0.072, 0]}>
        <boxGeometry args={[2.16, 0.004, 0.03]} />
        <meshStandardMaterial color="#e8f1f7" />
      </mesh>
      <mesh position={[-0.72, 0.072, 0]}>
        <boxGeometry args={[0.03, 0.004, 1.4]} />
        <meshStandardMaterial color="#e8f1f7" />
      </mesh>
      <mesh position={[0.72, 0.072, 0]}>
        <boxGeometry args={[0.03, 0.004, 1.4]} />
        <meshStandardMaterial color="#e8f1f7" />
      </mesh>
    </group>
  );
}

/* ---------------- Ηλιος ---------------- */

function Sun() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.position.y = 4.3 + Math.sin(t * 0.7) * 0.28;
      group.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group ref={group} position={[-5.2, 4.3, -5.5]}>
      {/* πυρήνας */}
      <mesh>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshBasicMaterial color={SUN_COLOR} />
      </mesh>
      {/* halo εσωτερικό */}
      <mesh>
        <sphereGeometry args={[1.15, 24, 24]} />
        <meshBasicMaterial color={SUN_COLOR} transparent opacity={0.28} depthWrite={false} />
      </mesh>
      {/* halo εξωτερικό */}
      <mesh>
        <sphereGeometry args={[1.7, 20, 20]} />
        <meshBasicMaterial color={SUN_COLOR} transparent opacity={0.1} depthWrite={false} />
      </mesh>
    </group>
  );
}

/* ---------------- Δέντρα (χαμηλού πολυγώνου) ---------------- */

function Tree({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.06, 0.09, 0.56, 6]} />
        <meshStandardMaterial color="#7d6b57" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.82, 0]}>
        <icosahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial color={TREE_GREEN} roughness={0.85} flatShading />
      </mesh>
    </group>
  );
}

/* ---------------- Πίνακες + τοπίο ---------------- */

function PanelFarm() {
  const rows = useMemo(() => {
    const panels: { position: [number, number, number]; tilt: number }[] = [];
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 4; col++) {
        const x = col * 2.75 - 4.1 + row * 1.35;
        const z = row === 0 ? -1.6 : 1.4;
        panels.push({ position: [x, 0.72, z], tilt: -0.52 });
      }
    }
    return panels;
  }, []);

  return (
    <group>
      {rows.map((p, i) => (
        <SolarPanel key={i} position={p.position} tilt={p.tilt} />
      ))}
      {/* διάδρομος πρόσβασης */}
      <mesh position={[0, 0.012, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.1, 9]} />
        <meshStandardMaterial color="#efe7d2" roughness={1} />
      </mesh>
      {/* δέντρα γύρω από το πάρκο */}
      <Tree position={[-6.6, 0, 2.6]} scale={1.05} />
      <Tree position={[6.9, 0, 2.2]} scale={0.9} />
      <Tree position={[7.6, 0, -3.4]} scale={1.15} />
      <Tree position={[-7.4, 0, -2.9]} scale={0.8} />
      <Tree position={[-2.2, 0, 4.6]} scale={0.75} />
      <Tree position={[3.4, 0, 4.9]} scale={1} />
    </group>
  );
}

/* ---------------- Κάμερα με mouse-parallax ---------------- */

function CameraRig() {
  const target = useMemo(() => new THREE.Vector3(0, 0.9, 0), []);

  useFrame((state, delta) => {
    const { camera, pointer } = state;
    const tx = 8.6 + pointer.x * 1.1;
    const ty = 4.7 + pointer.y * 0.55;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, tx, 2.2, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, ty, 2.2, delta);
    camera.lookAt(target);
  });

  return null;
}

/* ---------------- Αργή περιστροφή σκηνής ---------------- */

function SlowRotate({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.045;
  });
  return <group ref={ref}>{children}</group>;
}

/* ---------------- Σκηνή ---------------- */

function Scene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.75} />
      <hemisphereLight args={["#ffe9c9", "#b7d3ae", 0.55]} />
      <directionalLight position={[-5, 6, -3]} intensity={1.9} color="#ffd9a6" />
      <directionalLight position={[6, 4, 6]} intensity={0.5} color="#cfe6ff" />

      <group position={[0, -0.4, 0]}>
        <SlowRotate>
          {/* έδαφος */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <circleGeometry args={[16, 48]} />
            <meshStandardMaterial color={GROUND_COLOR} roughness={1} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
            <circleGeometry args={[9.5, 48]} />
            <meshStandardMaterial color={GROUND_INNER} roughness={1} />
          </mesh>

          <PanelFarm />
          <ContactShadows
            position={[0, 0.02, 0]}
            opacity={0.32}
            scale={20}
            blur={2.4}
            far={4.5}
            color="#3a4a3e"
          />
        </SlowRotate>

        <Sun />

        <Sparkles
          count={reduceMotion ? 30 : 65}
          scale={[13, 5, 13]}
          position={[0, 2.8, 0]}
          size={2.6}
          speed={reduceMotion ? 0.1 : 0.35}
          color="#ffd27a"
          opacity={0.75}
        />
      </group>

      <CameraRig />
    </>
  );
}

/* ---------------- Canvas export ---------------- */

export default function Solar3DCanvas({ reduceMotion = false }: { reduceMotion?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [8.6, 4.7, 10.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduceMotion ? "demand" : "always"}
      aria-label="Τρισδιάστατη απεικόνιση φωτοβολταϊκού πάρκου"
      role="img"
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene reduceMotion={reduceMotion} />
      </Suspense>
    </Canvas>
  );
}
