import { maximizeAtom } from '@/lib/store'
import { EraserIcon, Maximize2Icon, Minimize2Icon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useAtom } from 'jotai'

export const ChatHeader = ({ onClear }: { onClear: () => void }) => {
  const [isMaximize, setMaximize] = useAtom(maximizeAtom)

  return (
    <header className="flex items-center justify-between rounded-t-md bg-brand p-3 text-white">
      <h3>AI Chat Widget</h3>
      <div className="flex gap-2">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <EraserIcon size={16} className="cursor-pointer" onClick={onClear} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Clean History</p>
            </TooltipContent>
          </Tooltip>
          <div className="hidden md:block">
            <Tooltip>
              <TooltipTrigger>
                {isMaximize ? (
                  <Minimize2Icon size={16} className="cursor-pointer" onClick={() => setMaximize(!isMaximize)} />
                ) : (
                  <Maximize2Icon size={16} className="cursor-pointer" onClick={() => setMaximize(!isMaximize)} />
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>{isMaximize ? 'Minimize' : 'Maximize'} window</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </header>
  )
}
