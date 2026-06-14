import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export function generateStaticParams() {
  const files = fs.readdirSync(path.join('posts'));
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

function getPost(slug: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    frontmatter,
    content,
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { frontmatter, content } = getPost(slug);

  const postDate = new Date(frontmatter.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-12">

          {/* Header de l'article */}
          <div className="text-center mb-12">
            <Link href="/blog" className="text-sm font-semibold text-[#C38D43] uppercase tracking-widest hover:underline">
              &larr; Retour au blog
            </Link>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              {frontmatter.title}
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Publié le {postDate} 
              <span className="mx-2">&bull;</span>
              <span className="inline-block bg-gray-100 text-[#C38D43] text-xs font-semibold px-2.5 py-1 rounded-full">
                {frontmatter.tag}
              </span>
            </p>
          </div>

          {/* Image de couverture */}
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Contenu de l'article  */}
          <div className="text-lg">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-16 mb-6 text-black" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-12 mb-4 text-black" {...props} />,
                h4: ({ node, ...props }) => <h4 className="text-xl font-bold mt-8 mb-4 text-black" {...props} />,
                p: ({ node, ...props }) => <p className="leading-relaxed text-black mb-6" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-3 mb-6 pl-4" {...props} />,
                li: ({ node, ...props }) => <li className="leading-relaxed text-black" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-semibold text-black" {...props} />,
                a: ({ node, ...props }) => <a className="text-[#C38D43] font-semibold hover:underline" {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

        </div>
      </div>
    </article>
  );
}