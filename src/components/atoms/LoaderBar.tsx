import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export const LoaderBar = () => {
  const location = useLocation()
  const ref = useRef<any>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    ref.current?.complete()
  }, [location])
  return (
    <>
      <LoadingBar color="#057AFF" ref={ref} shadow={true} height={4} />
    </>
  )
}
