import React from 'react'
import { ColorPreset } from '../../../static/staticData'
import { useSettingStore } from '../../../stores'

export const ColorPick = () => {
  const { settingData, setSettingData } = useSettingStore()

  return (
    <>
      <div className="flex flex-row gap-1">
        {ColorPreset.map((color) => (
          <div key={color.id}>
            <button
              className="btn-circle btn border-none"
              style={{ backgroundColor: color?.hex }}
              onClick={() =>
                setSettingData({
                  ...settingData,
                  fontColor: color?.hex,
                })
              }
            >
              <p className="text-white">{color.name}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
