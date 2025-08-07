import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';

const FloatingCube: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#ff00cc" wireframe />
    </mesh>
  );
};

const FloatingCubes: React.FC = () => {
  const groupRef = useRef<Group>(null);

  // Generate 50 random positions for cubes
  const cubePositions: [number, number, number][] = Array.from({ length: 50 }, () => [
    (Math.random() - 0.5) * 50,
    (Math.random() - 0.5) * 50,
    (Math.random() - 0.5) * 50
  ]);

  return (
    <group ref={groupRef}>
      {cubePositions.map((position, index) => (
        <FloatingCube key={index} position={position} />
      ))}
    </group>
  );
};

export default FloatingCubes;