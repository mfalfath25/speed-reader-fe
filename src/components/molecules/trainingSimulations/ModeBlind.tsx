import React from 'react'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { useSettingStore } from '../../../stores/SettingStore'
import { renderFixationLine } from '../../molecules'
import { BlindWpmCounter } from './BlindWpmCounter'

export const ModeBlind = () => {
  const { settingData } = useSettingStore()
  const data = useTrainingStore((state) => state.trainingData)

  return (
    <>
      <div className="mx-auto w-full space-y-0 xl:w-[800px] 2xl:w-2/3">
        <BlindWpmCounter>
          <div>
            <div className="relative max-h-[500px] w-full overflow-y-auto rounded-md bg-slate-100 p-0 outline outline-1 outline-offset-0">
              <pre
                className="relative whitespace-pre-line p-2 text-left text-base font-normal sm:text-xl"
                style={{
                  fontFamily: settingData.isFontSerif ? 'serif' : 'sans-serif',
                }}
              >
                {renderFixationLine(settingData.fixationCount)}
                {data.length !== 0
                  ? data[data.length - 1]?.text.textValue
                  : 'Your custom text will be shown here'}
              </pre>
            </div>
          </div>
        </BlindWpmCounter>
      </div>
    </>
  )
}
