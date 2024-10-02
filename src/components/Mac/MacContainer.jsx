import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

const MacContainer = () => {
  let model = useGLTF("./Mac/mac.glb");
  // let texture = useTexture("./Mac/red.jpg");
  let meshes = {};
  const imageUrls = [
    "./Mac/red.jpg",
    "./Mac/mac1.jpg",
    "./Mac/mac2.jpg",
    "./Mac/mac3.jpg",
  ];

  // State to hold the current texture
  const [currentTexture, setCurrentTexture] = useState(imageUrls[0]);

  // Load the initial texture
  const texture = useTexture(currentTexture);

  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  // meshes.matte.material.map = texture;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 1;
  meshes.matte.material.roughness = 1;

  // Change texture every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTexture((prev) => {
        const currentIndex = imageUrls.indexOf(prev);
        const nextIndex = (currentIndex + 1) % imageUrls.length; // Loop back to the start
        return imageUrls[nextIndex];
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  let data = useScroll();

  useFrame((state, delta) => {
    // console.log(data.offset);

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    meshes.matte.material.map = texture; // Update the material map with the current texture
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
