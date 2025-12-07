"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
export function Profile() {
    const parms = useSearchParams()

    const name = parms.get("name")
    const email = parms.get("email")
    const password = parms.get("password")
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white p-6 pt-24">
      <div className="space-y-12 mx-auto max-w-3xl">

        {/* PROFILE SECTION */}
        <section className="p-6 rounded-2xl shadow-xl border border-white/20 bg-white/5 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-wide">Your Profile</h2>
          <p className="text-gray-300 text-sm mt-2">
            This information will be visible publicly. Please update carefully.
          </p>

          <dl className="mt-8 space-y-8">

            {/* Full Name */}
            <div className="flex justify-between items-center">
              <dt className="font-medium text-gray-300">Full Name</dt>
              <dd className="flex items-center gap-4">
                <span className="text-white">{name}k</span>
                <button
                  type="button"
                  className="text-yellow-400 hover:text-yellow-300 transition cursor-pointer"
                >
                  Update
                </button>
              </dd>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center">
              <dt className="font-medium text-gray-300">Email Address</dt>
              <dd className="flex items-center gap-4">
                <span className="text-white">{email}</span>
                <button
                  type="button"
                  className="text-yellow-400 hover:text-yellow-300 transition cursor-pointer"
                >
                  Update
                </button>
              </dd>
            </div>

          </dl>
        </section>

        {/* LANGUAGE & PREFERENCES */}
        <section className="p-6 rounded-2xl shadow-xl border border-white/20 bg-white/5 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-wide">Language & Preferences</h2>
          <p className="text-gray-300 text-sm mt-2">
            Set your preferred language, date format and timezone.
          </p>

          <dl className="mt-8 space-y-8">

            {/* Language */}
            <div className="flex justify-between items-center">
              <dt className="font-medium text-gray-300">Language</dt>
              <dd className="flex items-center gap-4">
                <span className="text-white">English</span>
                <button
                  type="button"
                  className="text-yellow-400 hover:text-yellow-300 transition cursor-pointer"
                >
                  Update
                </button>
              </dd>
            </div>

            {/* Date Format */}
            <div className="flex justify-between items-center">
              <dt className="font-medium text-gray-300">Date Format</dt>
              <dd className="flex items-center gap-4">
                <span className="text-white">DD-MM-YYYY</span>
                <button
                  type="button"
                  className="text-yellow-400 hover:text-yellow-300 transition cursor-pointer"
                >
                  Update
                </button>
              </dd>
            </div>

            {/* Timezone */}
            <div className="flex justify-between items-center">
              <dt className="font-medium text-gray-300">Automatic Timezone</dt>
              <dd>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-yellow-400 cursor-pointer"
                />
              </dd>
            </div>

          </dl>
        </section>

      </div>

    
    </main>
  );
}
