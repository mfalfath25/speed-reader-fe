import React from 'react'

export const History = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
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
            <tr>
              <th>1</th>
              <td>Normal</td>
              <td>B1, 1</td>
              <td>540</td>
              <td>300</td>
              <td>50%</td>
              <td>12/16/2020</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Blind</td>
              <td>C1, 1</td>
              <td>700</td>
              <td>260</td>
              <td>75%</td>
              <td>12/16/2022</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Custom</td>
              <td>-</td>
              <td>405</td>
              <td>400</td>
              <td>-</td>
              <td>12/20/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
