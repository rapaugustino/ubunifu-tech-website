import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import styles from './Blog.module.css';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main>
      <Navbar />
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h1 className={styles.heading}>
            Insights & <span className="text-gradient">Ideas</span>
          </h1>
          <p className={styles.subheading}>
            Thoughts on digital strategy, technology, and the future of Tanzania.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.meta}>
                <span className={styles.date}>{post.date}</span>
                <span>•</span>
                <span>{post.tags[0]}</span>
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.footer}>
                <span className={styles.author}>{post.author}</span>
                <span className={styles.readMore}>Read Article &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
