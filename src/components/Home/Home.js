import React, { useState } from 'react';
import './Home.css';
import profile from '../../images/profile_picture.jpg';
import resume from '../../images/resume-rodrigo-martins.png';
import DescriptionIcon from '@material-ui/icons/Description';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #c3073f',
    boxShadow: theme.shadows[5],
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onHandleOpen = () => {
    setOpen(true);
  };

  const onHandleClose = () => {
    setOpen(false);
  };

  return (
    <div id="home" className="home">
      <div className="home__container">
        <img src={ profile } alt="profile-pic"/>
        <h1>Hello!</h1>
        <h2>My name is Rodrigo Martins</h2>
        <h2>I'm a Full-Stack / Software Developer</h2>
        <IconButton 
          edge="end" 
          size="small" 
          color="inherit" 
          aria-label="menu"
          onClick={ onHandleOpen }
        >
          <DescriptionIcon fontSize="small"/>
          <p className="home__resumeLabel">Open my Resume</p>
        </IconButton>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={ classes.modal }
          open={ open }
          onClose={ onHandleClose }
          closeAfterTransition
          BackdropComponent={ Backdrop }
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={ open}>
            <div className={ classes.paper }>
              <img className="home__resume" src={ resume } alt="resume" />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  )
}

export default Home;
