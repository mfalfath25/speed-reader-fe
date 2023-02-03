import React, { useEffect } from "react"
import moment from "moment"
import { useNavigate } from "react-router-dom"
import { useTrainingStore } from "../../../stores/TrainingStore"
import { Button, ToastAlert } from "../../atoms"
import { getFormattedReadTime } from "../../../logic"
import { useSubmitTrainingMutation } from "../../../api/mutation"
import { AxiosError } from "axios"

export const Results = () => {
  const navigate = useNavigate()
  const { clearTrainingData } = useTrainingStore()
  const { trainingData, setTrainingData } = useTrainingStore()

  const handleRestart = () => {
    setTrainingData(trainingData[trainingData.length - 1].trainingId, {
      ...trainingData[trainingData.length - 1],
      isSaved: false,
    })

    switch (trainingData[trainingData.length - 1].mode) {
      case "Normal":
        navigate("/training/normal/simulate")
        break
      case "Blind":
        navigate("/training/blind/simulate")
        break
      case "Custom":
        navigate("/training/custom/simulate")
        break
    }
  }

  const handleHome = () => {
    clearTrainingData()
    navigate("/")
  }

  const { mutate } = useSubmitTrainingMutation()

  useEffect(() => {
    if (trainingData[trainingData.length - 1].isSaved === false) {
      setTimeout(() => {
        mutate(trainingData[trainingData.length - 1], {
          onSuccess: (res) => {
            ToastAlert(res.data.message, "success")

            setTrainingData(trainingData[trainingData.length - 1].trainingId, {
              ...trainingData[trainingData.length - 1],
              isSaved: true,
            })
          },
          onError: (err) => {
            if (err instanceof AxiosError) {
              if (!err?.response) {
                ToastAlert(err?.message, "error")
              } else {
                ToastAlert("Data tidak tersimpan", "error")
              }
            }
          },
        })
      }, 500)
    }
  }, [])

  const renderStats = () => {
    if (trainingData.length === 0) return null
    else {
      switch (trainingData[trainingData.length - 1].mode) {
        case "Normal":
          return (
            <>
              <div className="flex flex-row">
                <div className="stat">
                  <div className="stat-title text-center text-xl font-bold text-black">
                    Word Count
                  </div>
                  <div className="stat-value mx-auto text-primary">
                    {trainingData[trainingData.length - 1].text.textWordCount} words
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-title text-center text-xl font-bold text-black">
                    Accuracy
                  </div>
                  <div className="stat-value mx-auto text-primary">
                    {trainingData[trainingData.length - 1].accuracy} %
                  </div>
                </div>
              </div>
            </>
          )
        case "Blind":
          return (
            <>
              <div className="flex flex-row">
                <div className="stat">
                  <div className="stat-title text-center text-xl font-bold text-black">
                    Word Count
                  </div>
                  <div className="stat-value mx-auto text-primary">
                    {trainingData[trainingData.length - 1].text.textWordCount} words
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-title text-center text-xl font-bold text-black">
                    Accuracy
                  </div>
                  <div className="stat-value mx-auto text-primary">
                    {trainingData[trainingData.length - 1].accuracy} %
                  </div>
                </div>
              </div>
            </>
          )
        case "Custom":
          return (
            <>
              <div className="stat">
                <div className="stat-title text-center text-xl font-bold text-black">
                  Word Count
                </div>
                <div className="stat-value mx-auto text-primary">
                  {trainingData[trainingData.length - 1].text.textWordCount} words
                </div>
              </div>
            </>
          )
      }
    }
  }

  return (
    <>
      <div className="grid auto-rows-auto grid-cols-1 gap-10">
        <div className="mx-auto flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-xl">Mode</p>
            <p className="text-2xl font-bold">
              {trainingData.length !== 0 ? trainingData[trainingData.length - 1].mode : "undefined"}
            </p>
          </div>
          <div className="stats stats-vertical bg-slate-100 shadow">
            <div className="stat min-w-[340px] sm:w-full">
              <div className="stat-title text-center text-xl font-bold text-black">
                Reading Speed
              </div>
              <div className="stat-value mx-auto text-primary">
                {trainingData.length !== 0
                  ? trainingData[trainingData.length - 1].wpm + " WPM"
                  : "undefined"}
              </div>
            </div>
            {renderStats()}
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <p className="text-xl">Date taken</p>
              <p className="text-2xl font-bold">
                {trainingData.length !== 0
                  ? moment(trainingData[trainingData.length - 1].readDate).format("l")
                  : "undefined"}
              </p>
            </div>
            <div>
              <p className="text-right text-xl">Reading Time</p>
              <p className="text-right text-2xl font-bold">
                {trainingData.length !== 0
                  ? getFormattedReadTime(trainingData[trainingData.length - 1].readTime)
                  : "undefined"}
              </p>
            </div>
          </div>

          <Button text="Home" weight="primary" onClick={handleHome} />
          {trainingData.length !== 0 ? (
            <Button text="Restart" outline onClick={handleRestart} />
          ) : null}
        </div>
      </div>
    </>
  )
}
