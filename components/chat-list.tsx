import { ChatMessage } from '@/components/chat-message'
import { cn } from '@/lib/utils'
import { type Message } from 'ai/react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export interface ChatListProps {
  messages: Message[]
}

export const ChatList = ({ messages }: ChatListProps) => {
  return (
    <div className="m-2">
      {messages.map((message, index) => {
        return (
          <ChatMessage role={message.role} key={message.id}>
            <ReactMarkdown
              // eslint-disable-next-line react/no-children-prop
              children={message.content}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  const childStr = String(children).replace(/\n$/, '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      // eslint-disable-next-line react/no-children-prop
                      children={childStr}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...props} className={cn('text-amber-600', className)}>
                      {children}
                    </code>
                  )
                }
              }}
            />
          </ChatMessage>
        )
      })}
    </div>
  )
}
