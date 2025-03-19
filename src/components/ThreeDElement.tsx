
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeDElementProps {
  className?: string;
}

const ThreeDElement: React.FC<ThreeDElementProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create cubes with different materials
    const cubes: THREE.Mesh[] = [];
    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x0AFFFF, 
        wireframe: true,
        transparent: true,
        opacity: 0.7
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xB026FF, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      })
    ];

    // Create multiple cubes
    for (let i = 0; i < 3; i++) {
      const size = 1.5 - (i * 0.2);
      const geometry = new THREE.BoxGeometry(size, size, size);
      const material = materials[i % materials.length];
      const cube = new THREE.Mesh(geometry, material);
      
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      
      scene.add(cube);
      cubes.push(cube);
    }
    
    cubesRef.current = cubes;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate cubes at different speeds
      cubes.forEach((cube, index) => {
        const speed = 0.001 + (index * 0.0005);
        cube.rotation.x += speed;
        cube.rotation.y += speed * 1.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      cubesRef.current.forEach(cube => {
        cube.geometry.dispose();
        if (Array.isArray(cube.material)) {
          cube.material.forEach(material => material.dispose());
        } else {
          cube.material.dispose();
        }
      });
      
      rendererRef.current?.dispose();
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full ${className}`}></div>;
};

export default ThreeDElement;
