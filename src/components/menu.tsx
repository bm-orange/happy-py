import kid from "../assets/kid.png"
export const Menu = ({ hidden, handleNav }: { hidden: boolean, handleNav: (n: number) => void }) => {
  return (
    <div className={`flex flex-col items-center min-h-screen px-4 py-8 bg-gradient-to-b from-green-100 to-blue-100 ${ hidden ? 'hidden' : '' }`}>
      <header className="container mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-purple-600 flex items-center">
            <i className="mr-3 h-12 w-12"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9810fa"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z" fill="#9810fa"></path> <path d="M10.7083 4.70969C8.87828 3.71969 6.10828 2.83969 4.22828 2.67969H4.15828C2.95828 2.67969 1.98828 3.64969 1.98828 4.84969V16.7397C1.98828 17.7097 2.77828 18.5997 3.74828 18.7197L4.05828 18.7597C5.69828 18.9797 8.00828 19.6597 9.86828 20.4397C10.5183 20.7097 11.2383 20.2197 11.2383 19.5097V5.59969C11.2383 5.21969 11.0383 4.88969 10.7083 4.70969ZM4.99828 7.73969H7.24828C7.65828 7.73969 7.99828 8.07969 7.99828 8.48969C7.99828 8.90969 7.65828 9.23969 7.24828 9.23969H4.99828C4.58828 9.23969 4.24828 8.90969 4.24828 8.48969C4.24828 8.07969 4.58828 7.73969 4.99828 7.73969ZM7.99828 12.2397H4.99828C4.58828 12.2397 4.24828 11.9097 4.24828 11.4897C4.24828 11.0797 4.58828 10.7397 4.99828 10.7397H7.99828C8.40828 10.7397 8.74828 11.0797 8.74828 11.4897C8.74828 11.9097 8.40828 12.2397 7.99828 12.2397Z" fill="#9810fa"></path> </g></svg></i> 快乐拼音岛
          </h1>
          <div className="flex items-center">
            <button className="bg-orange-200 hover:bg-orange-300 text-orange-600 px-4 py-2 rounded-full flex items-center gap-2" onClick={() => handleNav(0)}>
              <i className="mr-2 w-6 h-6">
                <svg fill="#f54a27" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve">
                  <g>
                    <path d="M49,27h-5v22c0,0.6-0.4,1-1,1H33c-0.6,0-1-0.4-1-1V32H20v17c0,0.6-0.4,1-1,1H9c-0.6,0-1-0.4-1-1V27H3
		c-0.4,0-0.8-0.2-0.9-0.6C1.9,26,2,25.6,2.3,25.3l23-23c0.4-0.4,1.1-0.4,1.4,0l23,23c0.3,0.3,0.3,0.7,0.2,1.1S49.4,27,49,27z"/>
                  </g>
                </svg>
              </i>
              返回首页
            </button>
          </div>
        </div>

        <nav className="mt-6 flex justify-center space-x-4 md:space-x-8">
          <button className="nav-item text-xl md:text-2xl text-blue-600 px-4 py-2 flex items-center" onClick={() => handleNav(2)}>
            <i className="w-6 h-6 mr-2">
              <svg viewBox="-0.16 0 20.32 20.32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="font-2" transform="translate(-2 -2)"> <path id="primary" d="M4,21,12,3l8,18" fill="none" stroke="#155dfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path id="primary-2" d="M20,21,12,3,4,21" fill="none" stroke="#155dfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <line id="primary-3" x2="7.5" y2="16.87" transform="translate(11.5 4.13)" fill="none" stroke="#155dfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line> <path id="primary-4" d="M7,15H17M6,21H3m14,0h4" fill="none" stroke="#155dfc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g></svg>
            </i>
            拼音字母
          </button>
          <button className="nav-item text-xl md:text-2xl text-green-600 px-4 py-2 flex items-center" data-target="tone-page" onClick={() => handleNav(3)}>
            <i className="w-6 h-6 mr-2">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0909 11.9629L19.3636 8.63087V14.1707C18.8126 13.8538 18.1574 13.67 17.4545 13.67C15.4964 13.67 13.9091 15.096 13.9091 16.855C13.9091 18.614 15.4964 20.04 17.4545 20.04C19.4126 20.04 21 18.614 21 16.855C21 16.855 21 16.8551 21 16.855L21 7.49236C21 6.37238 21 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.869 4.37569C20.7845 3.86441 20.6352 3.38745 20.347 2.98917C20.2028 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.716 2.39932 19.6711 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1944 2.74368 13.8808 3.23763L11.5963 4.09656C10.9806 4.32806 10.4589 4.52419 10.0494 4.72734C9.61376 4.94348 9.23849 5.1984 8.95707 5.57828C8.67564 5.95817 8.55876 6.36756 8.50501 6.81203C8.4545 7.22978 8.45452 7.7378 8.45455 8.33743V16.1307C7.90347 15.8138 7.24835 15.63 6.54545 15.63C4.58735 15.63 3 17.056 3 18.815C3 20.574 4.58735 22 6.54545 22C8.50355 22 10.0909 20.574 10.0909 18.815C10.0909 18.815 10.0909 18.8151 10.0909 18.815L10.0909 11.9629Z" fill="#00a63e"></path> </g></svg>
            </i>
            声调练习
          </button>
        </nav>
      </header>
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 items-center justify-center">
        {/* 拼音字母卡片 */}
        <div className="w-full max-w-md md:max-w-96 rounded-4xl md:rounded-2xl shadow-2xl bg-white p-6 text-center cursor-pointer" onClick={() => handleNav(2)}>
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="w-8 h-8">
              <svg viewBox="-0.16 0 20.32 20.32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="font-2" transform="translate(-2 -2)"> <path id="primary" d="M4,21,12,3l8,18" fill="none" stroke="#155dfc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <path id="primary-2" data-name="primary" d="M20,21,12,3,4,21" fill="none" stroke="#155dfc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <line id="primary-3" data-name="primary" x2="7.5" y2="16.87" transform="translate(11.5 4.13)" fill="none" stroke="#155dfc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line> <path id="primary-4" data-name="primary" d="M7,15H17M6,21H3m14,0h4" fill="none" stroke="#155dfc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> </g> </g></svg>
            </i>
          </div>
          <h3 className="text-2xl font-bold text-blue-600 mb-2">拼音字母</h3>
          <p className="text-gray-600">学习声母和韵母</p>
          <div className="mt-4 flex justify-center space-x-2">
            {['b', 'a', 'o'].map((v, i) => {
              return (
                <div key={i} className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <span className="font-bold text-4xl">{v}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* 声调练习卡片 */}
        <div className="w-full max-w-md md:max-w-96 rounded-4xl md:rounded-2xl shadow-2xl bg-white p-6 text-center cursor-pointer" onClick={() => handleNav(3)}>
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="w-8 h-8">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0909 11.9629L19.3636 8.63087V14.1707C18.8126 13.8538 18.1574 13.67 17.4545 13.67C15.4964 13.67 13.9091 15.096 13.9091 16.855C13.9091 18.614 15.4964 20.04 17.4545 20.04C19.4126 20.04 21 18.614 21 16.855C21 16.855 21 16.8551 21 16.855L21 7.49236C21 6.37238 21 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.869 4.37569C20.7845 3.86441 20.6352 3.38745 20.347 2.98917C20.2028 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.716 2.39932 19.6711 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1944 2.74368 13.8808 3.23763L11.5963 4.09656C10.9806 4.32806 10.4589 4.52419 10.0494 4.72734C9.61376 4.94348 9.23849 5.1984 8.95707 5.57828C8.67564 5.95817 8.55876 6.36756 8.50501 6.81203C8.4545 7.22978 8.45452 7.7378 8.45455 8.33743V16.1307C7.90347 15.8138 7.24835 15.63 6.54545 15.63C4.58735 15.63 3 17.056 3 18.815C3 20.574 4.58735 22 6.54545 22C8.50355 22 10.0909 20.574 10.0909 18.815C10.0909 18.815 10.0909 18.8151 10.0909 18.815L10.0909 11.9629Z" fill="#00a63e"></path> </g></svg>
            </i>
          </div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">声调练习</h3>
          <p className="text-gray-600">学习四个声调</p>
          <div className="mt-4 flex justify-center space-x-2">
            {['ˉ', 'ˊ', 'ˇ', 'ˋ'].map((v, i) => {
              return (
                <div key={i} className="w-16 h-16 rounded-full flex items-center justify-center bg-green-100 text-green-600">
                  <span className="font-bold text-4xl">{v}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <img src={kid} alt="学习小伙伴" className="w-48 mx-auto rounded-full border-4 border-yellow-400 shadow-lg" />
          <p className="mt-4 text-xl text-purple-600">每天学习一点点，进步看得见！</p>
      </div>
    </div>
  )
}