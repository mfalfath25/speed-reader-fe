import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export const Loader = () => {
  const location = useLocation()
  const ref = useRef<any>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    ref.current?.complete()
    // console.log(location)
  }, [location])
  return (
    <>
      {/* <LoadingBar color="#f11946" ref={ref} shadow={true} height={3} /> */}
      <LoadingBar color="#057AFF" ref={ref} shadow={true} height={4} />
    </>
  )
}
