import Link from 'next/link'
export const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-white px-4 shadow-sm md:px-48">
      <div className="relative flex h-16 items-center justify-between gap-8">
        <div className="flex flex-1 items-center gap-4">
          <Link href="/">
            <div className="inline-flex gap-1.5">
              <span className="font-medium text-gray-900">AI Chat Widget</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4"></div>
      </div>
    </header>
  )
}
