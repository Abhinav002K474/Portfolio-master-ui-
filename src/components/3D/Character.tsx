"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Character() {
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const entireRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    const scrollY = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
    
    // Pointer returns -1 to 1 correctly in Fiber
    const pointerX = state.pointer.x; 
    const pointerY = state.pointer.y;

    // Head Follow
    if (headRef.current) {
        const targetHeadX = -pointerY * 0.8;
        const targetHeadY = pointerX * 1.5;
        
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetHeadX, delta * 6);
        headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetHeadY, delta * 6);
    }

    // Body Turn / Interaction
    if (bodyRef.current && entireRef.current) {
        let isFullRight = pointerX > 0.6;
        let targetBodyRotationY = pointerX * 0.5;
        
        if (isFullRight) {
            targetBodyRotationY = 1.2; // Quick turn to look right
            // Dispatch a custom event to notify React DOM elements that the secret 'About Me' side panel should appear
            document.dispatchEvent(new CustomEvent('character-look-right', { detail: true }));
        } else {
            document.dispatchEvent(new CustomEvent('character-look-right', { detail: false }));
        }

        bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, targetBodyRotationY, delta * 4);

        // Responsive & Scroll Positional Logic
        let tx = 0, ty = -2, tz = 0;
        
        // Mobile offset fix
        const isMobile = viewport.width < 5;
        
        if (scrollY > 0.05 && scrollY < 0.4) {
            // About section: shifts left
            tx = isMobile ? 0 : -(viewport.width * 0.25);
            ty = -2.5;
            targetBodyRotationY += 0.5; // turns slightly to right content
        } else if (scrollY >= 0.4 && scrollY < 0.7) {
            // "What I Do" section
            tx = isMobile ? 0 : (viewport.width * 0.25);
            ty = -3;
        } else if (scrollY >= 0.7) {
            // Timeline section: fade down
            ty = -10;
        }

        entireRef.current.position.x = THREE.MathUtils.lerp(entireRef.current.position.x, tx, delta * 3);
        entireRef.current.position.y = THREE.MathUtils.lerp(entireRef.current.position.y, ty + Math.sin(state.clock.elapsedTime * 2) * 0.05, delta * 3); // Idle breathing applied here
    }
  });

  return (
    <group ref={entireRef} position={[0, -2, 0]}>
      <group ref={bodyRef}>
        {/* Torso / Jacket */}
        <mesh position={[0, 1.4, 0]}>
            <capsuleGeometry args={[0.8, 1.5, 4, 16]} />
            <meshStandardMaterial color="#1e1e1e" roughness={0.7} />
        </mesh>
        
        {/* Head */}
        <group ref={headRef} position={[0, 3.2, 0]}>
            <mesh>
                <sphereGeometry args={[0.9, 32, 32]} />
                <meshStandardMaterial color="#fcd5ce" roughness={0.4} />
            </mesh>
            {/* Eyes */}
            <mesh position={[-0.35, 0.1, 0.85]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#000" />
            </mesh>
            <mesh position={[0.35, 0.1, 0.85]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#000" />
            </mesh>
            {/* Cyber Visor detail */}
            <mesh position={[0, 0.15, 0.9]}>
                <boxGeometry args={[1.2, 0.25, 0.1]} />
                <meshStandardMaterial color="#4f46e5" opacity={0.6} transparent emissive="#4f46e5" emissiveIntensity={0.5} />
            </mesh>
        </group>
      </group>
    </group>
  );
}
