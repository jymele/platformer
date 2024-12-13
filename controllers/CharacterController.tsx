import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Player } from "../models/player";
import React from "react";
// import { Capsule } from "@react-three/drei";

export default function CharacterController() {
  return (
    <>
      <RigidBody colliders={false}>
        <CapsuleCollider args={[0.16, 0.3]} />
        <Player position-y={-0.29} />
      </RigidBody>
    </>
  );
}
