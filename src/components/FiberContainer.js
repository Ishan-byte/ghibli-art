// Imports
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Container or Space for displaying 3D Model Objects
// I have specified the Camera positiong for the Container as well as enabled Shadow rendering.
const FiberContainer = () => {
  return (
    <Canvas camera={{ position: [14.4666, 2.0365, 5.556165], fov: 40 }}>
      <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
  );
};

export default FiberContainer;
