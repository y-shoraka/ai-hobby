"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full bg-[#e8faf0] px-4 py-1 text-sm font-medium text-[#16a34a]">
              AI Powered Influencer Marketing Platform
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a0f4d] leading-tight">
            Discover, evaluate, and monitor creators for your campaigns
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Enhance discovery, streamline tracking, and share detailed
            influencer marketing reports effortlessly
          </p>

          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="bg-[#5800FF] text-white hover:bg-[#5800FF]/90 h-12 px-8"
            >
              <Link href="/find-creators">Find Creators For Free</Link>
            </Button>
            <p className="text-sm text-gray-500">No credit card required</p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="relative h-24 w-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-[#5800FF]"
                    strokeWidth="10"
                    strokeDasharray={(24.3 * 283) / 100 + " 283"}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">24.3%</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Purchase Intent</h3>
                <p className="text-sm text-gray-500">79.1k comments analysed</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Audience brand affinity</h4>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Nike</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Nivea</span>
                    <span>29%</span>
                  </div>
                  <Progress value={29} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Apple</span>
                    <span>12%</span>
                  </div>
                  <Progress value={12} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>H&M</span>
                    <span>5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
