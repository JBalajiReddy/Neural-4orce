import React from 'react';
import LOGO from '../assets/LOGO.svg';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="header p-4 flex justify-between items-center">
       
        <nav className="flex items-center space-x-6">
          <div className="flex items-center">
            {/* <Sparkles className="h-6 w-3 text-purple-600" /> */}
            <img src={LOGO} alt="Company Logo" className="h-12" />
            <span className="ml-2 font-bold text-xl">Neural 4orce</span>
          </div>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
        <div className="space-x-4">
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700">SignUp</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Login
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 flex items-center justify-between pt-20">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Trending Styles, Curated Just for You
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            See your favorite styles come to life! Upload an image and let our AI show
            how the outfit fits in real time.
          </p>
          <button
            onClick={() => navigate('/upload')}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transform transition hover:scale-105"
          >
            Try Now
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600"
            alt="Fashion Model"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
