/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react';

const MessageSender = () => {
  const [sentMessage, setSentMessage] = useState('')

  return (
    <>
      <h1>Please Type a message you want to send</h1>
      <form>
        <input type ="text" className="message-in" name="message-in"></input>
        <button className="send-button"  onClick={() => setSentMessage('hello') }>press to send</button>
        <h1 className="message-out" name="message-in">{sentMessage}</h1>
      </form>

    </>
  )
}

export default MessageSender