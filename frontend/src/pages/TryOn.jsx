import React, { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Upload } from 'lucide-react';
import './TryOn.css';

const modelMapping = {};

const loadModelMapping = () => {
  Papa.parse('/src/assets/Book1.csv', {
    download: true,
    header: true,
    complete: (results) => {
      results.data.forEach(row => {
        const key = `${row.shirt}_${row.pant}`;
        modelMapping[key] = row.url;
      });
    }
  });
};

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

const UploadBox = ({ type, onFileSelect, preview, inputRef }) => {
  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="upload-box" onClick={handleClick}>
      <div className="upload-content">
        {preview ? (
          <div className="w-32 h-32 relative">
            <img 
              src={preview} 
              alt={`${type} preview`} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ) : (
          <>
            <Upload className="upload-icon" />
            <div className="upload-text">
              <span className="upload-text-primary">
                Click or drag to upload {type}
              </span>
              <span className="upload-text-secondary">
                Supported formats: JPG, PNG
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const TryOn = () => {
  const [shirt, setShirt] = useState(null);
  const [pant, setPant] = useState(null);
  const [modelPath, setModelPath] = useState(null);
  const [shirtPreview, setShirtPreview] = useState(null);
  const [pantPreview, setPantPreview] = useState(null);
  const shirtInputRef = useRef(null);
  const pantInputRef = useRef(null);

  useEffect(() => {
    loadModelMapping();
  }, []);

  const handleFileInput = (e, type) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageName = file.name.toLowerCase().replace(/\.[^/.]+$/, "").trim();
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      
      if (type === "shirt") {
        setShirt(imageName);
        setShirtPreview(previewUrl);
      } else {
        setPant(imageName);
        setPantPreview(previewUrl);
      }
    }
  };

  const handleGenerate = () => {
    if (!shirt || !pant) {
      alert("Please upload both a shirt and a pant image.");
      return;
    }
  
    const key = `${shirt}_${pant}`.trim();
    console.log("Generated Key:", key);
  
    if (modelMapping[key]) {
      setModelPath(modelMapping[key]);
    } else {
      alert("No matching model found for the selected combination.");
    }
  };

  // Cleanup preview URLs when component unmounts
  useEffect(() => {
    return () => {
      if (shirtPreview) URL.revokeObjectURL(shirtPreview);
      if (pantPreview) URL.revokeObjectURL(pantPreview);
    };
  }, []);

  return (
    <div className="try-on-container">
      <div className="content-wrapper">
        <h1 className="title">Virtual Try-On Experience</h1>
        
        <div className="upload-section">
          <div>
            <input
              ref={shirtInputRef}
              type="file"
              onChange={(e) => handleFileInput(e, 'shirt')}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <UploadBox 
              type="shirt"
              preview={shirtPreview}
              inputRef={shirtInputRef}
            />
          </div>

          <div>
            <input
              ref={pantInputRef}
              type="file"
              onChange={(e) => handleFileInput(e, 'pant')}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <UploadBox 
              type="pants"
              preview={pantPreview}
              inputRef={pantInputRef}
            />
          </div>
        </div>

        <button 
          className="generate-button" 
          onClick={handleGenerate} 
          disabled={!shirt || !pant}
        >
          Generate 3D Model
        </button>

        {modelPath && (
          <div className="canvas-container">
            <Canvas>
              <ambientLight intensity={1.5} />
              <directionalLight intensity={2.5} position={[2, 2, 2]} />
              <Environment preset="city" />
              <OrbitControls />
              <Model modelPath={modelPath} />
            </Canvas>
          </div>
        )}
      </div>
    </div>
  );
};

export default TryOn;
