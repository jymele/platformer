/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
  };
  materials: {};
};

export function Player(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/player.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 0.284, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/player.glb");
