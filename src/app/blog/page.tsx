"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Get all unique tags
  const tags = useMemo(() => {
    const allTags = blogPosts.flatMap((post) => post.tags);
    return ["All", ...Array.from(new Set(allTags))];
  }, []);

  // Filter posts based on search and tag selection
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  // Separate featured post (the latest one) from the rest
  const featuredPost = useMemo(() => {
    return blogPosts[0];
  }, []);

  const regularPosts = useMemo(() => {
    return filteredPosts.filter((post) => post.slug !== featuredPost.slug);
  }, [filteredPosts, featuredPost]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg dark:bg-brand-primary">
      {/* Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
            alt="Grit Real Estate Blog Banner"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-transparent to-brand-primary" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#C9A227]/20 text-[#C9A227] rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-[#C9A227]/30">
              Grit Insights
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Our <span className="text-[#C9A227]">Blog</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Expert advice, neighborhood guides, and market analysis for Kansas and Missouri real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        
        {/* Search and Filters Bar */}
        <div className="bg-white dark:bg-brand-primary/95 p-6 rounded-3xl shadow-xl mb-12 border border-brand-bg dark:border-brand-secondary/20 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-brand-text/40 dark:text-white/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-brand-bg/50 dark:bg-brand-primary/40 text-brand-text dark:text-white placeholder-brand-text/40 dark:placeholder-white/40 rounded-2xl border border-brand-bg dark:border-brand-secondary/15 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedTag === tag
                    ? "bg-[#C9A227] text-black shadow-md scale-105"
                    : "bg-brand-bg hover:bg-brand-bg/85 text-brand-text/70 dark:bg-brand-secondary/10 dark:text-white/80 dark:hover:bg-brand-secondary/25"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post (Only show if search/tag selection fits it, and we are on "All" tag with no active text search for clean hierarchy, or if it fits search queries) */}
        {filteredPosts.some((post) => post.slug === featuredPost.slug) && searchQuery === "" && selectedTag === "All" && (
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-brand-primary dark:text-white mb-6">Featured Article</h2>
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-brand-primary/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-brand-bg dark:border-brand-secondary/15">
                <div className="relative h-64 sm:h-96 lg:h-full lg:col-span-7 overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-brand-bg dark:bg-[#C9A227]/20 text-[11px] font-bold text-brand-primary dark:text-[#C9A227] rounded-full uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-brand-primary dark:text-white mb-4 leading-tight group-hover:text-[#C9A227] transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-brand-text/70 dark:text-white/70 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brand-bg dark:border-brand-secondary/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={featuredPost.author.image}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-primary dark:text-white text-sm">{featuredPost.author.name}</h4>
                        <p className="text-brand-text/50 dark:text-white/50 text-xs">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-brand-text/60 dark:text-white/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-brand-primary dark:text-white mb-6">
            {searchQuery || selectedTag !== "All" ? `Search Results (${filteredPosts.length})` : "Recent Publications"}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-brand-primary/20 rounded-3xl border border-brand-bg dark:border-brand-secondary/10">
              <p className="text-xl text-brand-text/60 dark:text-white/60">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                }}
                className="mt-4 px-6 py-2.5 bg-brand-primary dark:bg-brand-secondary text-white dark:text-black rounded-full text-sm font-semibold hover:opacity-90 transition-all cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* If filters are active, show all matching; otherwise show regular (non-featured) posts */}
              {(searchQuery !== "" || selectedTag !== "All" ? filteredPosts : regularPosts).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-white dark:bg-brand-primary/45 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-bg dark:border-brand-secondary/15 group"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-white/95 text-[10px] font-bold text-brand-primary rounded-full uppercase tracking-wider shadow">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-brand-text/50 dark:text-white/50 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-brand-primary dark:text-white mb-3 group-hover:text-[#C9A227] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-brand-text/70 dark:text-white/70 text-sm mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-brand-bg dark:border-brand-secondary/10 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={post.author.image}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs font-bold text-brand-primary dark:text-white">{post.author.name}</span>
                        </div>

                        <span className="text-xs font-bold text-[#C9A227] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Read Post <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </section>

      {/* Call to action */}
      <section className="py-20 bg-brand-primary text-white relative overflow-hidden mt-12">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-brand-secondary rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-primary/80 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Thinking About Buying or Selling?
          </h2>
          <p className="text-lg text-brand-bg mb-8">
            Get in touch with one of our experienced agents today for a free market analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-brand-primary rounded-full font-bold hover:bg-brand-bg hover:scale-105 transition-all shadow-xl text-center"
            >
              Contact an Agent
            </Link>
            <Link
              href="/home-value"
              className="px-8 py-3.5 bg-[#C9A227] text-black rounded-full font-bold hover:opacity-90 hover:scale-105 transition-all shadow-xl text-center"
            >
              Get Home Value
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
