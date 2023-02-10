import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export const LoaderBar = () => {
  const location = useLocation()
  const loader = useRef<any>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    loader.current?.complete()
  }, [location])
  return (
    <>
      <LoadingBar
        color="#057AFF"
        ref={loader}
        shadow={true}
        height={4}
        loaderSpeed={100}
        waitingTime={100}
      />
    </>
  )
}
