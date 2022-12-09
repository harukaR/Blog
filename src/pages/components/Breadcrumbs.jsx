import Link from "next/link";

import Styles from '../../../styles/components/Breadcrumbs.module.scss'

export const Breadcrumbs = (props)=>{
    console.log(props)
    const {category,title} = props;
    return(
        <ul className={Styles.breadcrumbsList}>
            <li className={Styles.breadcrumbsListItem}>
                <Link href='/' className={Styles.breadcrumbsListLink}>Home</Link>
            </li>
            <li className={Styles.breadcrumbsListItem}><span class="material-icons">navigate_next</span></li>
            <li className={Styles.breadcrumbsListItem}>
                <Link href='/' className={Styles.breadcrumbsListLink}>{category}</Link>
            </li>
            <li className={Styles.breadcrumbsListItem}><span class="material-icons">navigate_next</span></li>
            <li className={Styles.breadcrumbsListItem}>{title}</li>
        </ul>
    )

}