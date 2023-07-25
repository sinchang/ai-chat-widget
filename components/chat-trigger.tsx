import { MessageCircleIcon, X } from 'lucide-react'

export interface ChatTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean
}

export const ChatTrigger = ({ show, ...restProps }: ChatTriggerProps) => {
  return (
    <div
      className="bg-brand relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full"
      {...restProps}
    >
      {show ? <X size={24} color="white" /> : <MessageCircleIcon size={24} color="white" />}
      {/* <span className='absolute right-0 top-0 h-4 w-4 rounded-full bg-red-500 text-xs text-white'>1</span> */}
    </div>
  )
}
