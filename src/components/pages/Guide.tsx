import React from 'react'
import { BiBookOpen, BiRightArrowAlt } from 'react-icons/bi'
import { guidesMenu } from '../../static/staticData'

export const Guide = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="mx-auto text-lg sm:text-2xl">
          Konsep dalam membaca cepat
          <BiBookOpen size={24} className="ml-2 inline" />
        </h2>

        {guidesMenu.map((menu, index) => (
          <div key={index} className="collapse-arrow collapse bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-bold">
              {menu.optionName}
            </div>
            <div className="collapse-content truncate whitespace-normal">
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
