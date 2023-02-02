import React, {useState}from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import "./../css/form.css";
import send from './../images/send.svg';

const API_PATH = 'http://aztexcs.com/majorp/restapi/email.php';

export default function ContactUs() {

const [  mailSent,setmailSent] = useState('');
  const [  error,seterror] = useState('');
  
  
  return (

       
    <section
    name="contact"
    id="contact"
className='contact'
    data-aos="" 
  >
    <div className="form-wrapper">

      <div className="contact-form">
    <h4> Contact Me   </h4>
    <p>
    Wanna get in touch or talk about a project?
Feel free to contact me.
    </p>
  <br />


  <Formik

initialValues={{ name: '',email: '', subject: '',message: '' }}

validate={values => {


  const errors = {};

  if (!values.name) {

    errors.name = 'Your name is required *';

  } else if (values.name.length < 5) {

    errors.name = 'Must be 5 characters or more';

  }


  if (!values.email) {

    errors.email = 'Your email is required *';

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

    errors.email = 'Invalid email address';

  }

  if (!values.subject) {

    errors.subject = 'Subject is required *';

  } else if (values.subject.length < 5) {

    errors.subject = 'Must be 6 characters or more';

  }


  if (!values.message) {

    errors.message = 'Your message is required *';

  } else if (values.message.length > 1000) {

    errors.message = 'Must be 1000 characters or less';

  }

  return errors;

}}

onSubmit={(values, { setSubmitting }) => {

  setTimeout(() => {

      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(values, null, 2)
      })
      .then(result => {
        console.log('result',result);
        setmailSent(result.data.sent)
      }) 
        .catch((error) => {
          seterror(error.message)
          console.log(error);
        });
    
    setSubmitting(false);

  }, 400);

}}

>

{({ isSubmitting }) => (

  <Form>
     <div className='error'> {mailSent}   </div>
     <div className='error'> {error} </div>

      <ErrorMessage name="name" className='error'component="div" />
  <Field id="name" name="name" type="text" placeholder='Name (required)' />

  <ErrorMessage name="email" className='error' component="div" />
  <Field id="email" name="email" type="text" placeholder='Email (required)' />

  <ErrorMessage name="subject" className='error'component="div" />
  <Field id="subject" name="subject" type="text" placeholder='Subject' />

  <ErrorMessage name="message" className='error' component="div" />
  < Field type="text" id="message" name="message" className="textarea" />

  <button type="submit" className='send-button' disabled={isSubmitting}>
  <img src={send} /> 
</button>

<div>
<div>
 
</div>
</div>

  </Form>

)}

</Formik>

    </div>
</div>

<div className='contact-form-social'>
 <h2> <i className="fas fa-envelope"></i> Email:</h2>
<span className='myemail'>omagbemiprecious5@gmail.com</span>
  <div className="social-links" >
  <div className="contactme-text">
  <i className="fas fa-globe"></i>   <span>Social Connect</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/major-p"
            >
              <i className="fab fa-github social-icon" title="github" id="github" ></i>
            </a>

            {/* facebook */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/omagbemi.osanwerenprecious"
            >
              <i className="fab fa-facebook social-icon" title="facebook" id="facebook"></i>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/"
            >
              <i className="fab fa-linkedin social-icon" title="linkedin" id="linkedin"></i>
            </a>

            {/* Twitter */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/"
            >
              <i className="fab fa-twitter social-icon" title="twitter" id="twitter"></i>
            </a>

            {/* Instagram */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <i
                className="fab fa-instagram social-icon"
                title="instagram"
                id="instagram"
              ></i>
            </a>
          </div>
  </div>

    </div>
    </section>

  );
}
