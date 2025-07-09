import { useState } from "react"
import data from "../data.json"
import { useAudio } from "./useAudio"
export const Tone = ({ hidden, handleNav }: { hidden: boolean, handleNav: (n: number) => void }) => {
  const tones = data.tones
  const [tone, setTone] = useState<typeof tones.singleVowelTones[0]>(tones.singleVowelTones[0])
  const [toneIndex, setToneIndex] = useState<number>(0)
  const [toneType, setToneType] = useState<string>("singleVowelTones")

  const {isPlaying, setIsPlaying, source, setSource, playAudio, pauseAudio} = useAudio()

  const handleChangeSource = (newSource: string) => {
    if (isPlaying) {
      return
    }

    if (newSource === source) {
      playAudio()
    } else {
      setSource(newSource)
    }
  }

  return (
    // 声调练习页面
    <div className={`min-h-screen px-4 py-8 bg-gradient-to-b from-green-100 to-blue-100 ${hidden ? 'hidden' : ''}`}>
      <header className="container mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-green-600 flex items-center">
            <i className="w-8 h-8 mr-3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0909 11.9629L19.3636 8.63087V14.1707C18.8126 13.8538 18.1574 13.67 17.4545 13.67C15.4964 13.67 13.9091 15.096 13.9091 16.855C13.9091 18.614 15.4964 20.04 17.4545 20.04C19.4126 20.04 21 18.614 21 16.855C21 16.855 21 16.8551 21 16.855L21 7.49236C21 6.37238 21 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.869 4.37569C20.7845 3.86441 20.6352 3.38745 20.347 2.98917C20.2028 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.716 2.39932 19.6711 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1944 2.74368 13.8808 3.23763L11.5963 4.09656C10.9806 4.32806 10.4589 4.52419 10.0494 4.72734C9.61376 4.94348 9.23849 5.1984 8.95707 5.57828C8.67564 5.95817 8.55876 6.36756 8.50501 6.81203C8.4545 7.22978 8.45452 7.7378 8.45455 8.33743V16.1307C7.90347 15.8138 7.24835 15.63 6.54545 15.63C4.58735 15.63 3 17.056 3 18.815C3 20.574 4.58735 22 6.54545 22C8.50355 22 10.0909 20.574 10.0909 18.815C10.0909 18.815 10.0909 18.8151 10.0909 18.815L10.0909 11.9629Z" fill="#00a63e"></path> </g></svg>
            </i>
            声调练习
          </h1>
          <button className="flex items-center gap-2 bg-orange-200 hover:bg-orange-300 text-orange-700 px-4 py-2 rounded-full" onClick={() => handleNav(1)}>
            <i className="w-6 h-6 mr-2">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z" fill="#f54a27" /></svg>
            </i>
            返回
          </button>
        </div>
      </header>

      <main className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">四个声调</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="tone-card bg-green-50 p-4 rounded-xl text-center cursor-pointer" onClick={() => {
              const path = `/assets/${tone.fourTone[0].audio}`
              handleChangeSource(path)
            }}>
              <div className="text-5xl text-green-600 mb-2">ˉ</div>
              <h3 className="text-xl font-bold">第一声</h3>
              <p className="text-gray-600">高平调</p>
              <div className="mt-2 text-green-600 text-3xl font-bold">{tone.fourTone[0].char}</div>
            </div>
            <div className="tone-card bg-yellow-50 p-4 rounded-xl text-center cursor-pointer" onClick={() => {
              const path = `/assets/${tone.fourTone[1].audio}`
              handleChangeSource(path)
            }}>
              <div className="text-5xl text-yellow-600 mb-2">ˊ</div>
              <h3 className="text-xl font-bold">第二声</h3>
              <p className="text-gray-600">升调</p>
              <div className="mt-2 text-yellow-600 text-3xl font-bold">{tone.fourTone[1].char}</div>
            </div>
            <div className="tone-card bg-blue-50 p-4 rounded-xl text-center cursor-pointer" onClick={() => {
              const path = `/assets/${tone.fourTone[2].audio}`
              handleChangeSource(path)
            }}>
              <div className="text-5xl text-blue-600 mb-2">ˇ</div>
              <h3 className="text-xl font-bold">第三声</h3>
              <p className="text-gray-600">降升调</p>
              <div className="mt-2 text-blue-600 text-3xl font-bold">{tone.fourTone[2].char}</div>
            </div>
            <div className="tone-card bg-red-50 p-4 rounded-xl text-center cursor-pointer" onClick={() => {
              const path = `/assets/${tone.fourTone[3].audio}`
              handleChangeSource(path)
            }}>
              <div className="text-5xl text-red-600 mb-2">ˋ</div>
              <h3 className="text-xl font-bold">第四声</h3>
              <p className="text-gray-600">降调</p>
              <div className="mt-2 text-red-600 text-3xl font-bold">{tone.fourTone[3].char}</div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-5xl mb-4 text-center text-blue-600">{tone.char}</div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex items-center justify-center space-x-4">
              <span className="h-full text-2xl font-bold mb-4">选择：</span>
                <select className="bg-white border-2 border-green-300 rounded-full px-4 py-2 text-xl" disabled={isPlaying} defaultValue={toneType} onChange={(e) => {
                  setToneType(e.target.value)
                  setTone(tones[e.target.value][0])
                }}>
                  {/* 选项将通过JS动态添加 */}
                  <option value="singleVowelTones">单韵母：a o e ...</option>
                  <option value="doubleVowelTones">复韵母：ai ei ui ...</option>
                  <option value="noseVowelTones">鼻韵母：an en in ...</option>
                </select>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-items-center gap-4">
                {tones[toneType].map((v, i) => {
                  return (
                    <div key={i} className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full cursor-pointer flex gap-2 items-center justify-center p-4" onClick={() => {
                      if (isPlaying) {
                        return
                      }
                      setTone(v)
                    }}>
                      <span className="text-4xl font-bold">{v.char}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}