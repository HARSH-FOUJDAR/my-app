"use client";

import React, { useEffect, useState } from "react";

export function Profile() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("userData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

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
                <span className="text-white">{data?.name}</span>
                <button type="button" className="text-yellow-400 hover:text-yellow-300 transition cursor-pointer">
                  Update
                </button>
              </dd>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center">
              <dt className="font-medium text-gray-300">Email Address</dt>
              <dd className="flex items-center gap-4">
                <span className="text-white">{data?.email}</span>
                <button type="button" className="text-yellow-400 hover:text-yellow-300 transition cursor-pointer">
                  Update
                </button>
              </dd>
            </div>

            {/* Password (Optional) */}
            <div className="flex justify-between items-center">
              <dt className="font-medium text-gray-300">Password</dt>
              <dd className="flex items-center gap-4">
                <span className="text-white">{data?.password ? "********" : ""}</span>
                <button type="button" className="text-yellow-400 hover:text-yellow-300 transition cursor-pointer">
                  Update
                </button>
              </dd>
            </div>

          </dl>
        </section>

      </div>
    </main>
  );
}
