/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
// import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export function Terrain(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/terrain.glb") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/terrain.glb");
