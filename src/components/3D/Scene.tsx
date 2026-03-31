"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Character } from "./Character";

export function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        shadows
        eventSource={typeof window !== "undefined" ? document.body : undefined}
        eventPrefix="client"
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />

        {/* 3D Character logic component that listens to scroll and pointer */}
        <Character />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
