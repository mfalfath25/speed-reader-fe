import React from 'react'
import { useSettingStore } from '../../../stores'

export const renderFixationLine = (count: number) => {
  switch (count) {
    case 0:
      return
    case 1:
      return (
        <>
          <span
            className={`overlay-helper left-1/2 min-h-[500px] ${
              window.innerHeight < 768 ? 'min-h-[375px]' : 'min-h-[500px]'
            }`}
          ></span>
        </>
      )
    case 2:
      return (
        <>
          <span
            className={`overlay-helper left-1/3 min-h-[500px] ${
              window.innerHeight < 768 ? 'min-h-[375px]' : 'min-h-[500px]'
            }`}
          ></span>
          <span
            className={`overlay-helper left-2/3 min-h-[500px] ${
              window.innerHeight < 768 ? 'min-h-[375px]' : 'min-h-[500px]'
            }`}
          ></span>
        </>
      )
    case 3:
      return (
        <>
          <span
            className={`overlay-helper left-1/4 min-h-[500px] ${
              window.innerHeight < 768 ? 'min-h-[375px]' : 'min-h-[500px]'
            }`}
          ></span>
          <span
            className={`overlay-helper left-2/4 min-h-[500px] ${
              window.innerHeight < 768 ? 'min-h-[375px]' : 'min-h-[500px]'
            }`}
          ></span>
          <span
            className={`overlay-helper left-3/4 min-h-[500px] ${
              window.innerHeight < 768 ? 'min-h-[375px]' : 'min-h-[500px]'
            }`}
          ></span>
        </>
      )
  }
}

export const FixationSelect = () => {
  const { settingData, setSettingData } = useSettingStore()

  return (
    <>
      <div className="btn-group">
        <input
          type="radio"
          name="options"
          data-title="0"
          className="btn"
          checked={settingData.fixationCount === 0}
          value={0}
          onChange={(e) =>
            setSettingData({
              ...settingData,
              fixationCount: parseInt(e.target.value),
            })
          }
        />
        <br></br>
        <input
          type="radio"
          name="options"
          data-title="1"
          className="btn"
          checked={settingData.fixationCount === 1}
          value={1}
          onChange={(e) =>
            setSettingData({
              ...settingData,
              fixationCount: parseInt(e.target.value),
            })
          }
        />
        <input
          type="radio"
          name="options"
          data-title="2"
          className="btn"
          checked={settingData.fixationCount === 2}
          value={2}
          onChange={(e) =>
            setSettingData({
              ...settingData,
              fixationCount: parseInt(e.target.value),
            })
          }
        />
        <input
          type="radio"
          name="options"
          data-title="3"
          className="btn"
          checked={settingData.fixationCount === 3}
          value={3}
          onChange={(e) =>
            setSettingData({
              ...settingData,
              fixationCount: parseInt(e.target.value),
            })
          }
        />
      </div>
    </>
  )
}
