import { memo } from "react";
import { useState } from "react";
import { motion, useCycle ,Variants,AnimatePresence } from "framer-motion";

import Link from "next/link";
import styles from '../../../styles/components/Header.module.scss'



const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 }
];
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};



export const Header = memo(function HeaderComponents() {
  const [open, cycleOpen] = useCycle(false, true);

    return(
        <header className={styles.header}>
            {/* <div className={styles.drawer}> */}
            <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          >
            <motion.div
              className={styles.container}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
      </div>
        
        <div className={styles.header__wrap}>
          <div>
            <Link href='/' className={styles.backHome}>
                <h1>Haruka-blog</h1>
            </Link>
          </div>
        </div>
        </header>
    )
});

