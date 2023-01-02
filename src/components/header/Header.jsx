import { memo, useContext } from "react";
import { DrawerMenu } from "../DrawerMenu";


import Link from "next/link";
import styles from 'components/Header/header.module.scss'
import CategoryContext from 'pages/blog/index'
import { ListMenu } from "components/listMenu/ListMenu";



export const Header = memo(function HeaderComponents() {

    return(
        <header className={styles.header}>
        <div className={styles.headerWrap}>
          <div>
            <Link href='/' className={styles.backHome}>
                <h1>Haruka-blog</h1>
            </Link>
          </div>
          <ListMenu className={styles.categoryMenu}/>
        </div>
        </header>
    )
});

