import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Portal: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[10, 2, 16, 100]} />
      <meshBasicMaterial 
        color="#00ffdd" 
        transparent 
        opacity={0.5} 
        side={2} // DoubleSide
      />
    </mesh>
  );
};

export default Portal;