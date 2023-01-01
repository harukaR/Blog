import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

import styles from 'components/listMenu/ListMenu.module.scss'

export const ListMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pages = [{link:'/',value:'React'},{link:'/',value:'Next.js'},{link:'/',value:'Web'}]
  console.log(pages[0].value)

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={styles.buttonName}
      >
        tags
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <Link href="/" onClick={handleClose}>React</Link>
        <MenuItem onClick={handleClose}>React</MenuItem>
        <MenuItem onClick={handleClose}>Typescript</MenuItem>
        <MenuItem onClick={handleClose}></MenuItem> */}
        <Link href="/" onClick={handleClose}>React</Link>
        {pages.map((item)=>{
          return(
            <Link key={item.id} href='/' className={styles.tagItem}>{item.value}</Link>
          )
        })}
      </Menu>
    </div>
  );
}
