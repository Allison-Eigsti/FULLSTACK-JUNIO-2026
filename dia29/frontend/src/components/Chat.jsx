import { useEffect, useRef, useState } from 'react'

function Chat() {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const bottomRef = useRef(null)


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()

    if (!text.trim()) return

    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        sender: 'user'
      }
    ])

    setText('')
  }

  return (
    <div className="w-full max-w-md">


      <div
        className="h-[300px] overflow-y-auto border rounded-lg p-4"
      >
        {messages.map(msg => (
          <div
            key={msg.id}
            className="mb-2 p-2 bg-blue-500 text-white rounded-lg"
          >
            {msg.text}
          </div>
        ))}

        <div ref={bottomRef} />
      </div>


      <form onSubmit={handleSend} className="flex gap-2 mt-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 border rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-lg"
        >
          Enviar
        </button>
      </form>

    </div>
  )
}

export default Chat