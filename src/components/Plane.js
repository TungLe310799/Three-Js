/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: pafart_ (https://sketchfab.com/pafart_)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/fortnite-plane-cc1274df0f0845df8da7af3fe3053f57
title: Fortnite plane
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/plane.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.008}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_7.geometry}
              material={materials.M_Vehicle_FuelLevel}
              skeleton={nodes.Object_7.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_8.geometry}
              material={materials.MI_Biplane_Parts}
              skeleton={nodes.Object_8.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_9.geometry}
              material={materials.MI_Biplane_Base}
              skeleton={nodes.Object_9.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/plane.gltf");
