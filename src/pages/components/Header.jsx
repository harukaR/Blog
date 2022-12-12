import { memo } from "react";
import { client } from '../../lib/client'
import { useState } from "react";
import { motion, Variants } from "framer-motion";

import Link from "next/link";
import styles from '../../../styles/components/Header.module.scss'




export const Header = memo(function HeaderComponents({category}) {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };
  const [isOpen, setIsOpen] = useState(false);

    return(
        <header className={styles.header}>
            <div className={styles.header__wrap}>
              <div>
                <Link href='/' className={styles.backHome}>
                    <h1>Haruka-blog</h1>
                </Link>
              </div>
              <div>
              <motion.nav
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  className={styles.drawerMenu}
                >
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles.drawerMenuButton}
                  >
                  <motion.div>
                    <motion.p className={styles.menu}>Menu</motion.p>
                    <motion.div
                      variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0.55 }}
                    >
                      {/* <motion.p className={styles.circleButton}>
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                      </svg>
                      </motion.p> */}
                    </motion.div>
                  </motion.div>
     
                  </motion.button>
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(-1% -1% -1% -1% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05
                        }
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3
                        }
                      }
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    className={styles.drawerMenuList}
                  >
                    <motion.li variants={itemVariants}>
                      <motion.ul>
                        <motion.li>
                          Categories
                          <motion.p>
                            aaaa
                          </motion.p>
                          <motion.p>
                            aaaa
                          </motion.p>
                          <motion.p>
                            aaaa
                          </motion.p>
                          <motion.p>
                            aaaa
                          </motion.p>
                        </motion.li>
                      </motion.ul>
                    </motion.li>

                    <motion.li variants={itemVariants}>
                      <motion.ul>
                        <motion.li>
                          tags
                          <motion.p>
                            bbbb
                          </motion.p>
                          <motion.p>
                            bbbb
                          </motion.p>
                          <motion.p>
                            bbbb
                          </motion.p>
                          <motion.p>
                            bbb
                          </motion.p>
                        </motion.li>
                      </motion.ul>
                    </motion.li>


                    <motion.li variants={itemVariants}>
                      <motion.ul>
                        <motion.li>
                          about me
                        </motion.li>
                      </motion.ul>
                    </motion.li>
                  </motion.ul>
                </motion.nav>
              </div>

            </div>
        </header>
    )
});

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

