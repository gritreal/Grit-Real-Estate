import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-brand-bg dark:bg-brand-primary pb-24">
      {/* Blog Hero Header */}
      <div className="relative w-full h-[55vh] min-h-[350px] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-6 pb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-semibold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#C9A227] text-black text-xs font-bold rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight max-w-3xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-bold block">{post.author.name}</span>
                  <span className="text-white/70 text-xs block">{post.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-white/80 sm:border-l sm:border-white/20 sm:pl-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C9A227]" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C9A227]" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reading pane */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="bg-white dark:bg-brand-primary/30 rounded-3xl p-8 sm:p-12 shadow-xl border border-brand-bg dark:border-brand-secondary/10">
          <div className="prose dark:prose-invert max-w-none space-y-6">
            {post.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-brand-text/80 dark:text-brand-white/80 leading-relaxed text-lg"
                    >
                      {block.text}
                    </p>
                  );
                case "heading":
                  if (block.level === 3) {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-bold font-serif text-brand-primary dark:text-white mt-8 mb-4"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  return (
                    <h2
                      key={index}
                      className="text-2xl sm:text-3xl font-bold font-serif text-brand-primary dark:text-white mt-10 mb-4"
                    >
                      {block.text}
                    </h2>
                  );
                case "list":
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-6 space-y-3 text-brand-text/80 dark:text-brand-white/80 text-lg my-6"
                    >
                      {block.items?.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Author footer box */}
          <div className="mt-16 pt-8 border-t border-brand-bg dark:border-brand-secondary/15">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-brand-bg dark:bg-brand-primary/50 p-6 sm:p-8 rounded-2xl border border-brand-bg dark:border-brand-secondary/10">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-brand-secondary/20">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left flex-grow">
                <span className="text-brand-text/50 dark:text-white/50 text-xs font-bold uppercase tracking-wider block mb-1">
                  Written By
                </span>
                <h3 className="text-xl font-serif font-bold text-brand-primary dark:text-white mb-2">
                  {post.author.name}
                </h3>
                <p className="text-brand-text/70 dark:text-white/70 text-sm mb-4 leading-relaxed">
                  {post.author.name} is a dedicated professional with Grit Real Estate, specializing in the local Kansas and Missouri market.
                </p>
                <Link
                  href={`/agents/${post.author.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C9A227] hover:text-[#e0b730] transition-colors"
                >
                  <BookOpen className="w-4 h-4" /> View Agent Profile & Listings
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Read More / Next articles navigation */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary dark:bg-brand-secondary text-white dark:text-black font-bold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-md"
          >
            Browse Other Articles
          </Link>
        </div>
      </div>
    </article>
  );
}
