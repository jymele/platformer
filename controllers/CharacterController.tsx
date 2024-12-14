import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Player } from "../models/player";
import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
// import { cameraPosition } from "three/webgpu";
// import { Capsule } from "@react-three/drei";

export default function CharacterController() {
  const container = React.useRef<THREE.Group>(null);
  const cameraTarget = React.useRef<THREE.Group>(null);
  const cameraPosition = React.useRef<THREE.Group>(null);
  const character = React.useRef<THREE.Group>(null);

  const cameraWorldPosition = useRef(new THREE.Vector3());
  const cameraLookAtWorldPosition = useRef(new THREE.Vector3());
  const cameraLookAt = useRef(new THREE.Vector3());

  useFrame(({ camera }) => {
    if (
      !container.current ||
      !cameraTarget.current ||
      !cameraPosition.current ||
      !character.current
    )
      return;
    cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 0.1);

    if (cameraTarget.current) {
      cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
      cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);
      camera.lookAt(cameraLookAt.current);
    }
  });

  return (
    <>
      <RigidBody colliders={false}>
        <group ref={container}>
          <group ref={cameraTarget} position-z={1.5} />
          <group ref={cameraPosition} position-y={2.5} position-z={-4} />
          <group ref={character}>
            <Player position-y={-0.29} />
          </group>
        </group>
        <CapsuleCollider args={[0.16, 0.32]} />
      </RigidBody>
    </>
  );
}
