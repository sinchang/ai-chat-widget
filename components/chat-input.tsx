import Textarea from 'react-textarea-autosize'
import { Button } from '@/components/ui/button'
import { SendIcon } from 'lucide-react'
import { useRef, KeyboardEventHandler, useCallback } from 'react'
import { type UseChatHelpers } from 'ai/react'

export const ChatInput = (
  props: Pick<UseChatHelpers, 'handleInputChange' | 'handleSubmit' | 'input' | 'isLoading' | 'setInput'>
) => {
  const { input, setInput, handleInputChange, handleSubmit, isLoading } = props
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = useCallback(
    e => {
      if (e.code === 'Enter') {
        e.preventDefault()
        if (e.shiftKey) {
          const pos = inputRef.current?.selectionStart || 0
          setInput(`${input.slice(0, pos)}\n${input.slice(pos)}`)
          setTimeout(() => {
            inputRef.current!.setSelectionRange(pos + 1, pos + 1)
          }, 0)
        } else if (!isLoading) {
          handleSubmit(e as any)
        }
      }
    },
    [handleSubmit, input, isLoading, setInput]
  )

  return (
    <form
      className="relative m-2 flex max-h-60 grow flex-col rounded-md border bg-background pl-3 pr-8"
      onSubmit={handleSubmit}
    >
      <Textarea
        tabIndex={0}
        ref={inputRef}
        rows={1}
        value={input}
        onKeyDown={onKeyDown}
        onChange={handleInputChange}
        placeholder="Type message, press ↵ to send"
        spellCheck={false}
        className="w-full resize-none bg-transparent py-[0.8rem] pr-4 text-sm focus-within:outline-none"
      />
      <div className="absolute right-4 top-2">
        <Button type="submit" disabled={isLoading || input === ''} size="icon" className="h-8 w-8 bg-brand hover:bg-brand">
          <SendIcon size={18} />
        </Button>
      </div>
    </form>
  )
}
