// pages/blog/[id].js
import styles from '../../../styles/components/Blog.module.scss'
import Link from "next/link";

//別ファイルに格納する
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { client } from "../../lib/client";
import { TableOfContents } from "../components/TalbleOfContent";
import { Header } from "../components/Header";
import { renderToc } from "../../lib/render-toc";

dayjs.extend(utc);
dayjs.extend(timezone);



export default function BlogId({ blog }) {
  const toc = renderToc(blog.content);
  return (
    <>
      <div className={styles.container}>
        <Header/>
        <div className={styles.contentWrap}>
          <main className={styles.articleInner}>
            <h1 className={styles.articleTitle}>{blog.title}</h1>
            <div className={styles.articleContent}
              dangerouslySetInnerHTML={{
                __html: `${blog.content}`,
              }}
            />
          </main>
           <aside className={styles.asideWrap}>
            <ul className={styles.overview}>
              <li>
                <p className={styles.icon}><span class="material-icons">create</span>公開日:{formatDate(blog.publishedAt)}</p>
              </li>
              <li>
              <p className={styles.icon}><span class="material-icons">edit_note</span>更新日:{formatDate(blog.updatedAt)}</p>
              </li>
            </ul>
            <TableOfContents toc={toc} />
            <div>
          
            </div>
          </aside> 
        </div>
      </div>

    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

//日付のフォーマットを調整
export const formatDate = (date) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY年MM月D日");
  return formattedDate;
};
