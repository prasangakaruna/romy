"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const domeImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UUDOE4uSRfOmLG4b4eOSMHFQWl04ZxwDUYVc3I2HWxwmzjBpEMugWh0Z7JRLFA77PMVJnpIGmEVAiZnRELCD-Ter6zNtAPA73pJdccbvsMs4g2vpXHg2_XfR6LPi7GQDSyQbJPa5kvX4dpOcadyobY_xSNTESGObM4VuzAx9iHkyqzPiFM41RMWXftY0FWUiDigIKyF894DEGQ3H_B3_-l-P-d-Ub9RntvbXuinG8PiU_pTC-B1AiuauOIwdKA8z8tnKRfp_gDw";

export default function Summary() {
  const [configName, setConfigName] = useState("My Mountain Getaway");
  const [detailsExpanded, setDetailsExpanded] = useState(true);
  const [featuresExpanded, setFeaturesExpanded] = useState(true);

  // Configuration data (would normally come from state/context)
  const configuration = {
    location: "Sierra Nevada",
    domeSize: "M (4-person)",
    layoutPlan: "Open Loft",
    interior: "Scandinavian",
    exteriorGlass: "Mirrored Bronze",
  };

  const outdoorFeatures = [
    "Infinity Pool",
    "Jacuzzi",
    "Pergola & Fire Pit",
  ];

  const pricing = {
    basePrice: 150000,
    outdoorAddons: 35000,
    taxesAndFees: 11100,
  };

  const totalPrice = pricing.basePrice + pricing.outdoorAddons + pricing.taxesAndFees;

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] flex flex-col">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header />

      <main className="flex-1 mx-auto max-w-[1600px] px-6 py-8 lg:px-8 w-full">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
          <Link href="/get-quote" className="hover:text-emerald-600 transition-colors">
            Configurator
          </Link>
          <span>/</span>
          <Link href="/customize" className="hover:text-emerald-600 transition-colors">
            Build
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">Summary</span>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Your Custom Dome Summary
          </h1>
          <p className="text-lg text-slate-600">
            Review your selections below and save or share your dream dome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Section - Dome Image */}
          <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/60">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
              <img
                src={domeImageUrl}
                alt="Your Custom Dome"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - Configuration Details */}
          <div className="space-y-6">
            {/* Back to Edit Button */}
            <div className="flex justify-end">
              <Link
                href="/customize"
                className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-200"
              >
                Back to Edit
              </Link>
            </div>

            {/* Configuration Name */}
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200/60">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Configuration Name
              </label>
              <input
                type="text"
                value={configName}
                onChange={(e) => setConfigName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter configuration name"
              />
            </div>

            {/* Configuration Details */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden">
              <button
                onClick={() => setDetailsExpanded(!detailsExpanded)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900">Configuration Details</h3>
                <svg
                  className={`h-5 w-5 text-slate-500 transition-transform ${detailsExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {detailsExpanded && (
                <div className="px-6 pb-6 space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Location:</span>
                    <span className="font-medium text-slate-900">{configuration.location}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Dome Size:</span>
                    <span className="font-medium text-slate-900">{configuration.domeSize}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Layout Plan:</span>
                    <span className="font-medium text-slate-900">{configuration.layoutPlan}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Interior:</span>
                    <span className="font-medium text-slate-900">{configuration.interior}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-600">Exterior Glass:</span>
                    <span className="font-medium text-slate-900">{configuration.exteriorGlass}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Outdoor Features */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden">
              <button
                onClick={() => setFeaturesExpanded(!featuresExpanded)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900">Outdoor Features</h3>
                <svg
                  className={`h-5 w-5 text-slate-500 transition-transform ${featuresExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {featuresExpanded && (
                <div className="px-6 pb-6 space-y-3">
                  {outdoorFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 py-2">
                      <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-900">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing Summary */}
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200/60">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Pricing Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2">
                  <span className="text-slate-600">Base Dome Price (M):</span>
                  <span className="font-medium text-slate-900">${pricing.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-600">Outdoor Add-ons:</span>
                  <span className="font-medium text-slate-900">${pricing.outdoorAddons.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-slate-200 pt-4">
                  <span className="text-slate-600">Estimated Taxes & Fees:</span>
                  <span className="font-medium text-slate-900">${pricing.taxesAndFees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-4 border-t-2 border-slate-300 pt-4">
                  <span className="text-xl font-bold text-slate-900">Total Price:</span>
                  <span className="text-2xl font-bold text-emerald-600">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-emerald-600 shadow-lg shadow-emerald-200">
                Proceed to Purchase
              </button>
              <div className="flex gap-3">
                <button className="flex-1 rounded-full bg-emerald-100 px-6 py-3 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-200 flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save
                </button>
                <button className="flex-1 rounded-full bg-emerald-100 px-6 py-3 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-200 flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

