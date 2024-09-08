import form_img from '../images/Frame 62.png';
import React, { useState } from 'react';

const ContactForm = () => {
    // State for form values
    const [formData, setFormData] = useState({
      fname: '',
      lname: '',
      mail: '',
      num: '',
      region: '',
      code: '',
      city: '',
      text: '',
    });
  
    // State for errors
    const [errors, setErrors] = useState({});
  
    // Handle input change
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };
  
    // Validate form data
    const validate = () => {
      const errors = {};
      if (!formData.fname) errors.fname = 'First name is required';
      if (!formData.lname) errors.lname = 'Last name is required';
      if (!formData.mail || !/\S+@\S+\.\S+/.test(formData.mail)) errors.mail = 'Valid email is required';
      if (!formData.num) errors.num = 'Phone number is required';
      if (!formData.region) errors.region = 'Country/Region is required';
      if (!formData.code) errors.code = 'Zip code is required';
      if (!formData.city) errors.city = 'City is required';
      if (!formData.text) errors.text = 'Message is required';
      return errors;
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        // Form is valid, proceed with form submission
        console.log('Form data submitted:', formData);
        // Reset form
        setFormData({
          fname: '',
          lname: '',
          mail: '',
          num: '',
          region: '',
          code: '',
          city: '',
          text: '',
        });
        setErrors({});
      }
    };
  
    return (
      <section className="form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="inner">
                <h5>CONTACT US</h5>
                <h2>We'd Love To Hear From You</h2>
                <p>Get in touch for wholesale, media and general enquiries.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="col-12">
                  <div className="inner">
                    <p>
                      <input
                        type="text"
                        id="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        placeholder="First name*"
                      />
                      {errors.fname && <span className="error">{errors.fname}</span>}
                    </p>
                    <p>
                      <input
                        type="text"
                        id="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        placeholder="Last name*"
                      />
                      {errors.lname && <span className="error">{errors.lname}</span>}
                    </p>
                    <p>
                      <input
                        type="text"
                        id="mail"
                        value={formData.mail}
                        onChange={handleChange}
                        placeholder="Email*"
                      />
                      {errors.mail && <span className="error">{errors.mail}</span>}
                    </p>
                    <p>
                      <input
                        type="number"
                        id="num"
                        value={formData.num}
                        onChange={handleChange}
                        placeholder="Phone*"
                      />
                      {errors.num && <span className="error">{errors.num}</span>}
                    </p>
                    <p>
                      <input
                        type="text"
                        id="region"
                        value={formData.region}
                        onChange={handleChange}
                        placeholder="Country/Region*"
                      />
                      {errors.region && <span className="error">{errors.region}</span>}
                    </p>
                  </div>
                </div>
  
                <div className="botm inner">
                  <div className="col-half left">
                    <p>
                      <input
                        type="number"
                        id="code"
                        value={formData.code}
                        onChange={handleChange}
                        placeholder="Zip code*"
                      />
                      {errors.code && <span className="error">{errors.code}</span>}
                    </p>
                  </div>
                  <div className="col-half left">
                    <p>
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City*"
                      />
                      {errors.city && <span className="error">{errors.city}</span>}
                    </p>
                  </div>
                </div>
                <div className="col-12 inner">
                  <textarea
                    id="text"
                    className="area"
                    rows="5"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Your message*"
                  />
                  {errors.text && <span className="error">{errors.text}</span>}
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="inner_img">
                {<img src={form_img}  alt="Contact Us" />}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  
