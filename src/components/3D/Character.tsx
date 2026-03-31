"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Character() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models/character.glb");
  const clone = useMemo(() => scene.clone(), [scene]);
  const { actions, names } = useAnimations(animations, group);
  
  const targetRotation = useRef({ x: 0, y: 0 });
  const [showAbout, setShowAbout] = useState(false);
  const { viewport } = useThree();

  const headBone = useMemo(() => {
    let bone: THREE.Bone | undefined;
    clone.traverse((child) => {
      if ((child as THREE.Bone).isBone && child.name.toLowerCase().includes('head')) {
        bone = child as THREE.Bone;
      }
    });
    return bone;
  }, [clone]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (actions && names.length > 0) {
      // RobotExpressive uses "Idle"
      const idle = actions['Idle'] || actions[names[0]];
      if (idle) idle.reset().fadeIn(0.5).play();
    }

    if (group.current) {
        let tx = viewport.width < 5 ? 0 : - (viewport.width * 0.25);
        // Phase 3: Scroll transition
        gsap.to(group.current.position, {
            x: tx,
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "bottom center",
                scrub: true
            }
        });

        // Phase 4: Full body scene / timeline switch
        ScrollTrigger.create({
            trigger: "#fullbody",
            start: "top center",
            onEnter: () => {
                if (actions['Walking']) {
                    actions['Idle']?.fadeOut(0.5);
                    actions['Walking']?.reset().fadeIn(0.5).play();
                }
            },
            onLeaveBack: () => {
                if (actions['Walking']) {
                    actions['Walking']?.fadeOut(0.5);
                    actions['Idle']?.reset().fadeIn(0.5).play();
                }
            }
        });
    }
  }, [actions, names, viewport]);

  useFrame((state) => {
    // Phase 1: Cursor -> Head Movement logic (Using React Three Fiber pointers)
    const x = state.pointer.x; // Native pointer value -1 to 1 
    const y = state.pointer.y;

    targetRotation.current = {
      x: -y * 0.3,
      y: x * 0.5,
    };

    if (headBone) {
      headBone.rotation.x = THREE.MathUtils.lerp(headBone.rotation.x, targetRotation.current.x, 0.1);
      headBone.rotation.y = THREE.MathUtils.lerp(headBone.rotation.y, targetRotation.current.y, 0.1);
    }

    // Phase 2: Detect "Full Right Cursor" -> Trigger Body Rotation & About Section
    if (x > 0.8 && !showAbout) {
      setShowAbout(true);
      if (group.current) {
        gsap.to(group.current.rotation, { y: Math.PI / 4, duration: 1 });
      }
      document.dispatchEvent(new CustomEvent('character-look-right', { detail: true }));
    } else if (x <= 0.8 && showAbout) {
      setShowAbout(false);
      if (group.current) {
        gsap.to(group.current.rotation, { y: 0, duration: 1 });
      }
      document.dispatchEvent(new CustomEvent('character-look-right', { detail: false }));
    }
  });

  return (
    <group ref={group} position={[0, -3.5, 0]} scale={1.5}>
      <primitive object={clone} />
    </group>
  );
}

useGLTF.preload("/models/character.glb");
