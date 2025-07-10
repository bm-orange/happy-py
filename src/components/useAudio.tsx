import { useEffect, useRef, useState } from "react"

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [source, setSource] = useState<string>("")
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    try {
      if (source) {
        audioRef.current = new Audio(source)
        // console.log(`useEffect: play ${source}`)
        audioRef.current.onended = () => {
          setIsPlaying(false)
        }
        playAudio()
        return () => {
          pauseAudio()
        }
      }
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  }, [source])
  const playAudio = () => {
    if (audioRef.current) {
      setIsPlaying(true)
      audioRef.current.play().catch((err) => {
        console.error(`Error: ${err}`)
      })
    }
  }
  const pauseAudio = () => {
    if (audioRef.current) {
      setIsPlaying(false)
      audioRef.current.pause()
    }
  }

  return { isPlaying, setIsPlaying, source, setSource, playAudio, pauseAudio }
}