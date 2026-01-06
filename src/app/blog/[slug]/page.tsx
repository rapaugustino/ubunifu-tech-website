import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import styles from './BlogSlug.module.css';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <article className={`container ${styles.articleContainer}`}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>{post.date}</span>
            <span>•</span>
            <span>{post.tags.join(', ')}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.author}>By {post.author}</div>
        </div>

        <div className={styles.content}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <Link href="/blog" className={styles.backLink}>
          &larr; Back to all articles
        </Link>
      </article>
      <Footer />
    </main>
  );
}
