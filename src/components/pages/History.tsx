import React, { useState } from 'react'
import _ from 'lodash'
import moment from 'moment'
import { BiError, BiLoader } from 'react-icons/bi'
import { useFetchUser } from '../../hooks'
import { getFormattedReadTime } from '../../logic'

export const History = () => {
  const { userData, isLoading, isError } = useFetchUser()
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handlePagination = (page: number) => {
    setCurrentPage(page)
  }

  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <BiLoader size={32} className="bg- mb-2 animate-spin text-primary" />
        <div className="stat-value animate-pulse text-2xl text-primary">
          Loading
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <BiError size={32} className="mb-2 text-red-500" />
        <div className="stat-value text-2xl text-red-500">Fetch error</div>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-1 flex-col justify-between gap-5">
        <div className="overflow-x-auto">
          <table className="table-zebra table-compact mb-auto table w-full">
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
              {userData.trainings.length !== 0 ? (
                _.chunk(userData.trainings, 15)[currentPage - 1].map(
                  (data, index) => (
                    <tr key={index}>
                      <th>{index + 1 + (currentPage - 1) * 15}</th>
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
                  )
                )
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

        {userData.trainings.length !== 0 ? (
          <>
            <div className="mb-20 flex items-center justify-center">
              <div className="btn-group">
                <button
                  className="btn pb-1 text-2xl outline-double"
                  onClick={() => handlePagination(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  «
                </button>
                <button className="btn no-animation w-20 outline-double">
                  {currentPage}
                </button>
                <button
                  className="btn pb-1 text-2xl outline-double"
                  onClick={() => handlePagination(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(userData.trainings.length / 15)
                  }
                >
                  »
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}
