import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProfileBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sankalpa Sapkota</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto p-6 text-center" id="about">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        />
        <h2 className="text-3xl font-semibold">Cybersecurity & IT Professional</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Cybersecurity and IT professional with a strong foundation in security operations, network management, software testing, and IT support. Passionate to apply technical expertise, analytical problem-solving skills, and leadership experience to enhance operational efficiency, strengthen security measures, and contribute to organizational success.
        </p>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Education</h3>
        <ul className="space-y-4 text-left">
          <li><strong>Postgraduate in Cybersecurity and Threat Management</strong>, Seneca Polytechnic, Toronto, ON (Jan 2024 - Oct 2024)</li>
          <li><strong>Postgraduate in Software and Information System Testing</strong>, Fanshawe College, London, ON (Jan 2023 - Oct 2023)</li>
          <li><strong>Bachelor in Computer Science and Information Technology</strong>, Mount Annapurna Campus, Nepal (May 2016 - Aug 2019)</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Skills & Abilities</h3>
        <p className="text-gray-700">Leadership & Team Management, Communication, Customer Support, Technical Proficiency, Project Collaboration</p>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Experience</h3>
        <Card>
          <CardContent>
            <h4 className="font-semibold">IT Support Engineer | PTC Nepal Pvt. Ltd | Apr 2020 – Aug 2022</h4>
            <p className="text-gray-700 mt-2">Provided technical support to 100+ users, managed Active Directory & AWS IAM accounts, delivered remote desktop support, maintained IT assets, and promoted cybersecurity awareness.</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>ISC2: Certified in Cybersecurity (CC)</li>
          <li>AWS Educate: Getting Started with Security</li>
          <li>MTA: Networking Fundamentals (2018)</li>
          <li>Google IT Support Professional Certificate</li>
        </ul>
      </section>

      <section id="blog" className="max-w-5xl mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Latest Blog Posts</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition">
                <CardContent>
                  <img src={post.image} alt={post.title} className="rounded-lg mb-3" />
                  <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                  <p className="text-gray-700 mb-3">{post.excerpt}</p>
                  <Button asChild>
                    <a href={`/blog/${post.slug}`}>Read More</a>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>Loading blog posts...</p>
          )}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto p-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-4">Email: sankalpasapkota41@gmail.com | Phone: 437-599-2054</p>
        <Button asChild>
          <a href="mailto:sankalpasapkota41@gmail.com">Contact Me</a>
        </Button>
      </section>

      <footer className="p-6 mt-10 bg-white border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sankalpa Sapkota. All rights reserved.
      </footer>
    </div>
  );
}
