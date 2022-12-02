import React from 'react'
import { useSettingStore } from '../../../context/SettingStore'

export const renderFixationLine = (count: number) => {
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

export const FixationSelect = () => {
  const { fixationCount, updateFixationCount } = useSettingStore()

  return (
    <>
      <div className="btn-group">
        <input
          type="radio"
          name="options"
          data-title="0"
          className="btn"
          checked={fixationCount === 0}
          value={0}
          onChange={(e) => updateFixationCount(parseInt(e.target.value))}
        />
        <br></br>
        <input
          type="radio"
          name="options"
          data-title="1"
          className="btn"
          checked={fixationCount === 1}
          value={1}
          onChange={(e) => updateFixationCount(parseInt(e.target.value))}
        />
        <input
          type="radio"
          name="options"
          data-title="2"
          className="btn"
          checked={fixationCount === 2}
          value={2}
          onChange={(e) => updateFixationCount(parseInt(e.target.value))}
        />
        <input
          type="radio"
          name="options"
          data-title="3"
          className="btn"
          checked={fixationCount === 3}
          value={3}
          onChange={(e) => updateFixationCount(parseInt(e.target.value))}
        />
      </div>
    </>
  )
}
