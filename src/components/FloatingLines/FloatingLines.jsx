import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./FloatingLines.css";

/**
 * Minimal, configurable floating lines background using Three.js.
 * It is intentionally self-contained so you can later swap it
 * with your own implementation if desired.
 */

function FloatingLines({ config }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (config?.mixBlendMode) {
      renderer.domElement.style.mixBlendMode = config.mixBlendMode;
    }

    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Config with sensible fallbacks
    const {
      linesGradient = ["#14b8a6", "#0d9488", "#0f766e"],
      lineCount = 4,
      lineDistance = 6,
      animationSpeed = 0.6,
      parallax = true,
      parallaxStrength = 0.15,
      interactive = true,
      mouseDamping = 0.08,
    } = config || {};

    const lines = [];
    const group = new THREE.Group();
    scene.add(group);

    const colorStops = linesGradient.map((c) => new THREE.Color(c));

    for (let i = 0; i < lineCount; i += 1) {
      const points = [];
      const segments = 200;
      const y = (i - (lineCount - 1) / 2) * lineDistance;

      for (let j = 0; j <= segments; j += 1) {
        const x = ((j / segments) - 0.5) * 40;
        const z = 0;
        points.push(new THREE.Vector3(x, y, z));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: colorStops[i % colorStops.length],
        transparent: true,
        opacity: 0.7,
        linewidth: 1.5,
      });

      const line = new THREE.Line(geometry, material);
      group.add(line);
      lines.push({ line, baseY: y, phase: Math.random() * Math.PI * 2 });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (event) => {
      if (!interactive) return;
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = x;
      targetMouseY = y;
    };

    if (interactive) {
      window.addEventListener("pointermove", onPointerMove);
    }

    const onResize = () => {
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", onResize);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime() * animationSpeed;

      mouseX += (targetMouseX - mouseX) * mouseDamping;
      mouseY += (targetMouseY - mouseY) * mouseDamping;

      if (parallax) {
        group.position.x = mouseX * parallaxStrength * -10;
        group.position.y = mouseY * parallaxStrength * -6;
      }

      lines.forEach(({ line, baseY, phase }, index) => {
        const position = line.geometry.attributes.position;
        const len = position.count;
        const waveOffset = index * 0.5;

        for (let i = 0; i < len; i += 1) {
          const x = position.getX(i);
          const wave = Math.sin((x * 0.12) + t + waveOffset + phase) * 1.2;
          position.setY(i, baseY + wave);
        }

        position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      if (interactive) {
        window.removeEventListener("pointermove", onPointerMove);
      }
      lines.forEach(({ line }) => {
        line.geometry.dispose();
        line.material.dispose();
      });
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [config]);

  return <div ref={containerRef} className="floating-lines-container" />;
}

export default FloatingLines;

