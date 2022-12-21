import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../../styles/Home.module.scss'
import styles from '../../../styles/components/blog.module.scss'

import { Header } from '../components/Header'
import { client } from '../../lib/client'

export default function Blog({blog,category}){
    return(
        <>
            <div className={styles.blogWrap}>
              <Header/>
              <main className={styles.main}>
                <ul className={styles.categoryList}>
                    {category.map((category) => (
                      <li key={category.id}>
                        <Link href={`/category/${category.id}`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                 </ul>
                  <article className={styles.articleList}>
                    {blog.map((blog) => (
                      <Link href={`/blog/${blog.id}`} className={styles.articleItem} key={blog.id}>
                        <p className={styles.artilceCategory}>{blog.category && `${blog.category.name}`}</p>
                        {/* <Image src={blog.eyecatch.url} width={100} height={100} alt="ブログのアイキャッチ画像です"></Image> */}
                        <div className={styles.articleImage}>
                          <p className={styles.articletImage_icon}></p>
                        </div>
                        <p className={styles.articleTitle}>{blog.title}</p>
                        <p className={styles.desc}>{blog.description}</p>
                      </Link>
                    ))}
                  </article>
              </main>
            </div>
        </>
    )
}

//SSGで取得
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blogs" });
    const category = await client.get({ endpoint: "categories" });
  
    return {
      props: {
        blog: data.contents,
        category:category.contents,
      },
    };
  };
  
  //日付のフォーマットを調整
  export const formatDate = (date) => {
    const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");
    return formattedDate;
  };