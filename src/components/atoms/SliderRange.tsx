import React, { useState } from 'react'
import createFastContext from '../../context/createFastContext'

const { useStore } = createFastContext({
  fixationCount: 0,
})

export const SliderRange = ({ value }: { value: 'fixationCount' }) => {
  const [storeValue, setStore] = useStore((store) => store['fixationCount'])

  const renderFixationLine = (count: number) => {
    switch (count) {
      case 0:
        return
      case 1:
        return (
          <>
            <span className="overlay-helper left-1/2 -z-1"></span>
          </>
        )
      case 2:
        return (
          <>
            <span className="overlay-helper left-1/3 -z-1"></span>
            <span className="overlay-helper left-2/3 -z-1"></span>
          </>
        )
      case 3:
        return (
          <>
            <span className="overlay-helper left-1/4 -z-1"></span>
            <span className="overlay-helper left-2/4 -z-1"></span>
            <span className="overlay-helper left-3/4 -z-1"></span>
          </>
        )
    }
  }

  return (
    <>
      <div>
        <input
          type="range"
          className="range range-xs"
          step={1}
          min={0}
          max={3}
          value={storeValue}
          onChange={(e) =>
            setStore({
              fixationCount: Number(e.target.value),
            })
          }
          // onChange={(e) => {
          //   setFixationCount(parseInt(e.target.value))
          // }}
        />
      </div>
      <div className="w-full flex justify-between text-xs px-2">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </>
  )
}
