import moment from 'moment'
import React from 'react'
import { useTrainingStore } from '../../stores/TrainingStore'

export const History = () => {
  const { trainingData } = useTrainingStore()
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Mode</th>
              <th>Level Teks</th>
              <th>Jumlah Kata</th>
              <th>WPM</th>
              <th>Akurasi</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {trainingData.length !== 0 ? (
              trainingData.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{data.mode}</td>
                  <td>
                    {data.text.textLevel} {data.text.textChoice}
                  </td>
                  <td>{data.text.textWordCount}</td>
                  <td>{data.wpm}</td>
                  <td>{data.accuracy}%</td>
                  <td>{moment(data.readDate).format('l')}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  Data latihan kosong
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
