"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const domeImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UUDOE4uSRfOmLG4b4eOSMHFQWl04ZxwDUYVc3I2HWxwmzjBpEMugWh0Z7JRLFA77PMVJnpIGmEVAiZnRELCD-Ter6zNtAPA73pJdccbvsMs4g2vpXHg2_XfR6LPi7GQDSyQbJPa5kvX4dpOcadyobY_xSNTESGObM4VuzAx9iHkyqzPiFM41RMWXftY0FWUiDigIKyF894DEGQ3H_B3_-l-P-d-Ub9RntvbXuinG8PiU_pTC-B1AiuauOIwdKA8z8tnKRfp_gDw";

export default function Customize() {
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedInterior, setSelectedInterior] = useState("modern");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(2);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [aiRecommendations, setAiRecommendations] = useState<any[]>([]);
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const colors = [
    { id: "white", name: "White", value: "#ffffff" },
    { id: "beige", name: "Beige", value: "#f5f5dc" },
    { id: "green", name: "Forest Green", value: "#228b22" },
    { id: "gray", name: "Slate Gray", value: "#708090" },
  ];

  const interiors = [
    { id: "modern", name: "Modern Minimalist", description: "Clean lines, neutral tones" },
    { id: "rustic", name: "Rustic Cabin", description: "Wood accents, cozy feel" },
    { id: "luxury", name: "Luxury Resort", description: "Premium finishes, elegant" },
    { id: "eco", name: "Eco-Friendly", description: "Sustainable materials, natural" },
  ];

  const features = [
    { id: "solar", name: "Solar Panels", icon: "☀️", category: "energy" },
    { id: "rainwater", name: "Rainwater Harvesting", icon: "💧", category: "sustainability" },
    { id: "compost", name: "Composting System", icon: "🌱", category: "sustainability" },
    { id: "smart", name: "Smart Home Tech", icon: "📱", category: "technology" },
    { id: "hot-tub", name: "Outdoor Hot Tub", icon: "🛁", category: "luxury" },
    { id: "fireplace", name: "Fireplace", icon: "🔥", category: "comfort" },
    { id: "pool", name: "Infinity Pool", icon: "🏊", category: "luxury" },
    { id: "deck", name: "Deck & Pergola", icon: "🌳", category: "outdoor" },
  ];

  // AI-powered suggestions based on selections
  useEffect(() => {
    const suggestions: string[] = [];
    const recommendations: any[] = [];
    
    // Color-based suggestions
    if (selectedColor === "green" && !selectedFeatures.includes("solar")) {
      suggestions.push("Forest green pairs beautifully with solar panels for a complete eco-solution");
      recommendations.push({ type: "feature", id: "solar", reason: "Complements your eco-friendly color choice" });
    }
    
    // Interior style suggestions
    if (selectedInterior === "eco" || selectedInterior === "modern") {
      if (!selectedFeatures.includes("solar")) {
        suggestions.push("Add solar panels to maximize your eco-friendly design");
        recommendations.push({ type: "feature", id: "solar", reason: "Perfect for eco-conscious design" });
      }
      if (!selectedFeatures.includes("rainwater")) {
        suggestions.push("Rainwater harvesting complements sustainable living");
        recommendations.push({ type: "feature", id: "rainwater", reason: "Enhances sustainability" });
      }
    }
    
    if (selectedInterior === "luxury") {
      if (!selectedFeatures.includes("hot-tub")) {
        suggestions.push("A hot tub would elevate your luxury dome experience");
        recommendations.push({ type: "feature", id: "hot-tub", reason: "Adds luxury appeal" });
      }
      if (!selectedFeatures.includes("pool")) {
        suggestions.push("Consider an infinity pool for the ultimate luxury retreat");
        recommendations.push({ type: "feature", id: "pool", reason: "Premium luxury feature" });
      }
    }
    
    if (selectedInterior === "rustic") {
      if (!selectedFeatures.includes("fireplace")) {
        suggestions.push("A fireplace would create the perfect cozy rustic atmosphere");
        recommendations.push({ type: "feature", id: "fireplace", reason: "Essential for rustic charm" });
      }
    }
    
    // Color and interior combinations
    if (selectedColor === "beige" && selectedInterior === "modern") {
      suggestions.push("Beige exterior with modern interior creates a warm, contemporary feel");
    }
    
    if (selectedColor === "gray" && selectedInterior === "luxury") {
      suggestions.push("Slate gray with luxury interior offers sophisticated elegance");
    }
    
    // Feature combinations
    if (selectedFeatures.includes("solar") && !selectedFeatures.includes("smart")) {
      suggestions.push("Smart home tech can optimize your solar panel efficiency");
      recommendations.push({ type: "feature", id: "smart", reason: "Maximizes solar efficiency" });
    }
    
    setAiSuggestions(suggestions);
    setAiRecommendations(recommendations);
  }, [selectedColor, selectedInterior, selectedFeatures]);

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const applyAiRecommendation = (recommendation: any) => {
    if (recommendation.type === "feature" && !selectedFeatures.includes(recommendation.id)) {
      toggleFeature(recommendation.id);
    }
  };

  const generateAiDescription = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const description = `Your ${colors.find((c) => c.id === selectedColor)?.name.toLowerCase()} dome with ${interiors.find((i) => i.id === selectedInterior)?.name.toLowerCase()} interior creates a ${selectedInterior === "luxury" ? "sophisticated" : selectedInterior === "eco" ? "sustainable" : "harmonious"} living space. ${selectedFeatures.length > 0 ? `With ${selectedFeatures.length} premium features, this configuration offers the perfect blend of comfort and innovation.` : "This minimalist design focuses on clean aesthetics and functionality."}`;
    setAiMessage(description);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] flex flex-col">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header />

      <main className="flex-1 mx-auto max-w-[1600px] px-6 py-8 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              AI-Powered Dome Customization
            </h1>
            <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full">
              AI
            </span>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Personalize your eco-dome with AI-powered suggestions. Get intelligent recommendations as you design.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-6 text-sm">
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

        {/* AI Suggestions Banner */}
        {aiSuggestions.length > 0 && (
          <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                  AI Suggestions
                  <span className="text-xs font-normal text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    {aiSuggestions.length} recommendations
                  </span>
                </h3>
                <ul className="space-y-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-emerald-800 flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
                {aiRecommendations.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {aiRecommendations.map((rec, index) => (
                      <button
                        key={index}
                        onClick={() => applyAiRecommendation(rec)}
                        className="text-xs bg-emerald-500 text-white px-3 py-1.5 rounded-full hover:bg-emerald-600 transition-colors flex items-center gap-1"
                      >
                        <span>+</span>
                        {features.find((f) => f.id === rec.id)?.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* AI Assistant Toggle */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={() => setShowAiAssistant(!showAiAssistant)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold hover:shadow-lg transition-all"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {showAiAssistant ? "Hide" : "Show"} AI Assistant
          </button>
        </div>

        {/* AI Assistant Panel */}
        {showAiAssistant && (
          <div className="mb-6 bg-white rounded-xl p-6 shadow-lg ring-1 ring-slate-200/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">AI Design Assistant</h3>
                <p className="text-xs text-slate-500">Get personalized recommendations</p>
              </div>
            </div>
            {aiMessage ? (
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-700">{aiMessage}</p>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-lg p-4 mb-4 text-center">
                <p className="text-sm text-slate-500">Click below to generate AI description</p>
              </div>
            )}
            <button
              onClick={generateAiDescription}
              disabled={isGenerating}
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate AI Description
                </>
              )}
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Dome Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/60">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3D Preview</h2>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
              <img
                src={domeImageUrl}
                alt="Customizable Dome"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-2">Selected Options:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                      {colors.find((c) => c.id === selectedColor)?.name}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {interiors.find((i) => i.id === selectedInterior)?.name}
                    </span>
                    {selectedFeatures.length > 0 && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        {selectedFeatures.length} Features
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Customization Options */}
          <div className="space-y-6">
            {/* Color Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/60">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Exterior Color</h3>
              <div className="grid grid-cols-4 gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`relative rounded-lg p-4 border-2 transition-all ${
                      selectedColor === color.id
                        ? "border-emerald-500 ring-2 ring-emerald-200"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className="w-full h-16 rounded-md mb-2"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="text-sm font-medium text-slate-700">{color.name}</div>
                    {selectedColor === color.id && (
                      <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Interior Style */}
            <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/60">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Interior Style</h3>
              <div className="grid grid-cols-2 gap-4">
                {interiors.map((interior) => (
                  <button
                    key={interior.id}
                    onClick={() => setSelectedInterior(interior.id)}
                    className={`relative rounded-xl p-4 border-2 text-left transition-all ${
                      selectedInterior === interior.id
                        ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="font-semibold text-slate-900 mb-1">{interior.name}</div>
                    <div className="text-sm text-slate-500">{interior.description}</div>
                    {selectedInterior === interior.id && (
                      <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Additional Features</h3>
                {aiRecommendations.length > 0 && (
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                    {aiRecommendations.length} AI recommended
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {features.map((feature) => {
                  const isRecommended = aiRecommendations.some((r) => r.id === feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`relative rounded-lg p-4 border-2 transition-all ${
                        selectedFeatures.includes(feature.id)
                          ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200"
                          : isRecommended
                          ? "border-emerald-300 bg-emerald-50/50 hover:border-emerald-400"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      {isRecommended && !selectedFeatures.includes(feature.id) && (
                        <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                          <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      )}
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <div className="text-sm font-medium text-slate-700">{feature.name}</div>
                      {selectedFeatures.includes(feature.id) && (
                        <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                          <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/get-quote"
            className="rounded-full border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 inline-block"
          >
            ← Back
          </Link>
          <Link
            href="/summary"
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 shadow-lg shadow-emerald-200 inline-block"
          >
            Next: Summary
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

