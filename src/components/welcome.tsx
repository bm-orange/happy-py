import homeBG from "../assets/home-bg.png"
export const Welcome = function ({ hidden, handleNav }: { hidden: boolean, handleNav: (n: number) => void }) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-b from-blue-100 to-purple-100 ${hidden ? 'hidden' : ''}`}>
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-600 mb-4">快乐拼音岛</h1>
        <p className="text-2xl md:text-3xl text-orange-500">
          一起来学习汉语拼音吧！
        </p>
      </div>
      {/* image bg */}
      <div className="w-full max-w-2xl mb-12 flex flex-col items-center">
        <img src={homeBG} alt="快乐拼音岛" className="w-full rounded-3xl shadow-xl" />
        <div className="bg-yellow-400 text-center text-white text-xl px-6 py-2 rounded-full shadow-lg transform -translate-y-1/2 md:w-1/3">欢迎小朋友们！</div>
        <button className="md:w-1/3 bg-orange-500 hover:bg-orange-600 text-white text-xl md:text-2xl px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2" onClick={() => handleNav(1)}>
          <i className="w-6 h-6"><svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 408.221 408.221" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11 C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012 c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z"></path> </g> </g> </g></svg></i>
          开始学习
        </button>
      </div>
      <div className="text-center text-gray-500 text-sm">
        <p>页面内容均由 AI 生成，仅供参考</p>
        <p>created by <a href="https://space.coze.cn" className="text-blue-500 hover:underline">coze space</a></p>
      </div>
    </div>
  )
}