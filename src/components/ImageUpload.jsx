import React, { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedImage(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Upload Your Image</h1>
        
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? "border-purple-600 bg-purple-50" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg mb-4">
            Drag and drop your image here, or{" "}
            <label className="text-purple-600 hover:text-purple-700 cursor-pointer">
              browse
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: PNG, JPG, JPEG (max 10MB)
          </p>
          
          {selectedImage && (
            <div className="mt-6">
              <p className="text-green-600">Selected: {selectedImage.name}</p>
              <button
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                onClick={() => {
                  // Handle image processing here
                  alert('Processing image...');
                }}
              >
                Process Image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;