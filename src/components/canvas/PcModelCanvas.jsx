'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';


const Model = () => {
  const pc = useGLTF('/assets/gaming_desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.5} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive
        scale={1}
        object={pc.scene}
        position={[0, -3.25, -1.5]}
        rotation={[0.01, -0.5, -0.05]}
      />
    </mesh>
  );
};

const PcModelCanvas = () => {
  const [mouseState, setMouseState] = useState('grab');
  return (
    <Canvas
      style={{ cursor: `${mouseState}` }}
      onMouseDown={() => setMouseState('grabbing')}
      onMouseUp={() => setMouseState('grab')}
      frameloop='demand'
      shadows
      camera={{ position: [20, 4, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PcModelCanvas;