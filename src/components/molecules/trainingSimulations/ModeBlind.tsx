import React, { useState } from 'react'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { useSettingStore } from '../../../stores/SettingStore'
import { renderFixationLine } from '../../molecules'
import { Timer } from './Timer'

export const ModeBlind = () => {
  // store states
  const { settingData } = useSettingStore()
  const data = useTrainingStore((state) => state.trainingData)
  // local states
  const [timer, setTimer] = useState<number>(0)
  const [blindWpm, setBlindWpm] = useState<number>(0)

  return (
    <>
      <div className="mx-auto w-full space-y-0 xl:w-[800px] 2xl:w-2/3">
        <Timer
          readTime={timer}
          setReadTime={setTimer}
          wpm={blindWpm}
          setWpm={setBlindWpm}
          totalChunk={data[data.length - 1]?.text.textWordCount}
          // totalChunk={getTotalChunks(removeExtraWhitespaces(data[data.length - 1]?.text.textValue))}
        >
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
        </Timer>
      </div>
    </>
  )
}
