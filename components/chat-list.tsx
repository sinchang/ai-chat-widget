import { ChatMessage } from '@/components/chat-message'
import { cn } from '@/lib/utils'
import { type Message } from 'ai/react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import type { CodeProps } from 'react-markdown/lib/ast-to-react'

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
              components={{
                code({ node, inline, className, children, style, ...props }: CodeProps) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...props} className={cn('text-amber-600', className)}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {message.content}
            </ReactMarkdown>
          </ChatMessage>
        )
      })}
    </div>
  )
}
