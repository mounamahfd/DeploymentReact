import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

const PersonalInfoForm = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0); // Initial value of 18 for the slider

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="field">
        <label className="label">Name</label>
        <div className="control">
            <input className="input" type="text" placeholder="Text input" />
        </div>
        </div>

        <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
            <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
            </span>
        </div>
        <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
            </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
        <label className="label">Subject</label>
        <div className="control">
            <div className="select">
            <select>
                <option>Select dropdown</option>
                <option>With options</option>
            </select>
            </div>
        </div>
        </div>

        <div className="field">
        <label className="label">Message</label>
        <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
        </div>

        <div className="field">
        <div className="control">
            <label className="checkbox">
            <input type="checkbox" />
            I agree to the <a href="#">terms and conditions</a>
            </label>
        </div>
        </div>

        <div className="field">
        <div className="control">
            <label className="radio">
            <input type="radio" name="question" />
            Yes
            </label>
            <label className="radio">
            <input type="radio" name="question" />
            No
            </label>
        </div>
        </div>

        <div className="field is-grouped">
        <div className="control">
            <button className="button is-link">Submit</button>
        </div>
        <div className="control">
            <button className="button is-link is-light">Cancel</button>
        </div>
        </div>

    </form>
  );
};

export default PersonalInfoForm;
