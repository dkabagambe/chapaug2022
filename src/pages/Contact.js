import { useState, useEffect } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const initialValues = { username: '', email: '', subject: '', messsage: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    return errors;
  };
  return (
    <div className="contact">
      <div className="number">
        <h3>Tirupati Mazima Mall Ggaba Road, Kampala Uganda</h3>
        <p>OFFICE LINE: 0414-771020 </p>
        <p>+ 256 704-645-051</p>
        <p>
          <a href="mailto: chapa.enterprisesltd@gmail.com">info@chapaug.com</a>
        </p>
      </div>
      <div className="hour">
        <h2>Open Hours</h2>
        <p>sunday: Closed</p>
        <p>Monday to Friday</p>
        <p>8:00 AM - 5:00 PM</p>
        <p>Saturday</p>
        <p>8:00 AM - 12:00 PM</p>
      </div>
      <div className="form-item">
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Full name"
            type="text"
            value={formValues.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>

          <input
            name="email"
            placeholder="Email address"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>

          <input
            name="subject"
            placeholder="Subject"
            type="text"
            value={formValues.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="write your message here"
            type="text"
            value={formValues.message}
            onChange={handleChange}
          />
          <br></br>
          <button name="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
