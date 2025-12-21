"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const locations = [
  { id: "lakeside", name: "Lakeside", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" },
  { id: "ocean", name: "Ocean", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
  { id: "forest", name: "Forest", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80" },
  { id: "riverside", name: "Riverside", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80" },
  { id: "mountain", name: "Mountain", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80" },
];

const sizes = [
  { id: "xs", name: "XS", persons: "2 Person", area: "20m²", icon: "single" },
  { id: "s", name: "S", persons: "4 Person", area: "45m²", icon: "couple" },
  { id: "m", name: "M", persons: "6 Person", area: "70m²", icon: "small-family" },
  { id: "l", name: "L", persons: "8 Person", area: "100m²", icon: "family" },
  { id: "xl", name: "XL", persons: "10+ Person", area: "140m²", icon: "large" },
];

export default function GetQuote() {
  const [selectedLocation, setSelectedLocation] = useState("lakeside");
  const [selectedSize, setSelectedSize] = useState("s");
  const [currentStep, setCurrentStep] = useState(1);

  const renderSizeIcon = (icon: string) => {
    switch (icon) {
      case "single":
        return (
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case "couple":
        return (
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "small-family":
        return (
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "family":
        return (
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m0-2.803a4 4 0 11-8 0 4 4 0 018 0zM9 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "large":
        return (
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] flex flex-col">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header />

      <main className="flex-1 mx-auto max-w-[1600px] px-6 py-8 lg:px-8 w-full">
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl mb-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2x2tvOJcPxG0aNOZQ0e3N3nC8VzujLQtiZDTmzl_C6UecedB07KXZS6RNGZktHAUqyDSgDVRfCOmqVmU1gLsbCDo0cKqdSRfbUroSlM80h9VnDifAiEu68QnkdPJAzevzNv6GQCdc-NnsXWcaah0TkcZy45akxfYUVYZxksp7AN6bqvDHeH_B9klzcbIpJGl9n2GYfp9rEGh7OX3lrayZWjl0mM34UMT5BTPbLhNmyLevTgnLn3ybdU5Pj70sZ3MtwRanXhAe0A")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/40" />
          <div className="relative px-8 py-16 text-center lg:py-20">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Design Your Dream Eco-Dome
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto">
              Begin your journey to sustainable living and passive income. Start by selecting your ideal location and dome size.
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-10 text-sm">
          <span className={`font-medium ${currentStep >= 1 ? "text-emerald-600" : "text-slate-400"}`}>
            Start
          </span>
          <span className="text-slate-400">/</span>
          <span className={`font-medium ${currentStep >= 2 ? "text-emerald-600" : "text-slate-400"}`}>
            Customize
          </span>
          <span className="text-slate-400">/</span>
          <span className={`font-medium ${currentStep >= 3 ? "text-emerald-600" : "text-slate-400"}`}>
            Summary
          </span>
        </div>

        {/* Step 1: Choose Location */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">1. Choose Your Location</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className={`relative overflow-hidden rounded-xl aspect-[4/3] transition-all ${
                  selectedLocation === location.id
                    ? "ring-2 ring-emerald-500 ring-offset-2"
                    : "hover:ring-2 hover:ring-slate-300"
                }`}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-medium text-sm">
                  {location.name}
                </span>
                {selectedLocation === location.id && (
                  <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Step 2: Select Size */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">2. Select Your Size</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`relative rounded-2xl p-8 text-center transition-all bg-white ${
                  selectedSize === size.id
                    ? "ring-2 ring-emerald-500"
                    : "ring-1 ring-slate-200 hover:ring-slate-300"
                }`}
              >
                <div className={`mx-auto mb-4 ${selectedSize === size.id ? "text-emerald-600" : "text-slate-400"}`}>
                  {renderSizeIcon(size.icon)}
                </div>
                <h3 className={`text-xl font-bold ${selectedSize === size.id ? "text-emerald-600" : "text-slate-900"}`}>
                  {size.name}
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  {size.persons} | {size.area}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end mb-8">
          <Link
            href="/customize"
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 shadow-lg shadow-emerald-200 inline-block"
          >
            Next: Customize
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
