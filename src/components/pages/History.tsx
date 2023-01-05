import React from 'react'
import moment from 'moment'
import { useUserStore } from '../../stores'
import { fetchUserData } from '../../hooks'

export const History = () => {
  const fetcher = fetchUserData()
  const { userData } = useUserStore()

  const renderTrainings = () => {
    if (userData.trainings?.length !== 0 && fetcher.isFetched) {
      return userData.trainings?.map((data, index) => (
        <tr key={index}>
          <th>{index + 1}</th>
          <td>{data.mode}</td>
          <td>
            {data?.text.textLevel} - {data.text.textChoice}
          </td>
          <td>{data?.text.textWordCount?.toString()}</td>
          <td>{data.wpm?.toString()}</td>
          <td>{data.accuracy?.toString()}</td>
          <td>{data.readTime?.toString()}</td>
          <td>{moment(data.readDate).format('DD MMMM YYYY')}</td>
        </tr>
      ))
    } else if (userData.trainings?.length === 0 && fetcher.isFetched) {
      return (
        <tr>
          <td colSpan={7} className="text-center">
            Data latihan kosong
          </td>
        </tr>
      )
    }
  }

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
              <th>Waktu baca</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>{renderTrainings()}</tbody>
        </table>
      </div>
    </>
  )
}
