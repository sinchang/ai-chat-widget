import { cn } from '@/lib/utils'
import { BotIcon, UserIcon } from 'lucide-react'
import { type Message } from 'ai/react'

export interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  role: Message['role']
}

export const ChatMessage = ({ children, className, role }: ChatMessageProps) => {
  return (
    <div className={cn('mb-4 flex items-start gap-2', role === 'user' ? 'flex-row-reverse' : 'flex-row', className)}>
      <div className="rounded-full border-[1px] border-gray-200 p-2">
        {role === 'user' ? <UserIcon size={20} /> : <BotIcon size={20} />}
      </div>
      <div
        className={cn(
          'overflow-hidden rounded-[15px] px-4 py-2',
          role === 'user' ? 'bg-brand text-white' : 'text-primary-text bg-secondary'
        )}
      >
        {children}
      </div>
    </div>
  )
}
