import { memo } from "react";
import { DrawerMenu } from "./DrawerMenu";


import Link from "next/link";
import styles from '../../../styles/components/Header.module.scss'

const categories = [
  {name:'development'},
  {name:'seo'},
]
export const Header = memo(function HeaderComponents() {

    return(
        <header className={styles.header}>
        <div className={styles.header__wrap}>
          <div>
            <Link href='/' className={styles.backHome}>
                <h1>Haruka-blog</h1>
            </Link>
          </div>
        </div>

          <ul>
            {categories.map((category)=>{
                <li>{category.name}</li>
            })}
            </ul>
        </header>
    )
});

