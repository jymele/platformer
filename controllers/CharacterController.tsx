import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import * as Rapier from "@dimforge/rapier3d-compat";
import { Player } from "../models/player";
import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useKeyboardControls } from "@react-three/drei";
// import { cameraPosition } from "three/webgpu";
// import { Capsule } from "@react-three/drei";

export default function CharacterController() {
  const { WALK_SPEED, RUN_SPEED } = useControls("Character Control", {
    WALK_SPEED: { value: 0.8, min: 0.1, max: 4, step: 0.1 },
    RUN_SPEED: { value: 1.6, min: 0.2, max: 12, step: 0.1 },
  });

  const rb = useRef<Rapier.RigidBody | null>(null);
  const container = React.useRef<THREE.Group>(null);
  const cameraTarget = React.useRef<THREE.Group>(null);
  const cameraPosition = React.useRef<THREE.Group>(null);
  const character = React.useRef<THREE.Group>(null);

  const cameraWorldPosition = useRef(new THREE.Vector3());
  const cameraLookAtWorldPosition = useRef(new THREE.Vector3());
  const cameraLookAt = useRef(new THREE.Vector3());

  const [, get] = useKeyboardControls();

  useFrame(({ camera }) => {
    /**
     * Handle character movement
     */
    if (rb.current) {
      const vel = rb.current.linvel();

      const movement = {
        x: 0,
        z: 0,
      };

      if (get().forward) {
        movement.z = 1;
      }
      if (get().backward) {
        movement.z = -1;
      }

      const speed = get().run ? RUN_SPEED : WALK_SPEED;

      if (get().left) {
        movement.x = -1;
      }
      if (get().right) {
        movement.x = 1;
      }

      // Apply the movement
      if (movement.x || movement.z) {
        vel.z = speed * movement.z;
      }
      rb.current.setLinvel(vel, true);
    }

    /**
     * Handle camera movement
     * The camera should follow the character but it should look at a point in front of the character
     */
    if (
      !container.current ||
      !cameraTarget.current ||
      !cameraPosition.current ||
      !character.current
    )
      return;
    cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 0.1);

    // if (cameraTarget.current) {
    cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
    cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);
    camera.lookAt(cameraLookAt.current);
    // }
  });

  return (
    <>
      <RigidBody colliders={false} position-y={1} lockRotations ref={rb}>
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
