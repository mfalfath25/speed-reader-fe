import React from 'react'
import { SettingStoreProps } from '../../../stores/SettingStore'

export const renderFixationLine = (count: number) => {
  const fixationClassProps = `overlay-helper min-h-[250px]`

  switch (count) {
    case 0:
      return null
    case 1:
      return (
        <>
          <span className={`${fixationClassProps} left-1/2 `}></span>
        </>
      )
    case 2:
      return (
        <>
          <span className={`${fixationClassProps} left-1/3`}></span>
          <span className={`${fixationClassProps} left-2/3`}></span>
        </>
      )
    case 3:
      return (
        <>
          <span className={`${fixationClassProps} left-1/4`}></span>
          <span className={`${fixationClassProps} left-2/4`}></span>
          <span className={`${fixationClassProps} left-3/4`}></span>
        </>
      )
    default:
      return null
  }
}

interface FixationSelectProps
  extends Pick<SettingStoreProps, 'settingData' | 'setSettingData'> {}

export const FixationSelect = ({
  settingData,
  setSettingData,
}: FixationSelectProps) => {
  const options = [
    { title: '0', value: 0 },
    { title: '1', value: 1 },
    { title: '2', value: 2 },
    { title: '3', value: 3 },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettingData({
      ...settingData,
      fixationCount: parseInt(e.target.value),
    })
  }

  return (
    <>
      <div className="join">
        {options.map((option) => (
          <input
            key={option.title}
            type="radio"
            name="options"
            className="join-item no-animation btn"
            data-title={option.title}
            value={option.value}
            checked={settingData.fixationCount === option.value}
            onChange={handleChange}
          />
        ))}
      </div>
    </>
  )
}
