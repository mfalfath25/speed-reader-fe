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
      <div className="w-full xl:w-[800px] 2xl:w-2/3 mx-auto space-y-0">
        <Timer
          readTime={timer}
          setReadTime={setTimer}
          wpm={blindWpm}
          setWpm={setBlindWpm}
          totalChunk={data[data.length - 1]?.text.textWordCount}
          // totalChunk={getTotalChunks(removeExtraWhitespaces(data[data.length - 1]?.text.textValue))}
        >
          <div>
            <div className="w-full max-h-[500px] overflow-y-auto relative outline outline-offset-0 outline-1 p-0 rounded-md bg-slate-100">
              <pre
                className="relative whitespace-pre-line text-left text-base sm:text-xl font-normal p-2"
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
