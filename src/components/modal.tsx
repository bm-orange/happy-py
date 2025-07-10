export const Modal = ({ hidden, char }: { hidden: boolean, char: string }) => {
  return (
    <div className={`bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40 ${hidden ? 'hidden' : ''}`}>
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex">
        <div className="w-38 h-38 text-white rounded-full bg-green-600 flex items-center justify-center pulse font-bold text-7xl mono-font loading-button">
          {char}
        </div>
      </div>
    </div>
  )
}