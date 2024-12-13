import { Canvas } from "@react-three/fiber";
import { Terrain } from "../models/terrain";
import { OrbitControls } from "@react-three/drei";
import { Player } from "../models/player";

export default function Experience() {
  return (
    <>
      <Canvas camera={{ position: [0, 5, -6] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 10, 0]}
          intensity={1}
          castShadow
          receiveShadow
        />

        {/* <Capsule args={[]} /> */}
        <Player />
        <Terrain />
      </Canvas>
    </>
  );
}
