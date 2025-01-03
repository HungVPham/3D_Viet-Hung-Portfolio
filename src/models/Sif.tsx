/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Catholomew (https://sketchfab.com/Catholomew)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/great-grey-wolf-sif-dark-souls-remastered-a582ce6b97a5435fae37f06beae1ca5a
Title: Great Grey Wolf Sif - Dark Souls Remastered
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import sifScene from '../assets/3d/sif.glb'

const Sif = ({ currentAnimation, ...props }) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(sifScene)

  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop());

    switch (currentAnimation) {
      case "idle":
        if(actions["[Action Stash].006"]){
          actions["[Action Stash].006"].play()
        }
        break;
      case "walking":
        if(actions["[Action Stash].001"]){
          actions["[Action Stash].001"].play()
        }
        break;
      case "running":
        if(actions["c5210|a00_0500"]){
          actions["c5210|a00_0500"].play()
        }
        break;
      case "attack":
        if(actions["[Action Stash].003"]){
          actions["[Action Stash].003"].play()
        }
        break;
    }

  }, [actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.275}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="c5210_414">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.c5210_Material_0}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.c5210_Material_1}
                    skeleton={nodes.Object_8.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.c5210_Material_1_Variant_1}
                    skeleton={nodes.Object_9.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.c5210_Material_2}
                    skeleton={nodes.Object_10.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.c5210_Material_2_Variant_1}
                    skeleton={nodes.Object_11.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.c5210_Material_3}
                    skeleton={nodes.Object_12.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <group name="c5210_Mesh_413" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Sif;

useGLTF.preload(sifScene)