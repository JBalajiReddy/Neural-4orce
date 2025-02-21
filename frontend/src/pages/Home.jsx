import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Trending Styles, Curated Just for You
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                See your favorite styles come to life! Upload an image and let
                our AI show how the outfit fits in real-time.
              </p>
              <Link
                to="/try-on"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Try Now
              </Link>
            </div>
            <div className="hidden lg:block">
              <img
                src="./src/assets/main.jpg"
                alt="Fashion Model"
                className="w-96 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Currently Trending Outfits
          </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
  "./src/assets/shirts/b_shirt.jpg",
  "./src/assets/shirts/r_shirt.png",
  "./src/assets/shirts/w_hoodie.png",
  "./src/assets/shirts/w_shirt.jpg",
  "./src/assets/shirts/y_hoodie.png",
  "./src/assets/shirts/y_jacket.png",
  "./src/assets/pants/b_jeans.jpg",
  "./src/assets/pants/b_pant.jpg",
  "./src/assets/pants/blue_jeans.jpg",
  "./src/assets/pants/y_cargo.png"
].map((item, index) => (
        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={item}
            alt={Trending outfit ${index + 1}} // Fixed alt text
            className="w-full h-64 object-cover"
          />
        </div>
      ))}

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Infinity Threads Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Data Collection & Preprocessing",
                  description:
                    "Customer-specific data, including height, weight, body measurements, skin tone and style preferences",
                },
                {
                  title: "Virtual Try-on System",
                  description:
                    "Computer vision and augmented reality(AR) to overlay recommended dresses onto uploaded customer photos",
                },
                {
                  title: "ML Recommendation Engine",
                  description:
                    "Machine learning model to analyze customer inputs and match them with the best outfit recommendations",
                },
                {
                  title: "Optimization & Development",
                  description:
                    "Extensive testing with real user inputs to validate accuracy and user experience",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="./src/assets/working.jpg"
                alt="AI Fashion Technology"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
