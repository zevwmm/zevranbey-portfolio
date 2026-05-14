"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Scene ─────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── Geometry ───────────────────────────────────────────────────────────────
    const torusGeo = new THREE.TorusKnotGeometry(0.85, 0.24, 160, 32, 2, 3);

    // Outer wireframe shell
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const wireMesh = new THREE.Mesh(torusGeo, wireMat);
    scene.add(wireMesh);

    // Inner solid — subtle metallic sheen
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.85,
      roughness: 0.15,
      transparent: true,
      opacity: 0.35,
    });
    const solidMesh = new THREE.Mesh(torusGeo, solidMat);
    scene.add(solidMesh);

    // ── Lights ─────────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Lime accent point light — orbits the mesh
    const limeLight = new THREE.PointLight(0xcdff64, 4, 7);
    limeLight.position.set(2, 2, 2);
    scene.add(limeLight);

    // Soft fill light from below
    const fillLight = new THREE.PointLight(0xffffff, 0.6, 8);
    fillLight.position.set(-2, -2, 1);
    scene.add(fillLight);

    // ── Particles ──────────────────────────────────────────────────────────────
    const PARTICLE_COUNT = 120;
    const pPositions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pPositions[i * 3]     = (Math.random() - 0.5) * 8;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x444444,
      size: 0.035,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── Mouse tracking ─────────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // ── Animation loop ─────────────────────────────────────────────────────────
    let rafId: number;
    let time = 0;
    let autoRotX = 0;
    let autoRotY = 0;
    let smoothX = 0;
    let smoothY = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      time += 0.008;

      // Auto rotation
      autoRotX += 0.003;
      autoRotY += 0.006;

      // Mouse influence — smooth lerp
      smoothX += (mouse.y * 0.5 - smoothX) * 0.04;
      smoothY += (mouse.x * 0.5 - smoothY) * 0.04;

      const rx = autoRotX + smoothX;
      const ry = autoRotY + smoothY;

      wireMesh.rotation.set(rx, ry, 0);
      solidMesh.rotation.set(rx, ry, 0);

      // Lime light orbit
      limeLight.position.x = Math.sin(time * 0.7) * 3;
      limeLight.position.y = Math.cos(time * 0.5) * 2.5;
      limeLight.position.z = Math.cos(time * 0.3) * 2 + 2;

      // Particle slow drift
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize handler ─────────────────────────────────────────────────────────
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // ── Cleanup ────────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      torusGeo.dispose();
      wireMat.dispose();
      solidMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      aria-hidden="true"
    />
  );
}
