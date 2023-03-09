import React from 'react'
import { SettingStoreProps } from '../../../stores/SettingStore'

interface ColorPreset {
  id: number
  name: string
  hex: string
}

interface ColorPickerProps
  extends Pick<SettingStoreProps, 'settingData' | 'setSettingData'> {}

export const ColorPicker = ({
  settingData,
  setSettingData,
}: ColorPickerProps) => {
  const colorPresets: ColorPreset[] = [
    {
      id: 1,
      name: 'Black',
      hex: '#000000',
    },
    {
      id: 2,
      name: 'Red',
      hex: '#EF3E35',
    },
    {
      id: 3,
      name: 'Green',
      hex: '#55B949',
    },
    {
      id: 4,
      name: 'Blue',
      hex: '#057AFF',
    },
  ]

  const handleClick = (color: ColorPreset) => {
    setSettingData({
      ...settingData,
      fontColor: color.hex,
    })
  }

  return (
    <>
      <div className="flex flex-row gap-1">
        {colorPresets.map((color) => (
          <div key={color.id}>
            <button
              className="btn no-animation btn-circle border-none"
              style={{ backgroundColor: color.hex }}
              onClick={() => handleClick(color)}
            >
              <p className="text-white">{color.name}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
