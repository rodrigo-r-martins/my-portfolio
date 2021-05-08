import React, { useState } from 'react';
import './ContactMe.css';
import resumeData from '../../utils/resumeData';
import database from '../../utils/firebaseConfig';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

let initialFormValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const ContactMe = () => {
  const [ form, setForm ] = useState(initialFormValues);
  const [ showAlert, setShowAlert] = useState(false);
  const [ alert, setAlert ] = useState({
    message: "",
    severity: ""
  });

  const onHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    database.ref('contact_me').push().set({
      ...form
    }).then(() => {
      setAlert({
        message: "Thank you for contacting me.",
        severity: "success"
      });
      setForm(initialFormValues);
      e.target.reset();
      setShowAlert(true);
    }).catch(err => {
      setAlert({
        message: "Something went wrong.",
        severity: "error"
      })
      setShowAlert(false);
      console.dir(err);
    })
  }

  return (
    <div id="contactMe" className="contactMe__container">
      <h1>Contact Me</h1>
      <form className="contactMe__form" onSubmit={ onSubmitForm }>
        <fieldset>
          <legend>Name</legend>
          <input 
            type="text" 
            name="name" 
            id="name"
            required
            onChange={ onHandleChange }
          ></input>
          <br />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input 
            type="email" 
            name="email" 
            id="email"
            required
            onChange={ onHandleChange }
          ></input>
          <br />
        </fieldset>
        <fieldset>
          <legend>Subject</legend>
          <input 
            type="text" 
            name="subject" 
            id="subject"
            required
            onChange={ onHandleChange }
          ></input>
          <br />
        </fieldset>
        <fieldset>
          <legend>Message</legend>
          <textarea 
            type="text" 
            name="message" 
            id="message"
            required
            onChange={ onHandleChange }
          ></textarea>
          <br />
        </fieldset>
        { showAlert && ( 
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => { setShowAlert(false); }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            { alert.message }
          </Alert>
        )}
        <button 
          type="submit"
          className="contactMe__submit"
        >
          Submit
        </button>
      </form>
      {/* <div className="contactMe__submit">
        <button 
          onClick={ onSubmitForm }
        >
          Submit
        </button>
      </div> */}
      <div className="contactMe__social">
        <h3>Let's connect!</h3>
        <div>
          <a href={ resumeData.social.email.link } title="Email">{ resumeData.social.email.icon }</a>
          <a href={ resumeData.social.facebook.link } title="Facebook">{ resumeData.social.facebook.icon }</a>
          <a href={ resumeData.social.linkedIn.link } title="LinkedIn">{ resumeData.social.linkedIn.icon }</a>
          <a href={ resumeData.social.gitHub.link } title="GitHub">{ resumeData.social.gitHub.icon }</a>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;
