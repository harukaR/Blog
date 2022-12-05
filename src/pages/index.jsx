import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

import { Header } from './components/Header'
import { client } from '../lib/client'

export default function Home({blog}) {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
      <article className={styles.article__list}>
        {blog.map((blog) => (
          <Link href={`/blog/${blog.id}`} className={styles.articleItem} key={blog.id}>
            {/* <Image src={blog.eyecatch.url} width={100} height={100} alt="ブログのアイキャッチ画像です"></Image> */}
            <div className={styles.gazou_content}>
              <p className={styles.gazou}></p>
            </div>
            <p className={styles.articleTitle}>{blog.title}</p>
            <p className={styles.desc}>{blog.description}</p>
          </Link>
        ))}
      </article>
      
      </main>


    </div>
    
  )
  
}

//SSGで取得
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blog: data.contents,

    },
  };
};

//日付のフォーマットを調整
export const formatDate = (date) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");
  return formattedDate;
};