import { useCallback, useEffect, useRef } from 'react'

export const YTPlayer = ({ videoId, autoPlay }: { videoId: string; autoPlay?: boolean }) => {
  const scriptTagRef = useRef<null | HTMLScriptElement>(null)
  const playerRef = useRef<null | unknown>(null)

  const insertYTScriptAPI = useCallback(() => {
    scriptTagRef.current = document.createElement('script')

    scriptTagRef.current.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag?.parentNode?.insertBefore(scriptTagRef.current, firstScriptTag)
  }, [])

  const createPlayer = useCallback(() => {
    playerRef.current = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId,
      events: {
        onReady: (event: { target?: { playVideo: () => void } }) => {
          if (autoPlay) event?.target?.playVideo()
        }
      }
    })
  }, [autoPlay, videoId])

  const setOnPlayerReadyFunction = useCallback(() => {
    if (playerRef.current) return

    window.onYouTubeIframeAPIReady = createPlayer
  }, [createPlayer])

  useEffect(() => {
    setOnPlayerReadyFunction()
    insertYTScriptAPI()

    return () => {
      if (playerRef.current) playerRef.current = null
      if (scriptTagRef.current) document.head.removeChild(scriptTagRef.current)
    }
  }, [insertYTScriptAPI, setOnPlayerReadyFunction])

  return <div id="player" />
}
