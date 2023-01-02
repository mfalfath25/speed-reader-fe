import React, { useState } from 'react'
import { BiBookOpen, BiRightArrowAlt } from 'react-icons/bi'
import { guidesMenu } from '../../static/staticData'

export const Guide = () => {
  const [currentOpen, setCurrentOpen] = useState('')

  const handleOpen = (id: string) => {
    if (currentOpen === id) {
      setCurrentOpen('')
    } else {
      setCurrentOpen(id)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="mx-auto text-lg sm:text-2xl">
          Konsep dan unsur dalam membaca cepat
          <BiBookOpen size={24} className="inline ml-2" />
        </h2>
        {guidesMenu.map((menu, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-slate-100 rounded-box"
          >
            <input
              type="checkbox"
              onClick={() => handleOpen(menu.id)}
              checked={currentOpen === menu.id}
            />
            <div className="collapse-title text-lg sm:text-xl font-bold">{menu.optionName}</div>
            <div className="collapse-content">
              <p className="font-bold text-sm sm:text-lg">{menu.definition1}</p>
              <p className="text-sm sm:text-lg">
                <BiRightArrowAlt size={24} className="inline pb-1" />
                {menu.description1}
              </p>
              {menu.definition2 && (
                <>
                  <br />
                  <p className="font-bold text-sm sm:text-lg">{menu.definition2}</p>
                  <p className="text-sm sm:text-lg">
                    <BiRightArrowAlt size={24} className="inline pb-1" />
                    {menu.description2}
                  </p>
                </>
              )}
              <br />
              <p className="font-bold text-sm sm:text-lg">Tips / Info:</p>
              <ul>
                {menu.tips.map(
                  (item, index) =>
                    item.tip && (
                      <li key={index} className="list-disc ml-6">
                        <p className="text-sm sm:text-lg">{item.tip}</p>
                      </li>
                    )
                )}
              </ul>
              <br />
              <img src={menu.image} className="w-[400px]"></img>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
