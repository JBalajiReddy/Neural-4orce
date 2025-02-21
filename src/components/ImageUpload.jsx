import React, { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
  const navigate = useNavigate();
  const [dragActiveOutfit, setDragActiveOutfit] = useState(false);
  const [dragActivePhoto, setDragActivePhoto] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [generatedResult, setGeneratedResult] = useState(null);

  const handleDrag = (e, setDragActive) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e, setImage) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveOutfit(false);
    setDragActivePhoto(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e, setImage) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleGenerate = () => {
    if (selectedOutfit && selectedPhoto) {
      // Simulate generation process
      setGeneratedResult('Generated Result');
    } else {
      alert('Please upload both images first');
    }
  };

  const UploadBox = ({ 
    title, 
    dragActive, 
    setDragActive, 
    selectedFile, 
    setSelectedFile 
  }) => (
    <div
      className={`w-64 h-48 rounded-lg p-4 transition-all duration-200 ${
        dragActive 
          ? "border-2 border-dashed border-purple-600 bg-purple-50" 
          : "border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50"
      }`}
      onDragEnter={(e) => handleDrag(e, setDragActive)}
      onDragLeave={(e) => handleDrag(e, setDragActive)}
      onDragOver={(e) => handleDrag(e, setDragActive)}
      onDrop={(e) => handleDrop(e, setSelectedFile)}
    >
      <div className="h-full flex flex-col items-center justify-center text-center">
        <Upload className="h-8 w-8 mb-2 text-gray-400" />
        <p className="text-sm font-medium mb-2">{title}</p>
        <label className="text-purple-600 hover:text-purple-700 cursor-pointer text-sm">
          Browse Files
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleChange(e, setSelectedFile)}
          />
        </label>
        {selectedFile && (
          <p className="mt-2 text-xs text-green-600 truncate max-w-full">
            {selectedFile.name}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Upload Your Outfit & Photo
        </h1>
        
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            <UploadBox
              title="Upload Outfit Image"
              dragActive={dragActiveOutfit}
              setDragActive={setDragActiveOutfit}
              selectedFile={selectedOutfit}
              setSelectedFile={setSelectedOutfit}
            />
            <UploadBox
              title="Upload Your Photo"
              dragActive={dragActivePhoto}
              setDragActive={setDragActivePhoto}
              selectedFile={selectedPhoto}
              setSelectedFile={setSelectedPhoto}
            />
          </div>

          <button
            onClick={handleGenerate}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedOutfit && selectedPhoto
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedOutfit || !selectedPhoto}
          >
            Generate
          </button>

          <div className="mt-8 w-96 h-72 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4 bg-white">
            {generatedResult ? (
              <div className="text-center">
                <p className="text-green-600 font-medium">Generation Complete!</p>
                <p className="text-sm text-gray-500 mt-2">{generatedResult}</p>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p className="font-medium">Output Preview</p>
                <p className="text-sm mt-2">
                  Your AI-generated result will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
