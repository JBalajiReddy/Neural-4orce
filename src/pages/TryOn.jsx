import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  SpotLight,
} from "@react-three/drei";
import { Upload } from "lucide-react";

const predefinedModels = {
  white_black: "https://models.readyplayer.me/67b8899ad1a93b4ffdbcc76d.glb",
  white_baggy: "https://models.readyplayer.me/67b889f256b46da91d4293f4.glb",
  white_baggy1: "https://models.readyplayer.me/67b88a485f9326866f3bdec7.glb",
  white_blue: "https://models.readyplayer.me/67b88b13e8245fd4a6858939.glb",
  yellow_black: "https://models.readyplayer.me/67b88d3425d68eb3481f6145.glb",
  yellow_baggy: "https://models.readyplayer.me/67b88b757e6657900e9faf89.glb",
  yellow_baggy1: "https://models.readyplayer.me/67b88ca14407c822fc368627.glb",
  yellow_blue: "https://models.readyplayer.me/67b892609f7709fca5d69851.glb",
  black_black: "https://models.readyplayer.me/67b88f4f9891b9ec677968d6.glb",
  black_baggy: "https://models.readyplayer.me/67b891b77d64a20c3a8eb235.glb",
  black_baggy1: "https://models.readyplayer.me/67b8900cc3487873b845e1df.glb",
  black_blue: "https://models.readyplayer.me/67b8905da4ef95d2eb02bcd4.glb",
  y_jacket_black: "https://models.readyplayer.me/67b88fad5c5523e1d09b75e8.glb",
  y_jacket_baggy: "https://models.readyplayer.me/67b88e57c84a3c5b86a8626c.glb",
  y_jacket_baggy1: "https://models.readyplayer.me/67b890852fbdb6b530f7b476.glb",
  y_jacket_blue: "https://models.readyplayer.me/67b88ecdc3487873b845e006.glb",
  red_black: "https://models.readyplayer.me/67b89105b6e5c107ca48a8c4.glb",
  red_baggy: "https://models.readyplayer.me/67b892ddb9c9b61825493795.glb",
  red_baggy1: "https://models.readyplayer.me/67b8934b5a88dd021eac5d00.glb",
  red_blue: "https://models.readyplayer.me/67b8919496dac0e22d34eff3.glb",
  neon_black: "https://models.readyplayer.me/67b89151cbca3ce8c758214c.glb",
  neon_baggy: "https://models.readyplayer.me/67b892a26ca77a3b93ddf9fb.glb",
  neon_baggy1: "https://models.readyplayer.me/67b893008d7b6de4aea17f95.glb",
  neon_blue: "https://models.readyplayer.me/67b891d3a620b5a3e4b042df.glb",
};

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

const TryOn = () => {
  const [shirt, setShirt] = useState(null);
  const [pant, setPant] = useState(null);
  const [modelPath, setModelPath] = useState(null);
  const outfitInputRef = useRef(null);
  const photoInputRef = useRef(null);

  const handleFileInput = (e, type) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageName = file.name.toLowerCase().split(".")[0];
      if (type === "shirt") setShirt(imageName);
      else setPant(imageName);
    }
  };

  const handleGenerate = () => {
    if (shirt && pant) {
      const key = `${shirt}_${pant}`;
      if (predefinedModels[key]) {
        setModelPath(predefinedModels[key]);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12">Virtual Try-On</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFileInput(e, "shirt")}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFileInput(e, "pant")}
      />

      <button onClick={handleGenerate} disabled={!shirt || !pant}>
        Generate
      </button>

      {modelPath && (
        <Canvas>
          <ambientLight intensity={1.5} />
          <directionalLight intensity={2.5} position={[2, 2, 2]} />
          <SpotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={3}
          />
          <Environment preset="city" />
          <OrbitControls />
          <Model modelPath={modelPath} />
        </Canvas>
      )}
    </div>
  );
};

export default TryOn;
