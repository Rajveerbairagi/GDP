'use client';
import { useEffect, useRef } from 'react';

// This component mounts Three.js in an isolated div to avoid React 19 / fiber v8 conflicts
const GDPThree = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (mountedRef.current || !containerRef.current) return;
    mountedRef.current = true;

    let animId: number;
    let renderer: any;

    const run = async () => {
      try {
        const THREE = await import('three');
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');

        const container = containerRef.current!;
        const w = container.clientWidth || 500;
        const h = container.clientHeight || 500;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(100, w / h, 0.1, 1000);
        camera.position.set(0, 0, 20);

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.style.display = 'block';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        container.appendChild(renderer.domElement);

        // Lights
        const ambient = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambient);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(10, 10, 5);
        scene.add(dirLight);
        const ptLight = new THREE.PointLight(0xffffff, 0.3);
        ptLight.position.set(-10, -10, -5);
        scene.add(ptLight);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.enableZoom = false;
        controls.enablePan = false;
        const maxAngle = (10 * Math.PI) / 180;
        controls.minPolarAngle = Math.PI / 2 - maxAngle;
        controls.maxPolarAngle = Math.PI / 2 + maxAngle;
        controls.minAzimuthAngle = -maxAngle;
        controls.maxAzimuthAngle = maxAngle;

        // Load model
        const loader = new GLTFLoader();
        loader.load(
          '/models/GDP.glb',
          (gltf) => {
            const model = gltf.scene;
            model.scale.set(0.3, 0.3, 0.3);
            model.position.set(8.5, -2, 0);
            model.rotation.set(Math.PI, 0, 0);
            scene.add(model);
          },
          undefined,
          (err) => console.error('Model load error:', err)
        );

        // Resize observer
        const ro = new ResizeObserver(() => {
          const cw = container.clientWidth;
          const ch = container.clientHeight;
          camera.aspect = cw / ch;
          camera.updateProjectionMatrix();
          renderer.setSize(cw, ch);
        });
        ro.observe(container);

        // Animate
        const animate = () => {
          animId = requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();

        cleanupRef.current = () => {
          cancelAnimationFrame(animId);
          ro.disconnect();
          controls.dispose();
          renderer.dispose();
          if (renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        };
      } catch (err) {
        console.error('Three.js setup error:', err);
      }
    };

    run();

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      mountedRef.current = false;
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', overflow: 'hidden' }} />;
};

export default GDPThree;
