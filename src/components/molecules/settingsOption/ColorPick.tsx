import React from 'react'
import { useSettingStore } from '../../../stores/SettingStore'
import { ColorPreset } from '../../../static/staticData'

export const ColorPick = () => {
  const { settingData, setSettingData } = useSettingStore()

  return (
    <>
      <div className="flex flex-row gap-1">
        {ColorPreset.map((color) => (
          <div key={color.id}>
            <button
              className="btn btn-circle border-none"
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
