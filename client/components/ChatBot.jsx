import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function ChatBot(props) {
  console.log(props.clippy)
  let history = useHistory()
  const [chatBot, closeChatBot] = useState(true)
  const [hideButton, toggleHideButton] = useState(true)
  const [messages, setMessages] = useState([
    {
      user: 'Clippy',
      message: `It looks like you're trying to make a cookie.`,
    },
    { user: 'Clippy', message: 'Would you like help?' },
  ])

  const [input, setInput] = useState('')

  const clippymessages = [
    `It looks like you're trying to register. Would you like help?`,
    `Click on the register button to register!`,
    `Would you like me to take you to the register page?`,
  ]

  useEffect(() => {
    if (props.clippy !== undefined) {
      const newMessage = {
        user: 'Clippy',
        message: clippymessages[props.clippy - 1],
      }
      setMessages([...messages, newMessage])
    }
  }, [props.clippy])

  function handleOnChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    if (
      e.key === 'Enter' &&
      props.clippy === 3 &&
      input.toLowerCase() === 'yes'
    ) {
      history.push('register')
      console.log('running redirect')
      setInput('')
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const newMessage = {
        user: 'You',
        message: input,
      }
      setMessages([...messages, newMessage])
      setInput('')
    }
  }

  function handleClick() {
    closeChatBot(false)
  }

  function mouseEnterHandler() {
    toggleHideButton(false)
  }

  function mouseLeaveHandler() {
    toggleHideButton(false)
  }

  return (
    <>
      {chatBot && (
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='chatbot-wrapper'>
          <div className='chatbot-icon'></div>
          <div className='chatbot'>
            <div className='chatbot-header'>
              <div className='chatbot-name'>Clippy</div>
            </div>
            <div className='chatbot-body'>
              <div className='chatbot-text'>
                {messages.map(({ user, message }, idx) => {
                  return (
                    <div key={idx} className='chatbot-text line'>
                      {`${user}: ${message}`}
                    </div>
                  )
                })}
              </div>
              <input
                type='text'
                className='chatbot-input'
                value={input}
                onKeyDown={(e) => handleSubmit(e)}
                onChange={(e) => handleOnChange(e)}></input>
            </div>
          </div>
          <div
            className={'close ' + (hideButton ? 'hide' : '')}
            onClick={handleClick}></div>
        </div>
      )}
    </>
  )
}

export default ChatBot
