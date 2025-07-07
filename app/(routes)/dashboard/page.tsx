"use client";
import Link from "next/link";
import React from "react";

const Features = [
  {
    id: 1,
    title: "AI Thumbnail Generator",
    description:
      "Create stunning thumbnails with AI-powered design suggestions",
    gradient: "from-red-500 to-red-600",
    path: "/thumbnail-generator",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    stats: "95% Success Rate",
  },
  {
    id: 2,
    title: "Video Title Optimizer",
    description: "Optimize your video titles for maximum engagement and SEO",
    gradient: "from-red-500 to-red-600",
    path: "/title-optimizer",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    stats: "3x More Views",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Get deep insights into your channel performance",
    gradient: "from-red-500 to-red-600",
    path: "/analytics",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    stats: "Real-time Data",
  },
  {
    id: 4,
    title: "Content Scheduler",
    description: "Plan and schedule your content for optimal posting times",
    gradient: "from-red-500 to-red-600",
    path: "/scheduler",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    stats: "Auto-Publish",
  },
  {
    id: 5,
    title: "Hashtag Generator",
    description: "Generate trending hashtags to boost your video visibility",
    gradient: "from-red-500 to-red-600",
    path: "/hashtag-generator",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        />
      </svg>
    ),
    stats: "Trending Tags",
  },
  {
    id: 6,
    title: "SEO Optimizer",
    description: "Enhance your video SEO with AI-powered recommendations",
    gradient: "from-red-500 to-red-600",
    path: "/seo-optimizer",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    stats: "Higher Rankings",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-red-50/30 to-neutral-100 dark:from-neutral-950 dark:via-red-950/20 dark:to-neutral-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent dark:from-red-900/10 pointer-events-none" />

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-4 py-2 text-sm font-medium text-red-700 dark:text-red-300">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                AI-Powered Platform
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
                  YouTube Analytics
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>

              <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Next-generation tools that transform your YouTube strategy with
                AI precision and professional insights
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
                <button className="px-8 py-4 bg-white/70 hover:bg-white/90 dark:bg-neutral-800/70 dark:hover:bg-neutral-800/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Active Creators", value: "50K+", change: "+12%" },
                { label: "Videos Analyzed", value: "2M+", change: "+8%" },
                { label: "Success Rate", value: "97%", change: "+3%" },
                { label: "Avg. Growth", value: "156%", change: "+25%" },
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 rounded-3xl p-6 text-center hover:border-red-500/30 transition-all duration-300">
                    <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-red-600 dark:text-red-400 font-medium">
                      {stat.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Professional AI Tools
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                Comprehensive suite of AI-powered tools designed for serious
                YouTube creators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Features.map((feature, index) => (
                <Link href={feature.path} key={feature.id}>
                  <div className="group relative h-full">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-700/50 rounded-3xl p-8 h-full flex flex-col group-hover:border-red-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`relative w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          {feature.icon}
                          <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50/70 dark:bg-red-900/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-200/50 dark:border-red-800/50">
                          {feature.stats}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Action */}
                      <div className="flex items-center justify-between pt-6 mt-6 border-t border-neutral-200/50 dark:border-neutral-700/50">
                        <span className="text-sm font-medium text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">
                          Get Started
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                          <svg
                            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl blur opacity-20" />
              <div className="relative bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Channel?
                </h3>
                <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                  Join the next generation of YouTube creators using AI to scale
                  their success
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-red-600 rounded-2xl font-semibold hover:bg-neutral-50 transition-colors shadow-lg">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 transition-colors">
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
