'use client'

import React, { useState, useEffect } from 'react'


export default function Chat() {
  const [ messages, setMessages ] = useState([])
  const [ message, setMessage ] = useState('')
  const [ user, setUser ] = useState('')
  const [ ws, setWs ] = useState(null)

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/')
    
    socket.onopen = () => console.log('Connected to websocket')
    socket.onmessage = (e) => {
      console.log(e)
      setMessages((prevMessages) => [...prevMessages, JSON.parse(e.data)])
    }

    socket.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    socket.onclose = () => {
      console.log('WebSocket disconnected')
    }

    setWs(socket)

    return () => socket.close()
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    if (ws && message.trim()) {
      ws.send(JSON.stringify({
          message: message,
          user: user
      }))
      setMessage('')
    }
  }

  return (
    <div>
      <h2>Chat WebSocket</h2>
      <input
        type='text'
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder='Write your name'
      />

      <div>
        {messages.map((msg, index) => (
          <div key={index}><b>{msg.user}:</b>{msg.message}</div>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <input 
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Write a Message'
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}
