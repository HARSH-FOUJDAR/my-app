export default function Page({ params }) {
  // --- SAMPLE BLOG DATA (assume data comes from DB or API) ---
  const blog = {
    title: "How to Build a Full Stack Blog",
    author: "Jay Chaudhary",
    date: "25 Nov 2025",
    description: "A step-by-step guide to building a modern blog using Next.js.",
    content: `
      <h2 style="color:#6b21a8;">This is Dynamic HTML Content</h2>
      <p>Your full blog HTML will appear here.</p>
      <ul>
        <li>Full Stack Architecture</li>
        <li>API Routes</li>
        <li>Deployment Process</li>
      </ul>
      <p><b>Enjoy blogging!</b></p>
    `,
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-10">
      
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* AUTHOR + DATE */}
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-6">
        <span>👤 {blog.author}</span>
        <span>📅 {blog.date}</span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-7 italic">
        {blog.description}
      </p>

      {/* HTML CONTENT */}
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  );
}
