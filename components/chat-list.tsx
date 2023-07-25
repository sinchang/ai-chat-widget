import { ChatMessage } from '@/components/chat-message'
import { type Message } from 'ai/react'

export interface ChatListProps {
  messages: Message[]
}

export const ChatList = ({ messages }: ChatListProps) => {
  return (
    <div className="m-2">
      {messages.map((message, index) => {
        return (
          <ChatMessage role={message.role} key={message.id}>
            <p>{message.content}</p>
          </ChatMessage>
        )
      })}
    </div>
  )
}
