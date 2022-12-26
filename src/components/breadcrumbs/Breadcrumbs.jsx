import Link from "next/link";

import Styles from 'components/Breadcrumbs/Breadcrumbs.module.scss'

export const Breadcrumbs = (props)=>{
    const {category,title,hrefPath} = props;
    return(
        <ul className={Styles.breadcrumbsList}>
            <li className={Styles.breadcrumbsListItem}>
                <Link href='/blog' className={Styles.breadcrumbsListLink}>Blog</Link>
            </li>
            <li className={Styles.breadcrumbsListItem}><span class="material-icons">navigate_next</span></li>
            <li className={Styles.breadcrumbsListItem}>
                <Link href={hrefPath} className={Styles.breadcrumbsListLink}>{category}</Link>
            </li>
            <li className={Styles.breadcrumbsListItem}><span class="material-icons">navigate_next</span></li>
            <li className={Styles.breadcrumbsListItem}>{title}</li>
        </ul>
    )

}