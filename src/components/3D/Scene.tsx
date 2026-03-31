"use client";

import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Character } from "./Character";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(camera.position, {
      z: 7, 
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        scrub: true,
      },
    });

    gsap.to(camera.position, {
      z: 12,
      y: 2,
      scrollTrigger: {
        trigger: "#fullbody",
        start: "top center",
        scrub: true, 
      },
    });
  }, [camera]);
  
  return null;
}

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
        
        <CameraController />
        <Character />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
