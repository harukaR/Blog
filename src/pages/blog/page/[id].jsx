import Link from 'next/link';
import styles from '../../blog/blog.module.scss'

import { client } from 'lib/client'
import { Header } from 'components/header/Header';

import { Pagination } from 'components/pagination/Pagination'

const PER_PAGE = 6; 

export default function BlogPageId({ blog, totalCount, category }) {
  return (
    <>
    <div className={styles.blogWrap}>
        <Header/>
        <main className={styles.main}>
        { <ul className={styles.categoryList}>
            {category.map((category) => (
                <li key={category.id}>
                <Link href={`/category/${category.id}`}>
                    {category.name}
                </Link>
                </li>
            ))}
        </ul> }
            <article className={styles.articleList}>
            {blog.map((blog) => (
                <Link href={`/blog/${blog.id}`} className={styles.articleItem} key={blog.id}>
                <p className={styles.artilceCategory}>{blog.category && `${blog.category.name}`}</p>
                {/* <Image src={blog.eyecatch.url} width={100} height={100} alt="ブログのアイキャッチ画像です"></Image> */}
                <div className={styles.articleImage}>
                    <p className={styles.articletImagecon}></p>
                </div>
                <p className={styles.articleTitle}>{blog.title}</p>
                <p className={styles.desc}>{blog.description}</p>
                </Link>
            ))}
            </article>
            <Pagination totalCount={totalCount} />
        </main>
    </div>
    </>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blogs" });
  const pageNumbers = [];
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);
  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", queries: { offset: (id - 1) * 5, limit: 6 } });
  const category = await client.get({ endpoint: "categories" });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category:category.contents,
    },
  };
};