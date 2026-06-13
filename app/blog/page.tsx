import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

const getPosts = () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="mb-8">
            <Link href="/" className="text-sm font-semibold text-[#C38D43] uppercase tracking-widest hover:underline">
              &larr; Retour à l'accueil
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Notre Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Retrouvez nos derniers conseils et astuces en matière d'informatique et de réseaux.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={index} 
              className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white">
                <span className="text-sm font-semibold text-[#C38D43] uppercase tracking-widest">
                  {post.frontmatter.tag}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 leading-tight">
                  {post.frontmatter.title}
                </h2>
                <p className="mt-3 text-gray-600">
                  {post.frontmatter.excerpt}
                </p>
                <div className="mt-4 text-sm font-medium text-gray-800 group-hover:text-[#C38D43] transition-colors duration-300">
                  Lire l'article &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}