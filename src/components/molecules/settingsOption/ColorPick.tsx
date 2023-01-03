import React from 'react'
import { useSettingStore } from '../../../stores/SettingStore'
import { ColorPreset } from '../../../static/staticData'

export const ColorPick = () => {
  const { updateFontColor } = useSettingStore()

  return (
    <>
      <div className="flex flex-row gap-1">
        {ColorPreset.map((color) => (
          <div key={color.id}>
            <button
              className="btn btn-circle border-none"
              style={{ backgroundColor: color?.hex }}
              onClick={() => updateFontColor(color?.hex)}
            >
              {color.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
