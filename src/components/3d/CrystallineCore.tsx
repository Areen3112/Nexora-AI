'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable, isLowPowerDevice } from '@/lib/webgl-utils';
import styles from './CrystallineCore.module.scss';

interface CrystallineCoreProps {
  accentColor?: string;
}

export const CrystallineCore: React.FC<CrystallineCoreProps> = ({
  accentColor = '#E11D48',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglAvailable, setWebglAvailable] = useState<boolean>(true);
  const [activeFaceIndex, setActiveFaceIndex] = useState<number>(1);
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    nodes: 42,
    flux: '1.42 TFLOPS',
    phase: 'COHERENT',
  });

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebglAvailable(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    const isLowPower = isLowPowerDevice();
    const maxPixelRatio = isLowPower ? 1 : Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(maxPixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for all crystal objects
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Crystalline Polyhedron (Icosahedron)
    const innerGeometry = new THREE.IcosahedronGeometry(1.2, 1);
    
    // Custom Shaders for Inner Gemstone
    const crystalMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(accentColor) },
        uLightPos: { value: new THREE.Vector3(2, 3, 4) },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float uTime;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vec3 pos = position;
          // Subtle pulsation
          float pulse = sin(uTime * 1.5 + position.y * 2.0) * 0.03;
          pos += normal * pulse;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform vec3 uColor;
        uniform vec3 uLightPos;
        uniform float uTime;

        void main() {
          vec3 lightDir = normalize(uLightPos - vPosition);
          float diff = max(dot(vNormal, lightDir), 0.0);
          
          // Fresnel rim lighting
          vec3 viewDir = normalize(-vPosition);
          float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
          
          // Facet refraction shimmer
          float shimmer = sin(vPosition.x * 10.0 + uTime * 2.0) * 0.15 + 0.85;
          
          vec3 baseColor = uColor * (diff * 0.6 + 0.4) * shimmer;
          vec3 rimColor = vec3(1.0, 0.4, 0.6) * fresnel * 1.4;
          
          gl_FragColor = vec4(baseColor + rimColor, 0.82);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const innerMesh = new THREE.Mesh(innerGeometry, crystalMaterial);
    coreGroup.add(innerMesh);

    // 2. Outer Wireframe Exoskeleton
    const outerGeometry = new THREE.IcosahedronGeometry(1.5, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xFFFFFF),
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const outerWireframe = new THREE.Mesh(outerGeometry, wireframeMaterial);
    coreGroup.add(outerWireframe);

    // 3. Orbital Data Nodes
    const nodeCount = 36;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const accentThreeColor = new THREE.Color(accentColor);
    const whiteColor = new THREE.Color(0xFFFFFF);

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 1.7 + Math.random() * 0.4;

      nodePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      nodePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      nodePositions[i * 3 + 2] = radius * Math.cos(phi);

      const color = Math.random() > 0.4 ? accentThreeColor : whiteColor;
      nodeColors[i * 3] = color.r;
      nodeColors[i * 3 + 1] = color.g;
      nodeColors[i * 3 + 2] = color.b;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const pointCloud = new THREE.Points(nodeGeometry, nodeMaterial);
    coreGroup.add(pointCloud);

    // 4. Subtle Ambient Dust Stream
    const dustCount = 80;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 8;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x9CA3AF,
      transparent: true,
      opacity: 0.4,
    });
    const dustMesh = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustMesh);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.8;
      targetRotationX = -y * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause rendering when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Render Loop
    let clock = new THREE.Clock();
    let frameCounter = 0;
    let lastFpsUpdate = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();
      crystalMaterial.uniforms.uTime.value = elapsedTime;

      // Smooth Lerp for Mouse Rotation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      coreGroup.rotation.x = currentRotationX + Math.sin(elapsedTime * 0.3) * 0.15;
      coreGroup.rotation.y = currentRotationY + elapsedTime * 0.2;
      coreGroup.rotation.z = Math.cos(elapsedTime * 0.25) * 0.1;

      outerWireframe.rotation.y = -elapsedTime * 0.15;
      outerWireframe.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15;

      pointCloud.rotation.y = elapsedTime * 0.35;

      // Dust float
      dustMesh.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);

      // Telemetry update
      frameCounter++;
      const now = performance.now();
      if (now - lastFpsUpdate >= 1000) {
        setTelemetry((prev) => ({
          ...prev,
          fps: Math.round((frameCounter * 1000) / (now - lastFpsUpdate)),
        }));
        frameCounter = 0;
        lastFpsUpdate = now;
      }
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      innerGeometry.dispose();
      crystalMaterial.dispose();
      outerGeometry.dispose();
      wireframeMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [accentColor]);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      {/* 3D WebGL Canvas or CSS Geometric Fallback */}
      {!webglAvailable && (
        <div className={styles.fallbackGraphic}>
          <div className={styles.fallbackPolyhedron}>
            <div className={styles.fallbackFacet} />
            <div className={styles.fallbackFacet} />
            <div className={styles.fallbackFacet} />
          </div>
          <span className={styles.fallbackTag}>COMPUTATIONAL CORE // 2D MODE</span>
        </div>
      )}

      {/* Floating Precision Telemetry Overlay */}
      <div className={styles.telemetryBracketTopLeft}>
        <span className={styles.bracketCode}>NX-LATTICE // 01</span>
        <span className={styles.bracketCoord}>LAT: 40.7128 // LON: -74.0060</span>
      </div>

      <div className={styles.telemetryBracketBottomRight}>
        <div className={styles.metricItem}>
          <span className={styles.metricLabel}>STATE</span>
          <span className={styles.metricValue}>{telemetry.phase}</span>
        </div>
        <div className={styles.metricItem}>
          <span className={styles.metricLabel}>FPS</span>
        <span className={styles.metricValue}>
            {Number.isFinite(telemetry.fps) ? telemetry.fps : 0}
          </span>

        </div>
        <div className={styles.metricItem}>
          <span className={styles.metricLabel}>NODES</span>
          <span className={styles.metricValue}>{telemetry.nodes}</span>
        </div>
      </div>
    </div>
  );
};
