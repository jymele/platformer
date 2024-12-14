/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.SkinnedMesh;
    Cube001: THREE.SkinnedMesh;
    Cube002: THREE.SkinnedMesh;
    Bone: THREE.Bone;
    Bone001: THREE.Bone;
    Bone002: THREE.Bone;
    Bone003: THREE.Bone;
    Bone004: THREE.Bone;
    Bone005: THREE.Bone;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "idle";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>;
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Character(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/models/char.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 1.514, 0]}>
          <skinnedMesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            skeleton={nodes.Cube.skeleton}
          />
          <skinnedMesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials.Material}
            skeleton={nodes.Cube001.skeleton}
          />
          <skinnedMesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={materials.Material}
            skeleton={nodes.Cube002.skeleton}
          />
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone002} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone004} />
          <primitive object={nodes.Bone005} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/char.glb");
