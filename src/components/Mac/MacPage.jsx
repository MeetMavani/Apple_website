import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const MacPage = () => {
  return (
    <div className="main ">
      <div className="content w-full sm:w-4/5 md:w-3/4 lg:w-1/3 xl:w-1/3 px-4 sm:px-6 lg:px-8 text-white font-rubik top-24">
        <h3 className="masked text-4xl sm:text-5xl lg:text-6xl -mt-1 sm:-mt-1.5 md:-mt-2 lg:-mt-2 xl:-mt-2.5 tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5 className="text-gray-500">Please Don't Scroll</h5>
        <p className="text-white text-2xl ">
          Mind-blowing. <br /> Head-turning.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default MacPage;
