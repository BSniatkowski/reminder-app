/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as S from './VisibilityChecker.style'

export const VisibilityChecker: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [windowSizes, setWindowSizes] = useState<{ height: number; width: number }>({
    height: 0,
    width: 0
  })
  const [windowScroll, setWindowScroll] = useState<number>(0)

  const childrenRef = useRef<null | HTMLElement>(null)

  const updateInfo = useCallback(() => {
    setWindowSizes({ height: window.innerHeight, width: window.innerWidth })
    setWindowScroll(window.screenY)
  }, [])

  const top = useMemo(() => {
    console.log(windowScroll, windowSizes)

    return 0
  }, [windowScroll, windowSizes])
  const left = useMemo(() => {
    console.log(windowSizes)

    return 0
  }, [windowSizes])

  useEffect(() => {
    window.addEventListener('resize', updateInfo)
    window.addEventListener('scroll', updateInfo)

    return () => {
      window.removeEventListener('resize', updateInfo)
      window.removeEventListener('scroll', updateInfo)
    }
  }, [updateInfo])

  return (
    <S.FixedWrapper ref={childrenRef} $isVisible={isVisible} $top={top} $left={left}>
      {children}
    </S.FixedWrapper>
  )
}
