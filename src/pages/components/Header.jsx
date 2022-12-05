import { memo } from "react";
import Link from "next/link";

import styles from '../../../styles/components/Header.module.scss'

export const Header = memo(function headerComponents() {
    return(
        <header className={styles.header}>
            <div className={styles.header__wrap}>
                <Link href='/' className={styles.backHome}>
                    <h1>Haruka-blog</h1>
                </Link>
            </div>

        </header>
    )
});