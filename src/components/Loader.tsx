import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 animate-pulse"></div>
    </Html>
  );
};

export default Loader;
