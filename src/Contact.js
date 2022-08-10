import React from 'react';
import styles from './style.module.css';

const Contact = ()=> {
    return (
      <div className={styles.contact}>
        <label> First Name</label>
        <br />
        <input type="text" placeholder="First Name" />
        <br />
        <br />
        <label>last Name</label>
        <br />
        <br />
        <input type="text" placeholder="Last Name" />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input type="text" placeholder="Email" />
        <br />
        <br />
        <textarea rows={8} cols={40} placeholder="Message" />
        <br />
       <button>Submit</button>
      </div>
    );
}

export default Contact;
