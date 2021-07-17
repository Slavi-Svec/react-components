import React from 'react'

const ContactForm = () => {
  return (
    <div className="form-container">
      <form className="register-form">
        <input className="form-field" placeholder="Name" name="name" />
        <input className="form-field" placeholder="Message" name="message" />
        <input className="form-field" placeholder="Email" name="text" />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default ContactForm
