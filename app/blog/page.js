"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Search, Tag } from "lucide-react";
import { button, image, img } from "framer-motion/client";
import { Card, CardContent } from "@/components/ui/card";
import { TbArrowMoveRightFilled } from "react-icons/tb";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
    {
        img: "https://media.istockphoto.com/id/2114295998/photo/asian-and-indian-developer-devops-team-discussion-about-coding-promgram-with-software.jpg?s=2048x2048&w=is&k=20&c=815QNju4g70uc0fFTGiDFsEhhSej2qs99M3o0Hx8ChE=",
        desc: "A software developer typing code on a laptop, focused on a dark-themed IDE."
    },
    {
        img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3Hza57OTLRJzS2w69oT7VJ/97e92e9f54b741d95208463c97bd6fe9/GettyImages-2022975324.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
        desc: "Young developer brainstorming in front of a whiteboard with code diagrams and notes."
    },
    {
        img: "https://d1vwxdpzbgdqj.cloudfront.net/enterprise/career_path_landing_1/career_path.webp",
        desc: "Full-stack developer working with multiple screens showing code."
    },
    {
        img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_To_Become_a_Data_Analytics_Managerr.jpg",
        desc: "Female software engineer working on a laptop in a modern office space."
    }
];

const topics = [
    "Programming Fundamentals",
    "Understanding Variables",
    "Conditional Statements",
    "Looping & Iteration",
    "Data Types",
    "Functions",
    "Linked List",
    "Heaps",
    "Inheritance In Java",

    "Bubble Sort",
    "Quick Sort",
    "Insertion Sort",
    "Merge Sort",
    "Android Architecture",
    "Activities and Intents",
    "User Interface Design",
    "API Integration",
    "Data Storage Options",
    "MVC and MVVM Patterns",
    "Debugging and Testing",

];

