import React, { useEffect } from 'react'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { useSettingStore } from '../../../stores/SettingStore'
import { renderFixationLine } from '../../molecules'
import { BlindWpmCounter } from './BlindWpmCounter'
import { useNavigate } from 'react-router-dom'

export const ModeBlind = () => {
  const navigate = useNavigate()
  const { settingData } = useSettingStore()
  const trainingData = useTrainingStore(
    (state) => state.trainingData[state.trainingData.length - 1]
  )

  useEffect(() => {
    if (trainingData === undefined) return navigate('/training/blind')
  }, [])

  return (
    <>
      <div className="mx-auto w-full space-y-0 xl:w-[800px] 2xl:w-2/3">
        {trainingData !== undefined ? (
          <BlindWpmCounter>
            <div>
              <div className="relative max-h-[500px] w-full overflow-y-auto rounded-md bg-slate-100 p-0 outline outline-1 outline-offset-0">
                <pre
                  className="relative whitespace-pre-line p-2 text-left text-base font-normal text-black sm:text-xl"
                  style={{
                    lineHeight: '1.5',
                    fontFamily: settingData.isFontSerif
                      ? 'Literata' || 'serif'
                      : 'Inter' || 'sans-serif',
                  }}
                >
                  {renderFixationLine(settingData.fixationCount)}
                  {trainingData !== undefined
                    ? trainingData.text.textValue
                    : 'Your custom text will be shown here'}
                </pre>
              </div>
            </div>
          </BlindWpmCounter>
        ) : null}
      </div>
    </>
  )
}
