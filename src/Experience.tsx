import { Canvas } from "@react-three/fiber";
import { Terrain } from "../models/terrain";
import CharacterController from "../controllers/CharacterController";
import { Physics } from "@react-three/rapier";

export default function Experience() {
  return (
    <>
      <Canvas camera={{ position: [0, 5, -6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 10, 0]}
          intensity={1}
          castShadow
          receiveShadow
        />

        <Physics debug>
          <CharacterController />
          <Terrain />
        </Physics>
      </Canvas>
    </>
  );
}
