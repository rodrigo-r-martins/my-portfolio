import React, { useState } from 'react';
import './NavigationBar.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const NavigationBar = () => {
  const [link, setLink] = useState(null);

  const onHandleClick = (e) => {
    setLink(e.currentTarget);
  };

  const onHandleClose = () => {
    setLink(null);
  };

  return (
    <header className="navigationBar">
      <nav className="navigationBar__nav">
        <ul>
          <li><a href="/#">HOME</a></li>
          <li><a href="/#aboutMe">ABOUT ME</a></li>
          <li><a href="/#projects">PROJECTS</a></li>
          <li><a href="/#contactMe">CONTACT ME</a></li>
        </ul>
        <div className="navigationBar__hamburguer">
          <IconButton 
            edge="start" 
            size="medium" 
            color="inherit" 
            aria-label="menu"
            onClick={onHandleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={ link }
            keepMounted
            open={ Boolean(link) }
            onClose={ onHandleClose }
          >
            <MenuItem onClick={ onHandleClose }>
              <a className="navigationBar__link" href="/#">HOME</a>
            </MenuItem>
            <MenuItem onClick={ onHandleClose }>
              <a className="navigationBar__link" href="/#aboutMe">ABOUT ME</a>
            </MenuItem>
            <MenuItem onClick={ onHandleClose }>
              <a className="navigationBar__link" href="/#projects">PROJECTS</a>
            </MenuItem>
            <MenuItem onClick={ onHandleClose }>
              <a className="navigationBar__link" href="/#contactMe">CONTACT ME</a>
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </header>  
  )
}

export default NavigationBar;
