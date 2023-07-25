import { Button } from '@/components/ui/button'
import { PauseCircleIcon, RefreshCwIcon } from 'lucide-react'

type ChatActionProps = {
  isLoading: boolean
  onRegenerate: () => void
  onStop: () => void
}

export const ChatAction = ({ isLoading, onRegenerate, onStop }: ChatActionProps) => {
  return (
    <div className="mt-2 flex justify-center">
      {!isLoading ? (
        <Button size="icon" className="w-auto px-4" variant="outline" onClick={onRegenerate}>
          <RefreshCwIcon className="mr-2" size={14} />
          Regenerate response
        </Button>
      ) : (
        <Button size="icon" className="w-auto px-4" variant="outline" onClick={onStop}>
          <PauseCircleIcon className="mr-2" size={14} />
          Stop generating
        </Button>
      )}
    </div>
  )
}
