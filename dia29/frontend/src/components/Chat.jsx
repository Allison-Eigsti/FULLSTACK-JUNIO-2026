import { useEffect, useRef } from 'react'

function Chat() {
    const [ messages, setMessages ] = useState([])
    const bottomRef = useRef(null)

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = (text) => {
        setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user'}])
    }

    return(
        <>
        <div className='chat-container' style={{ overflowY: 'auto', height: '300px'}}>
            {messages.map(msg => (
                <div></div>
            ))}
        </div>
        </>
    )
}

export default Chat