'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

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
      setIsLoading(false);

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
      setError(error instanceof Error ? error.message : 'Failed to initialize 3D scene');
      setIsLoading(false);
      return () => {};
    }
  }, []);

  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <p>Unable to load 3D scene</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-32 h-32 bg-blue-500/20 rounded-full" />
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="absolute inset-0" />;
}
