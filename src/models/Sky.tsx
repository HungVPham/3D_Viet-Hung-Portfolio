/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import skyScene from '../assets/3d/sky.glb';

const Sky = ({ isDay }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  const skyColor = useMemo(() => {
    return isDay ? new THREE.Color(0x70a4d5) : new THREE.Color(0x4e5d6b);
  }, [isDay]);

  const emissiveColor = useMemo(() => {
    return isDay ? new THREE.Color(0xffffff) : new THREE.Color(0x3e4457);
  }, [isDay]);

  useEffect(() => {
    if (skyRef.current) {
      skyRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          // Create a new material if it doesn't exist
          if (!child.material.color) {
            child.material = new THREE.MeshStandardMaterial();
          }
          
          // Safely update material properties
          child.material.color = skyColor;
          child.material.emissive = emissiveColor;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [isDay, skyColor, emissiveColor]);

  return (
    <primitive 
      ref={skyRef}
      object={sky.scene} 
      scale={0.1} 
      position={[0, 0, 0]} 
      rotation={[0, 1.5, 0]} 
    />
  );
};

export default Sky;

// Preload the model
useGLTF.preload(skyScene);