const mainCourses = [
    {
        id: 1,
        title: "Programming Essentials",
        rating: "4.46",
        duration: "1 hour",
        learners: "2.3L+",
        level: "Beginner",
        image: "https://img.icons8.com/color/512/source-code.png",
    },
    {
        id: 2,
        title: "C for Beginners",
        rating: "4.49",
        duration: "2 hours",
        learners: "2.3L+",
        level: "Beginner",
        image: "https://img.icons8.com/color/512/c-programming.png",
    },
    {
        id: 3,
        title: "Data Structures in C",
        rating: "4.39",
        duration: "2 hours",
        learners: "2L+",
        level: "Beginner",
        image: "https://img.icons8.com/color/512/data-configuration.png",
    },
    {
        id: 4,
        title: "Visual Graphics in C",
        rating: "4.49",
        duration: "2 hours",
        learners: "18.2K+",
        level: "Intermediate",
        image: "https://img.icons8.com/color/512/computer.png",
    },
    {
        id: 5,
        title: "C++ Tutorial",
        rating: "4.42",
        duration: "2 hours",
        learners: "51.9K+",
        level: "Beginner",
        image: "https://img.icons8.com/color/512/c-plus-plus-logo.png",
    },

    {
        id: 7,
        title: "Java Programming",
        rating: "4.48",
        duration: "2 hours",
        learners: "7.2L+",
        level: "Beginner",
        image: "https://img.icons8.com/color/512/java-coffee-cup-logo.png",
    },

];


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
        <>
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
                <section className="flex flex-col md:flex-row justify-center items-start min-h-screen px-4 py-20 gap-10">

                    {/* Left: Heading + Paragraph + Button */}
                    <div className="flex-1 text-center md:text-left max-w-3xl mt-20 mr-20">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                            Software Developer
                        </h1>

                        <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm sm:text-base  mt-5">
                            The opportunities for Software developers are scaling with the growth in technology.
                            The software developer learning path is easy if you learn technical skills and have a passion for coding.
                            If you want to become a software developer, prepare yourself for this professional journey
                            and explore our free software developer courses curated just for you. Begin your journey today!
                        </p>

                        <div className="mt-8">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                                EXPLORE COURSES
                            </button>
                        </div>
                    </div>

                    {/* Right: Carousel */}
                    <div className="flex-1 w-full max-w-sm">
                        <Carousel opts={{ align: "start" }}>
                            <CarouselContent>
                                {images.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="py-10">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center">
                                                    <img
                                                        src={img.img}
                                                        alt="carousel-image"
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                </CardContent>
                                                <div className="text-center px-5 text-gray-800 dark:text-gray-300 text-sm font-medium mt-2">
                                                    {img.desc}
                                                </div>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </section>
                <section className="py-24 px-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* LEFT SIDE - Info + Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
                                <h1 className="text-5xl font-extrabold mb-6 text-indigo-900 dark:text-white">
                                    Kickstart Your Software Developer Journey
                                </h1>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                                    Explore a carefully curated path to master software development. Learn the latest technologies, enhance your coding skills, and prepare for your dream job.
                                </p>

                                <button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                                    Start for Free
                                </button>
                            </div>

                            {/* SKILLS */}
                            <div className="mt-12">
                                <h2 className="text-3xl font-bold mb-6 text-indigo-900 dark:text-white text-center lg:text-left">
                                    Skills You'll Gain
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-2">
                                    {topics.map((topic, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                                            className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-xl p-4 flex items-center gap-3 transition-all"
                                        >
                                            <TbArrowMoveRightFilled className="text-indigo-500 text-2xl" />
                                            <span className="font-medium text-gray-800 dark:text-gray-200">{topic}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE - Courses Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-indigo-900 dark:text-white mb-6 text-center lg:text-left">
                                Top Coding Courses
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {mainCourses.map((course, index) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                                    >
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                                        />
                                        <h3 className="text-xl font-semibold text-indigo-900 dark:text-white text-center mb-2">
                                            {course.title}
                                        </h3>
                                        <div className="flex justify-center items-center gap-2 mb-2">
                                            <span className="text-yellow-400 font-bold">{course.rating} ★</span>
                                            <span className="text-gray-500 dark:text-gray-300 text-sm">({course.level})</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{course.duration}</p>
                                        <div className="flex justify-center">
                                            <button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all">
                                                Enroll Now
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
            <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
                <div className="max-w-7xl mx-auto px-4">

                    {/* GRID FOR DESKTOP */}
                    <div className="hidden lg:grid grid-cols-5 gap-8">

                        {/* Column 1 */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Great Learning Academy</h3>
                            <ul className="space-y-2 text-sm">
                                {["Career Paths", "Resume Builder", "All Free Courses", "Live Sessions / Webinars", "Free Courses with Certificate", "About Great Learning"].map((item, i) => (
                                    <li key={i} className="hover:text-white transition-colors cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
                            <ul className="space-y-2 text-sm">
                                {["About Us", "Contact Us", "ISMS Policy", "Terms of Use", "Privacy Policy", "Great Learning Blog", "Grievance Redressal", "Enterprise Solutions", "Careers at Great Learning", "Pro Courses"].map((item, i) => (
                                    <li key={i} className="hover:text-white transition-colors cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Popular Courses</h3>
                            <ul className="space-y-2 text-sm">
                                {["Master Generative AI", "Master Python Programming", "Mastering Digital Marketing", "Master Data Analytics in SQL", "Master Artificial Intelligence", "Master Data Analytics in Excel", "Microsoft Excel Training Course", "Data Visualization with Power BI", "ChatGPT for Working Professionals"].map((item, i) => (
                                    <li key={i} className="hover:text-white transition-colors cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Explore Topics</h3>
                            <ul className="space-y-2 text-sm">
                                {["Design Courses", "Management Courses", "Data Science Courses", "Study Abroad Courses", "Cybersecurity Courses", "Cloud Computing Courses", "Digital Marketing Courses", "Artificial Intelligence Courses", "Top University Programs"].map((item, i) => (
                                    <li key={i} className="hover:text-white transition-colors cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 5 */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Connect & Trending</h3>
                            <div className="flex gap-4 mb-4 text-gray-300">
                                {[FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram].map((Icon, i) => (
                                    <Icon key={i} className="hover:text-white cursor-pointer transition-colors" />
                                ))}
                            </div>
                            <ul className="space-y-2 text-sm">
                                {["Online MBA Program", "Microsoft GenAI Course", "Artificial Intelligence Course", "Masters in Data Science Program", "Data Science Engineering (Bootcamp)", "Data Science and Business Analytics Course"].map((item, i) => (
                                    <li key={i} className="hover:text-white transition-colors cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* MOBILE COLLAPSIBLE VERSION */}
                    <div className="lg:hidden space-y-4">
                        {[
                            { title: "Great Learning Academy", items: ["Career Paths", "Resume Builder", "All Free Courses", "Live Sessions / Webinars", "Free Courses with Certificate", "About Great Learning"] },
                            { title: "About Us", items: ["About Us", "Contact Us", "ISMS Policy", "Terms of Use", "Privacy Policy", "Great Learning Blog", "Grievance Redressal", "Enterprise Solutions", "Careers at Great Learning", "Pro Courses"] },
                            { title: "Popular Courses", items: ["Master Generative AI", "Master Python Programming", "Mastering Digital Marketing", "Master Data Analytics in SQL", "Master Artificial Intelligence", "Master Data Analytics in Excel", "Microsoft Excel Training Course", "Data Visualization with Power BI", "ChatGPT for Working Professionals"] },
                            { title: "Explore Topics", items: ["Design Courses", "Management Courses", "Data Science Courses", "Study Abroad Courses", "Cybersecurity Courses", "Cloud Computing Courses", "Digital Marketing Courses", "Artificial Intelligence Courses", "Top University Programs"] },
                            { title: "Connect & Trending", items: ["Online MBA Program", "Microsoft GenAI Course", "Artificial Intelligence Course", "Masters in Data Science Program", "Data Science Engineering (Bootcamp)", "Data Science and Business Analytics Course"] },
                        ].map((section, i) => (
                            <details key={i} className="bg-gray-800 rounded-lg">
                                <summary className="px-4 py-2 cursor-pointer text-white font-semibold">{section.title}</summary>
                                <ul className="px-6 py-2 space-y-1 text-sm text-gray-300">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                                    ))}
                                </ul>
                            </details>
                        ))}

                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center mt-4 text-gray-300">
                            {[FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram].map((Icon, i) => (
                                <Icon key={i} className="hover:text-white cursor-pointer transition-colors" />
                            ))}
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                        © 2013 - 2025 Great Learning. All rights reserved.
                    </div>
                </div>
            </footer>

        </>

    );
}
