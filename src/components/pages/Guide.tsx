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
          Konsep dalam membaca cepat
          <BiBookOpen size={24} className="ml-2 inline" />
        </h2>
        {guidesMenu.map((menu, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse-arrow rounded-box collapse border border-base-300 bg-slate-100"
          >
            <input
              type="checkbox"
              id={menu.id}
              name={menu.id}
              checked={currentOpen === menu.id}
              onChange={() => handleOpen(menu.id)}
            />
            <div className="collapse-title text-lg font-bold sm:text-xl">
              {menu.optionName}
            </div>
            <div className="collapse-content">
              <p className="text-sm font-bold sm:text-lg">{menu.definition1}</p>
              <p className="text-sm sm:text-lg">
                <BiRightArrowAlt size={24} className="inline pb-1" />
                {menu.description1}
              </p>
              {menu.definition2 && (
                <>
                  <br />
                  <p className="text-sm font-bold sm:text-lg">
                    {menu.definition2}
                  </p>
                  <p className="text-sm sm:text-lg">
                    <BiRightArrowAlt size={24} className="inline pb-1" />
                    {menu.description2}
                  </p>
                </>
              )}
              <br />
              <p className="text-sm font-bold sm:text-lg">Tips / Info:</p>
              <ul>
                {menu.tips.map(
                  (item, index) =>
                    item.tip && (
                      <li key={index} className="ml-6 list-disc">
                        <p className="text-sm sm:text-lg">{item.tip}</p>
                      </li>
                    )
                )}
              </ul>
              <br />
              <img
                src={menu.image}
                className="w-[400px]"
                alt={menu.optionName}
              ></img>
              <br />
              <p className="text-sm font-bold sm:text-lg">Referensi:</p>
              <ul>
                {menu.referensi.map((item, index) => (
                  <li key={index} className="ml-6 list-disc">
                    <a href={item} className="hover:text-blue-400">
                      <p className="truncate text-sm sm:text-lg">{item}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
