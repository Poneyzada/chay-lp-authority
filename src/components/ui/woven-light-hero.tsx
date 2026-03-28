"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';

// --- Main Hero Component ---
export const WovenLightHero = () => {
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    // Add fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    textControls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 1.5,
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }));
    buttonControls.start({
        opacity: 1,
        transition: { delay: 2.5, duration: 1 }
    });

    return () => {
        document.head.removeChild(link);
    }
  }, [textControls, buttonControls]);

  const headline = "Autoridade Médica em";
  const subheadline = "Saúde e Vitalidade Hormonal";
  
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white text-zinc-900">
      <WovenCanvas />
      
      {/* Subtle overlay for text clarity */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      
      <HeroNav />
      <div className="relative z-10 text-center px-4 max-w-4xl backdrop-blur-[2px] py-8 rounded-full">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {headline.split(" ").map((word, i) => (
                <span key={i} className="inline-block">
                    {word.split("").map((char, j) => (
                        <motion.span key={j} custom={i * 5 + j} initial={{ opacity: 0, y: 50 }} animate={textControls} style={{ display: 'inline-block' }}>
                            {char}
                        </motion.span>
                    ))}
                    {i < headline.split(" ").length - 1 && <span className="opacity-0">&nbsp;</span>}
                </span>
            ))}
        </h1>
        <h2 className="text-3xl md:text-5xl font-italic text-gold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
             {subheadline.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-3">
                    {word.split("").map((char, j) => (
                        <motion.span key={j} custom={headline.length + i * 5 + j} initial={{ opacity: 0, y: 30 }} animate={textControls} style={{ display: 'inline-block' }}>
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </h2>

        <motion.p
          custom={headline.length + subheadline.length}
          initial={{ opacity: 0, y: 30 }}
          animate={textControls}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-zinc-800 font-medium font-serif"
        >
          O acompanhamento científico que você precisa para resgatar sua melhor versão.
        </motion.p>
        
        <motion.div initial={{ opacity: 0 }} animate={buttonControls} className="mt-10">
          <button 
            onClick={() => {
                const el = document.getElementById('agendamento');
                if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-full border-2 border-zinc-900 bg-zinc-900 px-10 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-zinc-800 shadow-xl"
          >
            AGENDAR MINHA AVALIAÇÃO VIP
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// --- Navigation Component ---
const HeroNav = () => {
    return (
        <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="absolute top-0 left-0 right-0 z-20 p-6"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="Dra. Chayanne Calegari" className="h-12 md:h-16 w-auto" />
                </div>
            </div>
        </motion.nav>
    );
};

// --- Three.js DNA Canvas Component ---
export const WovenCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    // --- DNA Double Helix ---
    const particleCount = 20000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const geometry = new THREE.BufferGeometry();
    
    // Parameters
    const helixRadius = 1.8;
    const helixHeight = 15;
    const turns = 4;

    for (let i = 0; i < particleCount; i++) {
        const t = (i / particleCount) * turns * Math.PI * 2;
        const side = i % 2 === 0 ? 1 : -1;
        
        // Main strands
        let x = Math.cos(t) * helixRadius * side;
        let z = Math.sin(t) * helixRadius * side;
        let y = (i / particleCount) * helixHeight - (helixHeight / 2);

        // Add some noise/volume
        x += (Math.random() - 0.5) * 0.4;
        z += (Math.random() - 0.5) * 0.4;
        y += (Math.random() - 0.5) * 0.2;
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        originalPositions[i * 3] = x;
        originalPositions[i * 3 + 1] = y;
        originalPositions[i * 3 + 2] = z;

        const color = new THREE.Color();
        const rand = Math.random();
        
        // Biological Palette
        if (rand > 0.95) {
          color.setHex(0xef4444); // Red (Phosphates)
        } else if (rand > 0.85) {
          color.setHex(0xffffff); // White
        } else if (rand > 0.6) {
          color.setHex(0x4ade80); // Green (Adenine)
        } else if (rand > 0.4) {
          color.setHex(0x60a5fa); // Blue (Thymine)
        } else if (rand > 0.2) {
          color.setHex(0xfacc15); // Yellow (Guanine)
        } else {
          color.setHex(0xf472b6); // Pink (Cytosine)
        }
        
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        
        velocities[i * 3] = 0;
        velocities[i * 3 + 1] = 0;
        velocities[i * 3 + 2] = 0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        blending: THREE.NormalBlending,
        transparent: true,
        opacity: 0.7,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let lastMouseMoveTime = 0;
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 10 - 5;
        mouse.y = -(event.clientY / window.innerHeight) * 10 + 5;
        lastMouseMoveTime = clock.getElapsedTime();
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length > 0) {
            mouse.x = (event.touches[0].clientX / window.innerWidth) * 10 - 5;
            mouse.y = -(event.touches[0].clientY / window.innerHeight) * 10 + 5;
            lastMouseMoveTime = clock.getElapsedTime();
        }
    };
    window.addEventListener('touchmove', handleTouchMove);

    const animate = () => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();
        
        let targetX = mouse.x;
        let targetY = mouse.y;

        if (elapsedTime - lastMouseMoveTime > 2) {
          targetX = Math.cos(elapsedTime * 0.5) * 3;
          targetY = Math.sin(elapsedTime * 0.3) * 2;
        }

        const mouseWorld = new THREE.Vector3(targetX, targetY, 0);

        for (let i = 0; i < particleCount; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            const currentPos = new THREE.Vector3(positions[ix], positions[iy], positions[iz]);
            const originalPos = new THREE.Vector3(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
            const velocity = new THREE.Vector3(velocities[ix], velocities[iy], velocities[iz]);

            const dist = currentPos.distanceTo(mouseWorld);
            if (dist < 2.5) {
                const force = (2.5 - dist) * 0.015;
                const direction = new THREE.Vector3().subVectors(currentPos, mouseWorld).normalize();
                velocity.add(direction.multiplyScalar(force));
            }

            const returnForce = new THREE.Vector3().subVectors(originalPos, currentPos).multiplyScalar(0.005);
            velocity.add(returnForce);
            velocity.multiplyScalar(0.94);

            positions[ix] += velocity.x;
            positions[iy] += velocity.y;
            positions[iz] += velocity.z;
            
            velocities[ix] = velocity.x;
            velocities[iy] = velocity.y;
            velocities[iz] = velocity.z;
        }
        geometry.attributes.position.needsUpdate = true;

        points.rotation.y = elapsedTime * 0.2; // DNA Rotation
        points.rotation.z = Math.sin(elapsedTime * 0.1) * 0.1;
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 bg-white" />;
};
