import { useAudio } from "./useAudio";
import data from "../data.json"
export const Alphabet = ({ hidden, handleNav }: { hidden: boolean, handleNav: (n: number) => void }) => {
  const {isPlaying, setIsPlaying, source, setSource, playAudio, pauseAudio} = useAudio()

  return (
    // 拼音字母页面
    <div className={`min-h-screen px-4 py-8 bg-gradient-to-b from-blue-100 to-purple-100 ${hidden ? 'hidden' : '' }`}>
      <header className="container mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-600 flex items-center">
            <i className="w-8 h-8 mr-3">
            <svg viewBox="-0.16 0 20.32 20.32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="font-2" transform="translate(-2 -2)"> <path id="primary" d="M4,21,12,3l8,18" fill="none" stroke="#155dfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path id="primary-2" d="M20,21,12,3,4,21" fill="none" stroke="#155dfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <line id="primary-3" x2="7.5" y2="16.87" transform="translate(11.5 4.13)" fill="none" stroke="#155dfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line> <path id="primary-4" d="M7,15H17M6,21H3m14,0h4" fill="none" stroke="#155dfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g></svg>
            </i>
            拼音字母表
          </h1>
          <button className="flex items-center justify-center bg-orange-200 hover:bg-orange-300 text-orange-600 px-4 py-2 rounded-full" onClick={() => handleNav(1)}>
            <i className="w-6 h-6 mr-2">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z" fill="#f54a27" /></svg>
            </i>
            返回
          </button>
        </div>
      </header>

      <main className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">声母</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-4">
            {/* 声母列表 */}
            {data.consonants.map((v, i) => {
              return (
                <div key={i} className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full cursor-pointer flex gap-2 items-center justify-center p-4" onClick={() => {
                  if (isPlaying) {
                    return
                  }
                  // e.stopPropagation()
                  const path = `/assets/${v.audio}`
                  // console.log(`Play ${v.char}: ${path}`)
                  if (source === path) {
                    playAudio()
                  } else {
                    setSource(path)
                  }
                }}>
                  <span className="text-4xl font-bold">{v.char}</span>
                  {/* <img src={v.image} alt="" className="w-12 h-12 mt-2" /> */}
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">韵母</h2>
          {/* <div className="flex gap-4"> */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 justify-items-center gap-4">
            {/* 韵母列表 */}
            {data.vowels.map((v, i) => {
              return (
                <div key={i} className="w-20 h-20 bg-purple-100 text-purple-600  rounded-full cursor-pointer flex gap-2 items-center justify-center p-4" onClick={(e) => {
                  if (isPlaying) {
                    return
                  }
                  // e.stopPropagation()
                  const path = `/assets/${v.audio}`
                  if (source === path) {
                    playAudio()
                  } else {
                    setSource(path)
                  }
                }}>
                  <span className="text-4xl font-bold">{v.char}</span>
                  {/* <img src={v.image} alt="" className="w-12 h-12 mt-2" /> */}
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}