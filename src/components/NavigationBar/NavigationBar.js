import React, { useState } from 'react';
import './NavigationBar.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { HashLink } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';

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
          <li><HashRouter><HashLink to="#home">HOME</HashLink></HashRouter></li>
          <li><HashRouter><HashLink to="#aboutMe">ABOUT ME</HashLink></HashRouter></li>
          <li><HashRouter><HashLink to="#projects">PROJECTS</HashLink></HashRouter></li>
          <li><HashRouter><HashLink to="#contactMe">CONTACT ME</HashLink></HashRouter></li>
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
              <HashRouter><HashLink className="navigationBar__link" to="#home">HOME</HashLink></HashRouter>
            </MenuItem>
            <MenuItem onClick={ onHandleClose }>
              <HashRouter><HashLink className="navigationBar__link" to="#aboutMe">ABOUT ME</HashLink></HashRouter>
            </MenuItem>
            <MenuItem onClick={ onHandleClose }>
              <HashRouter><HashLink className="navigationBar__link" to="#projects">PROJECTS</HashLink></HashRouter>
            </MenuItem>
            <MenuItem onClick={ onHandleClose }>
              <HashRouter><HashLink className="navigationBar__link" to="#contactMe">CONTACT ME</HashLink></HashRouter>
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </header>  
  )
}

export default NavigationBar;
