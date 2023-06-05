import React from 'react';
import {MeshReflectorMaterial} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {RepeatWrapping, TextureLoader} from "three";

import normalImg from '../assets/terrain-normal.jpg';
import roughnessImg from '../assets/terrain-roughness.jpg';


const Ground = () => {
  const [normalMap, roughnessMap] = useLoader(TextureLoader, [normalImg, roughnessImg]);

  [normalMap, roughnessMap].forEach(t => {
    t.wrapT = RepeatWrapping;
    t.wrapS = RepeatWrapping;

    t.repeat.set(5,5);
  })

  return (
    <mesh rotation-x={-Math.PI * .5} castShadow={true} receiveShadow={true}>
      <planeGeometry args={[30,30]}/>
      <MeshReflectorMaterial
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        envMapIntensity={0}
        dithering={true}
        color={[0.15,0.15,0.15]}
        roughness={.7}
        blur={[1000,400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={.25}
        reflectorOffset={0.2}
      />
    </mesh>
  );
};

export default Ground;
