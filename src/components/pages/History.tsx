import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import moment from 'moment'
import { useUserStore } from '../../stores'
import { fetchUserData } from '../../hooks'
import { getFormattedReadTime } from '../../logic'
import { History as IHistory } from '../../types/model'

export const History = () => {
  const fetcher = fetchUserData()
  const { userData } = useUserStore()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [paginatedData, setPaginatedData] = useState<IHistory[]>([])

  const handlePagination = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    setPaginatedData(_.chunk(userData.trainings, 15)[currentPage - 1])
    return () => {
      setPaginatedData([])
    }
  }, [currentPage])

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
              {fetcher.isLoading === true ? (
                <tr>
                  <td colSpan={8} className="text-center">
                    <progress className="progress w-10"></progress>
                  </td>
                </tr>
              ) : userData.trainings.length !== 0 &&
                fetcher.isError !== true ? (
                paginatedData?.map((data, index) => (
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

        {userData.trainings.length !== 0 && fetcher.isLoading === false && (
          <div className="mb-20 flex items-center justify-center">
            <div className="btn-group">
              <button
                className="btn"
                onClick={() => handlePagination(currentPage - 1)}
                disabled={currentPage === 1}
              >
                «
              </button>
              <button className="btn">{currentPage}</button>
              <button
                className="btn"
                onClick={() => handlePagination(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(userData.trainings.length / 15)
                }
              >
                »
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
