import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Carregar Three.js via CDN como no original
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    script.onload = () => {
      if (!canvasRef.current || !window.THREE) return;

      const canvas = canvasRef.current;
      const scene = new window.THREE.Scene();
      const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new window.THREE.WebGLRenderer({ canvas: canvas, alpha: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      camera.position.z = 30;

      // Portal Effect - exatamente como no original
      const portalGeometry = new window.THREE.TorusGeometry(10, 2, 16, 100);
      const portalMaterial = new window.THREE.MeshBasicMaterial({
        color: 0x00ffdd,
        side: window.THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
      });
      const portal = new window.THREE.Mesh(portalGeometry, portalMaterial);
      portal.rotation.x = Math.PI / 2;
      scene.add(portal);

      // Floating Cubes - exatamente como no original
      const cubeGeometry = new window.THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new window.THREE.MeshBasicMaterial({ color: 0xff00cc, wireframe: true });
      const cubes: any[] = [];
      
      for (let i = 0; i < 50; i++) {
        const cube = new window.THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50
        );
        cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        cubes.push(cube);
        scene.add(cube);
      }

      // Stars - exatamente como no original
      const starsGeometry = new window.THREE.BufferGeometry();
      const starCount = 10000;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 400;
        positions[i + 1] = (Math.random() - 0.5) * 400;
        positions[i + 2] = (Math.random() - 0.5) * 400;
        colors[i] = Math.random();
        colors[i + 1] = Math.random();
        colors[i + 2] = 1;
      }

      starsGeometry.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
      starsGeometry.setAttribute('color', new window.THREE.BufferAttribute(colors, 3));

      const starsMaterial = new window.THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
      });

      const stars = new window.THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);

      // Animation - exatamente como no original
      function animate() {
        requestAnimationFrame(animate);
        portal.rotation.z += 0.01;
        cubes.forEach((cube: any) => {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          cube.position.y += Math.sin(Date.now() * 0.001 + cube.position.x) * 0.02;
        });
        stars.rotation.y += 0.0002;
        renderer.render(scene, camera);
      }

      animate();

      // Resize handler
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      // Mouse interaction - exatamente como no original
      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        camera.position.x = mouseX * 10;
        camera.position.y = mouseY * 10;
        camera.lookAt(scene.position);
      };

      window.addEventListener('resize', handleResize);
      document.addEventListener('mousemove', handleMouseMove);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bgCanvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default Background3D;