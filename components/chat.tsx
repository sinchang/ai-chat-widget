import { ChatInput } from '@/components/chat-input'
import { ChatTrigger } from '@/components/chat-trigger'
import { useState } from 'react'
import { ChatHeader } from '@/components/chat-header'
import { ChatAction } from '@/components/chat-action'
import { cn, isArrayWithElement } from '@/lib/utils'
import { useAtom } from 'jotai'
import { maximizeAtom } from '@/lib/store'
import ScrollToBottom from 'react-scroll-to-bottom'
import { ChatList } from './chat-list'
import { useChat } from 'ai/react'

export const Chat = () => {
  const [open, setOpen] = useState(false)
  const [isMaximize] = useAtom(maximizeAtom)
  const { messages, isLoading, setInput, input, handleInputChange, handleSubmit, stop, reload, setMessages } = useChat()
  const handleOpen = async () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <div className="fixed bottom-8 right-8">
        <ChatTrigger show={open} onClick={handleOpen} />
      </div>
      {open ? (
        <div className={cn('fixed bottom-24 right-8 z-50 h-[80vh] bg-white shadow-xl', isMaximize ? 'w-3/4' : 'w-96')}>
          <div className="relative flex h-full w-full flex-col justify-between">
            <ChatHeader onClear={() => setMessages([])} />
            <ScrollToBottom
              className="h-full overflow-auto"
              followButtonClassName="hide-scroll-to-buttom"
              initialScrollBehavior="auto"
            >
              <ChatList messages={messages} />
            </ScrollToBottom>
            {isArrayWithElement(messages) ? (
              <ChatAction onStop={stop} onRegenerate={reload} isLoading={isLoading} />
            ) : null}
            <ChatInput
              isLoading={isLoading}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              setInput={setInput}
              input={input}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
