import React, { useEffect, useRef } from 'react';
// import pixel from './assets/sun.jpg'
import * as THREE from 'three';

const Sun = ({display}) => {
  const mountRef = useRef(null);
  const sunRef = useRef(null); // Reference to the sun mesh

  useEffect(() => {
    const width = 1500;
    const height = 1500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1500);
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Sun (Sphere Geometry with MeshBasicMaterial)
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load(display);

    const material = new THREE.MeshBasicMaterial({
      map: sunTexture,
    });
    const sun = new THREE.Mesh(geometry, material);
    sunRef.current = sun; // Store reference to the sun for later
    scene.add(sun);

    // Lighting (optional)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Mouse movement handler (to control sun's rotation based on mouse movement)
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / width) * 2 - 1; // Normalize mouseX to [-1, 1]
      const mouseY = -(event.clientY / height) * 2 + 1; // Normalize mouseY to [-1, 1]

      // Update the rotation based on mouse movement
      if (sunRef.current) {
        sunRef.current.rotation.y = mouseX * Math.PI; // Rotate along the y-axis (horizontal movement)
        sunRef.current.rotation.x =- mouseY * Math.PI / 2; // Rotate along the x-axis (vertical movement)
      }
    };

    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '1000px', background:'transparent', height: '1000px' }} />;
};

export default Sun;


