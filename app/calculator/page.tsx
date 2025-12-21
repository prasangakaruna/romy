"use client";

import { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Calculator() {
  const [downPayment, setDownPayment] = useState(50000);
  const [domeSize, setDomeSize] = useState("solo");
  const [locationType, setLocationType] = useState("coastal");

  // Calculate projections based on inputs
  const calculateProjections = () => {
    const baseMonthly = domeSize === "solo" ? 2500 : domeSize === "duo" ? 3200 : 4000;
    const locationMultiplier = locationType === "coastal" ? 1.2 : locationType === "mountain" ? 1.1 : 1.0;
    const monthlyIncome = baseMonthly * locationMultiplier;
    const annualIncome = monthlyIncome * 12;
    const tenYearReturns = annualIncome * 10;
    const breakEvenYears = downPayment / annualIncome;
    const appreciation = 18; // Fixed at 18% for 5 years

    return {
      monthlyIncome: Math.round(monthlyIncome),
      tenYearReturns: Math.round(tenYearReturns),
      breakEvenYears: breakEvenYears.toFixed(1),
      appreciation,
    };
  };

  const projections = calculateProjections();

  // Chart data for comparison
  const chartData = [
    { year: "Year 1", traditional: 24000, roomy: projections.monthlyIncome * 12 },
    { year: "Year 3", traditional: 72000, roomy: projections.monthlyIncome * 12 * 3 },
    { year: "Year 5", traditional: 120000, roomy: projections.monthlyIncome * 12 * 5 },
    { year: "Year 10", traditional: 240000, roomy: projections.tenYearReturns },
  ];

  const maxValue = Math.max(...chartData.map((d) => Math.max(d.traditional, d.roomy)));

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] flex flex-col">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header activeNav="Calculator" />

      <main className="flex-1 mx-auto max-w-[1600px] px-6 py-12 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-4">
            Calculate Your Passive Income Potential
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Use our interactive calculator to project your investment returns with a Roomy Domy. Adjust the inputs to see your potential earnings in real-time.
          </p>
        </div>

        {/* Main Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Input Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/60">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Investment Plan</h2>
            
            {/* Down Payment Slider */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Down Payment
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="20000"
                  max="200000"
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$20K</span>
                  <span>$200K</span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="text-2xl font-bold text-emerald-600">
                  ${downPayment.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Dome Size Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Dome Size
              </label>
              <div className="flex gap-3">
                {[
                  { id: "solo", label: "Solo" },
                  { id: "duo", label: "Duo" },
                  { id: "family", label: "Family" },
                ].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setDomeSize(size.id)}
                    className={`flex-1 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                      domeSize === size.id
                        ? "bg-emerald-500 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Location Type
              </label>
              <select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="coastal">Coastal</option>
                <option value="mountain">Mountain</option>
                <option value="forest">Forest</option>
                <option value="riverside">Riverside</option>
              </select>
            </div>
          </div>

          {/* Right Column - Output Section */}
          <div className="space-y-4">
            {/* Top Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Monthly Income */}
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200/60 relative">
                <div className="absolute top-4 left-4 h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mt-8">
                  <div className="text-3xl font-bold text-slate-900">
                    ${projections.monthlyIncome.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    Estimated net rental revenue.
                  </div>
                </div>
              </div>

              {/* 10-Year Returns */}
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200/60 relative">
                <div className="absolute top-4 left-4 h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="mt-8">
                  <div className="text-3xl font-bold text-slate-900">
                    ${projections.tenYearReturns.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    Total projected income over a decade.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Break-Even Timeline */}
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200/60 relative">
                <div className="absolute top-4 left-4 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mt-8">
                  <div className="text-3xl font-bold text-slate-900">
                    {projections.breakEvenYears} Years
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    Time to recoup your initial investment.
                  </div>
                </div>
              </div>

              {/* Appreciation Projections */}
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200/60 relative">
                <div className="absolute top-4 left-4 h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="mt-8">
                  <div className="text-3xl font-bold text-slate-900">
                    +{projections.appreciation}%
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    Projected property value increase in 5 years.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10-Year Growth Comparison Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/60 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            10-Year Growth: Roomy Domy vs. Traditional Rental
          </h3>
          <div className="grid grid-cols-4 gap-6 mb-4">
            {chartData.map((data, index) => {
              const traditionalHeight = (data.traditional / maxValue) * 200;
              const roomyHeight = (data.roomy / maxValue) * 200;
              return (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-slate-700 mb-4">{data.year}</div>
                  <div className="flex items-end justify-center gap-3 h-56">
                    <div className="flex flex-col items-center justify-end">
                      <div
                        className="w-14 bg-slate-300 rounded-t transition-all min-h-[20px]"
                        style={{ height: `${traditionalHeight}px` }}
                      />
                      <div className="text-xs text-slate-500 mt-2 font-medium">${(data.traditional / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-slate-400 mt-1">Traditional</div>
                    </div>
                    <div className="flex flex-col items-center justify-end">
                      <div
                        className="w-14 bg-emerald-500 rounded-t transition-all min-h-[20px]"
                        style={{ height: `${roomyHeight}px` }}
                      />
                      <div className="text-xs text-emerald-600 font-semibold mt-2">${(data.roomy / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-emerald-600 mt-1 font-medium">Roomy Domy</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-slate-300 rounded"></div>
              <span className="text-sm text-slate-600">Traditional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-500 rounded"></div>
              <span className="text-sm text-slate-600">Roomy Domy</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center">
            Disclaimer: These figures are estimates based on market averages and your inputs. Actual returns may vary.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-12 shadow-sm ring-1 ring-slate-200/60 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Our team is here to provide a detailed, personalized quote based on your specific goals and location.
          </p>
          <button className="rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600 hover:shadow-xl">
            Request a Personalized Consultation
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

