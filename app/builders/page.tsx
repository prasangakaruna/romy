"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const builders = [
  {
    id: 1,
    name: "Eco Builders Inc.",
    location: "Austin, TX",
    rating: 4.9,
    logo: "ECO",
    logoColor: "bg-emerald-500",
    services: ["Off-Grid Specialist", "Full Installation", "Master Certified"],
  },
  {
    id: 2,
    name: "Geodesic Solutions",
    location: "Boulder, CO",
    rating: 4.7,
    logo: "GS",
    logoColor: "bg-amber-600",
    services: ["Foundation Only", "Advanced Certified"],
  },
  {
    id: 3,
    name: "Sustainable Structures",
    location: "Portland, OR",
    rating: 5.0,
    logo: "SS",
    logoColor: "bg-emerald-500",
    services: ["Off-Grid Specialist", "Full Installation", "Master Certified"],
  },
  {
    id: 4,
    name: "Green Dome Construction",
    location: "Seattle, WA",
    rating: 4.8,
    logo: "GDC",
    logoColor: "bg-teal-500",
    services: ["Full Installation", "Advanced Certified", "Design Services"],
  },
  {
    id: 5,
    name: "EcoSphere Builders",
    location: "San Francisco, CA",
    rating: 4.9,
    logo: "ESB",
    logoColor: "bg-emerald-600",
    services: ["Off-Grid Specialist", "Master Certified", "Custom Design"],
  },
  {
    id: 6,
    name: "Nature Dome Co.",
    location: "Denver, CO",
    rating: 4.6,
    logo: "NDC",
    logoColor: "bg-green-600",
    services: ["Foundation Only", "Basic Certified"],
  },
];

export default function BuildersPortal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedCertification, setSelectedCertification] = useState("");

  const filteredBuilders = builders.filter((builder) => {
    const matchesSearch =
      builder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      builder.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesService =
      !selectedService || builder.services.some((s) => s.includes(selectedService));
    const matchesCertification =
      !selectedCertification ||
      builder.services.some((s) => s.toLowerCase().includes(selectedCertification.toLowerCase()));
    return matchesSearch && matchesService && matchesCertification;
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] flex flex-col">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header />

      <main className="flex-1 mx-auto max-w-[1600px] px-6 py-8 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Certified Builders Portal
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Find trusted professionals for your eco-dome project. Roomy Domy helps builders by connecting them with projects in their local area.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by city, state"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
          >
            <option value="">Services Offered</option>
            <option value="Off-Grid">Off-Grid Specialist</option>
            <option value="Full Installation">Full Installation</option>
            <option value="Foundation">Foundation Only</option>
            <option value="Design">Design Services</option>
          </select>
          <select
            value={selectedCertification}
            onChange={(e) => setSelectedCertification(e.target.value)}
            className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
          >
            <option value="">Certification Level</option>
            <option value="master">Master Certified</option>
            <option value="advanced">Advanced Certified</option>
            <option value="basic">Basic Certified</option>
          </select>
        </div>

        {/* Main Content - Map and Builders List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Panel - Map */}
          <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/60">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Find Builders Near You</h2>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="h-16 w-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-slate-500">Interactive Map</p>
                  <p className="text-sm text-slate-400">Click on markers to view builder details</p>
                </div>
              </div>
              {/* Map markers */}
              {filteredBuilders.map((builder, index) => (
                <div
                  key={builder.id}
                  className="absolute"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 2) * 20}%`,
                  }}
                >
                  <div className="relative">
                    <div className="h-4 w-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform" />
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                      {builder.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Builders List */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Our Network of Certified Builders
            </h2>
            <div className="space-y-4">
              {filteredBuilders.map((builder) => (
                <div
                  key={builder.id}
                  className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200/60 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${builder.logoColor} h-16 w-16 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {builder.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{builder.name}</h3>
                          <p className="text-sm text-slate-600">{builder.location}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-semibold text-slate-900">{builder.rating}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {builder.services.map((service, index) => (
                          <span
                            key={index}
                            className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <button className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
                        View Portfolio →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Grow Your Business with Roomy Domy
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We connect you with qualified leads for dome projects in your service area.
            </p>
            <Link
              href="/builders/register"
              className="inline-block rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-emerald-600 shadow-lg shadow-emerald-200"
            >
              Become a Certified Builder
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

