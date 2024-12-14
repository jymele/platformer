import { KeyboardControls } from "@react-three/drei";
import "./App.css";
import Experience from "./Experience";

const keyboardMap = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "left", keys: ["KeyA", "ArrowLeft"] },
  { name: "right", keys: ["KeyD", "ArrowRight"] },
  { name: "run", keys: ["ShiftLeft", "ShiftRight"] },
];

function App() {
  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Experience />
      </KeyboardControls>
    </>
  );
}

export default App;
