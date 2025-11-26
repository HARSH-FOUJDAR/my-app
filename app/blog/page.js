"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Search, Tag } from "lucide-react";
import { button } from "framer-motion/client";


export default function Blog() {
    const [search, setSearch] = useState("");
    const [activeTag, setActiveTag] = useState("All");

    const posts = [
        {
            id: 1,
            slug: "full-stack-blog-guide",
            title: "How I Built a Full-Stack Blog — Step by Step",
            excerpt:
                "A concise walkthrough of building a modern full-stack blog with React, Tailwind and a Node API.",
            tags: ["Full-Stack", "React", "Node.js"],
        },
        {
            id: 2,
            slug: "frontend-to-ai-integration",
            title: "From Frontend to AI: Combining UI with ML Models",
            excerpt:
                "Best practices for integrating lightweight AI features into your web apps — recommendations and tradeoffs.",
            tags: ["AI", "ML", "Integration"],
        },
        {
            id: 3,
            slug: "production-deployment-checklist",
            title: "Deployment Checklist for Production-Ready Apps",
            excerpt:
                "A short checklist covering CI/CD, observability, and secrets management for small teams.",
            tags: ["DevOps", "Deployment"],
        },
    ];

    const allTags = ["All", ...new Set(posts.flatMap((p) => p.tags))];

    const filteredPosts = posts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
        const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
        return matchesSearch && matchesTag;
    });

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black pt-6 pb-16 text-gray-900 dark:text-gray-100 mt-10">

            {/* SEARCH BAR */}
            <div className="sticky top-0 z-30 backdrop-blur-lg bg-white/40 dark:bg-black/30 border-b border-white/20 dark:border-gray-700 py-4">
                <div className="container mx-auto px-6 lg:px-12 flex items-center gap-3">

                    <div className="relative w-full">
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/70 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                </div>
            </div>

            <section className="container mx-auto px-6 lg:px-12">

                {/* HERO */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-10 mb-14 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Discover. Learn.{" "}
                        <span className="text-indigo-600">Build Better.</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        Short, practical guides for developers who love clean UI,
                        full-stack apps, and modern AI integrations.
                    </p>
                </motion.div>

                {/* TAG FILTERS */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {allTags.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveTag(t)}
                            className={`px-4 py-1.5 rounded-full border cursor-pointer text-sm flex items-center gap-2 transition
                ${activeTag === t
                                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg"
                                    : "bg-white/60 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700"
                                }
              `}
                        >
                            <Tag size={16} />
                            {t}
                        </button>
                    ))}
                </div>

                {/* POSTS */}
                <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filteredPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.12 }}
                            className="p-6 rounded-2xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold">{post.title}</h3>

                            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                                {post.excerpt}
                            </p>

                            <div className="mt-4 flex justify-between">
                                <div className="flex gap-2 flex-wrap">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1.5 cursor-pointer rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={`/blogpost/${post.slug}`}
                                    className="font-medium border border-gray-400 dark:border-gray-600  text-sm bg-blue-50 dark:bg-indigo-900/20 light:bg-black px-3 py-1.5 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-800 transition cursor-pointer text-blck" 
                                >
                                    Read →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ABOUT SECTION */}
                <div
                    id="about"
                    className="mt-16 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/40 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl"
                >
                    <h2 className="text-3xl font-bold mb-4">About This Blog</h2>

                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                        A clean, modern developer blog layout built with Tailwind CSS +
                        Framer Motion. Perfect for devs who want a fast, smooth, animated
                        experience with minimal code.
                    </p>
                </div>

            </section>
        </main>
    );
}
