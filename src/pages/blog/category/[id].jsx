// pages/category/[id].js
import Link from "next/link";
// import styles from '../../../styles/Home.module.scss'
import styles from '/styles/Home.module.scss'

import { client } from 'lib/client'
import { Header } from "components/header/Header";


export default function CategoryId({blog}) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <>
        <Header/>
        <main className={styles.main}>
        <p>{blog[0].category.name}</p>
        <article className={styles.article__list}>
         {blog.map((blog) => (
              <Link href={`/blog/${blog.id}`} className={styles.articleItem} key={blog.id}>
                  <div className={styles.gazou_content}>
                    <p className={styles.gazou}></p>
                  </div>
                  <p className={styles.articleTitle}>{blog.title}</p>
                  <p className={styles.desc}>{blog.description}</p>
              </Link>
                
            ))}
        </article>
      </main>
    </>
  );
}


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/blog/category/${content.id}`);
  return { paths, fallback: false };

  
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", queries: { filters: `category[equals]${id}` } });
  return {
    props: {
      blog: data.contents,
    },
  };
};