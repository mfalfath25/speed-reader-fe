import React, { useState } from 'react'
import { useAnimationStore } from '../../context/AnimationStore'
import { useSettingStore } from '../../context/SettingStore'
import { startTextAnimation } from '../../logic'
import { FixationSelect, renderFixationLine } from '../atoms'

export const CustomTraining = () => {
  const [fontStyleSerif, setFontStyleSerif] = useState<boolean>(true)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [textAnimated, setTextAnimated] = useState<string | null>(null)
  const { animationStatus, rawText, animatedText, toggleAnimationStatus, updateAnimatedText } =
    useAnimationStore()

  const data = useAnimationStore((state) => state.rawText)
  const fixationCounter = useSettingStore((state) => state.fixationCount)

  const startSimulation = () => {
    const textValue = data[data.length - 1].textValue
    const chunkValue = data[data.length - 1].chunkValue
    const wordsPerMinute = data[data.length - 1].wordsPerMinute
    startTextAnimation(
      textValue,
      wordsPerMinute || 250,
      chunkValue || 3,
      setTextAnimated,
      setIsDisabled
    )
  }

  return (
    <>
      <button className="toggle-status btn btn-primary" onClick={() => toggleAnimationStatus()}>
        Change status
      </button>
      <div className="w-full xl:w-[800px] 2xl:w-2/3 mx-auto space-y-4">
        <div>
          <label className="label py-0">
            <span className="label-text">Custom text input</span>
          </label>
          <div className="w-full min-h-[400px] relative outline outline-offset-0 outline-1 p-0 rounded-md ">
            {renderFixationLine(fixationCounter)}
            <pre
              className="relative whitespace-pre-line text-left text-xl font-normal p-2"
              style={{
                fontFamily: fontStyleSerif ? 'Literata' : 'Source Sans Pro',
              }}
            >
              {/* {rawText?.length > 0
            ? rawText?.[rawText.length - 1].textValue
            : 'Your custom text will be shown here'} */}
              {data.length !== 0
                ? data[data.length - 1].textValue
                : 'Your custom text will be shown here'}
            </pre>
            <pre
              className="absolute top-0 whitespace-pre-line text-left text-xl font-normal p-2 text-black dark:text-slate-200"
              // text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-red-400
              style={{
                fontFamily: fontStyleSerif ? 'Literata' : 'Source Sans Pro',
                // color: color?.hex
              }}
            >
              {textAnimated}
            </pre>
          </div>
        </div>
        <div className="flex space-x-4 justify-end">
          <button
            id="btn-start"
            className={`btn btn-primary no-animation`}
            disabled={isDisabled}
            onClick={() => {
              startSimulation()
              setIsDisabled(true)
            }}
          >
            Start
          </button>
        </div>

        <p className="block">Font style</p>
        <div className="flex items-center space-x-2">
          <p className="inline">Sans-serif | 'Source Sans Pro'</p>
          <input
            type="checkbox"
            className="toggle toggle-sm m-0"
            onChange={() => {
              setFontStyleSerif(!fontStyleSerif)
            }}
            checked={fontStyleSerif}
          />
          <p className="inline">Serif | 'Literata'</p>
        </div>

        <p>Fixation Line Helper</p>
        <FixationSelect />
      </div>
    </>
  )
}
