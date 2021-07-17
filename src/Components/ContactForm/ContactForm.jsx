import React, { useState } from 'react'
import './styles.css'

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    message: '',
    email: ''
  })

  const [submitted, setSubmitted] = useState(true)

  const handleName = event => {
    setValues({ ...values, name: event.target.value })
  }

  const handleMessage = event => {
    setValues({ ...values, message: event.target.value })
  }

  const handleEmail = event => {
    setValues({ ...values, email: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (values.name && values.message && values.email) {
    }
    setSubmitted(true)
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          onChange={handleName}
          value={values.name}
          className="form-field"
          placeholder="Name"
          name="name"
        />
        {submitted && !values.name ? <span>Please enter your name</span> : null}
        <input
          onChange={handleMessage}
          value={values.message}
          className="form-field"
          placeholder="Message"
          name="message"
        />
        {submitted && !values.message ? (
          <span>Please enter a message</span>
        ) : null}
        <input
          onChange={handleEmail}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="text"
        />
        {submitted && !values.email ? (
          <span>Please enter a valid email</span>
        ) : null}
        <button className="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
