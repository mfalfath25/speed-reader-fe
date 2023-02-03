import React from 'react'
import moment from 'moment'
import { useUserStore } from '../../stores'
import { fetchUserData } from '../../hooks'
import { getFormattedReadTime } from '../../logic'

export const History = () => {
  const fetcher = fetchUserData()
  const { userData } = useUserStore()

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-zebra table-compact table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Mode</th>
              <th>Level Teks</th>
              <th>Jumlah Kata</th>
              <th>WPM</th>
              <th>Akurasi</th>
              <th>Waktu baca</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {fetcher.isLoading === true ? (
              <tr>
                <td colSpan={8} className="text-center">
                  <progress className="progress w-10"></progress>
                </td>
              </tr>
            ) : userData.trainings.length !== 0 && fetcher.isError !== true ? (
              userData.trainings?.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{data.mode}</td>
                  <td>
                    {data?.text.textLevel} - {data.text.textChoice}
                  </td>
                  <td>{data?.text.textWordCount}</td>
                  <td>{data.wpm}</td>
                  <td>{data.accuracy} %</td>
                  <td>{getFormattedReadTime(data.readTime)}</td>
                  <td>{moment(data.readDate).format('DD MMMM YYYY')}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center">
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
