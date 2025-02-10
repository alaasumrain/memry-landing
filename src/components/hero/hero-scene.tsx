'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    let animationFrameId: number;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particlesMesh: THREE.Points;

    try {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      // Create particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 5000;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      // Create material
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#4f46e5',
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });

      // Create mesh
      particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      camera.position.z = 2;

      // Mouse movement effect
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
      };

      document.addEventListener('mousemove', handleMouseMove);

      // Animation
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Rotate based on mouse position
        if (particlesMesh) {
          particlesMesh.rotation.y = mouseX * 0.00005;
          particlesMesh.rotation.x = mouseY * 0.00005;

          // Gentle constant rotation
          particlesMesh.rotation.y += 0.0005;
        }

        renderer.render(scene, camera);
      };

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Start animation
      animate();

      // Cleanup
      return () => {
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        
        // Dispose resources
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.error('Error initializing Three.js:', error);
      return () => {};
    }
  }, [isClient]);

  return <div ref={containerRef} className="absolute inset-0" />;
}
