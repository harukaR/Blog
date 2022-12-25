import styles from 'components/tableOfContents/tableOfContents.module.scss'


export const TableOfContents = ({ toc }) => {
  return (
    <div className={styles.tocWrap}>
      <p className={styles.TableOfContentsHead}>目次</p>
      
      <ul className={styles.toc}>
        {toc.map(data => (
          <li key={data.id} className={styles.tocItem}>
            <a href={`#${data.text}`}>
              {data.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

