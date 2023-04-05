import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei";

import CanvasLoader from "../Loader";

console.log("Material color:", "#000000");

const Box = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[2, 2, 6]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <boxGeometry args={[1.3, 1.3, 1.3]} />
        <meshStandardMaterial
          color='#000000' 
          emissive='#ffffff'
          emissiveIntensity={10} 
          polygonOffset
          polygonOffsetFactor={-5}
          wireframe
        />
        <Decal
          position={[0, 0, 0.5]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};




const BoxCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Box imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BoxCanvas;