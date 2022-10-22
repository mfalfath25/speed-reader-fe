import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export const Loader = () => {
  const location = useLocation()
  const ref = useRef<any>(null)

  useEffect(() => {
    ref.current?.complete()
  }, [location])
  return (
    <>
      <LoadingBar color="#7126B5" ref={ref} shadow={true} />
    </>
  )
}
