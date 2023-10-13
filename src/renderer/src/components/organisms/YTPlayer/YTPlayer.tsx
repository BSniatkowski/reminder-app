import { ETrustedLinks } from '@enums/links.enum'
import { useCallback, useEffect, useRef } from 'react'
import { IYTPlayerProps, TPlayerRef, TScriptTagRef } from './YTPlayer.types'

export const YTPlayer: React.FC<IYTPlayerProps> = ({ videoId, autoPlay }) => {
  const scriptTagRef = useRef<TScriptTagRef>(null)
  const playerRef = useRef<TPlayerRef>(null)

  const insertYTScriptAPI = useCallback(() => {
    scriptTagRef.current = document.createElement('script')

    scriptTagRef.current.src = ETrustedLinks.youtubeAPI
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag?.parentNode?.insertBefore(scriptTagRef.current, firstScriptTag)
  }, [])

  const createPlayer = useCallback(() => {
    playerRef.current = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId,
      events: {
        onReady: (event) => {
          if (autoPlay) event?.target?.playVideo()
        }
      }
    })
  }, [autoPlay, videoId])

  const setOnPlayerReadyFunction = useCallback(() => {
    if (playerRef.current) return

    // @ts-expect-error Trigger by youtube API after scripts being loaded
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
