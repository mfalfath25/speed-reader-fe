import React from 'react'
import { BiCog } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { trainingMenu } from '../../static/staticData'
import { Button } from '../atoms'

export const TrainingMenu = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid grid-cols-1 gap-8 w-full">
        <div>
          <p className="flex justify-center items-center sm:text-2xl text-xl mb-4">
            Pilih mode latihan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trainingMenu.map((menu, index) => (
              <div key={index} className="w-auto h-full">
                <div className="card-body w-full h-full bg-base-300 shadow-xl outline outline-2 rounded-lg p-4 xl:p-8">
                  <h2 className="card-title text-base sm:text-xl">{menu.description}</h2>
                  <p>{menu.info}</p>
                  <div className="card-actions justify-end">
                    <Button
                      text={menu.optionName}
                      width="full"
                      weight="primary"
                      onClick={() => {
                        navigate(menu.navigateTo)
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="w-auto h-fits">
            <p className="flex justify-center items-center sm:text-2xl text-xl mb-4">
              Ubah tampilan simulasi
            </p>
            <div className="flex justify-center mt-2 sm:mx-auto sm:w-[200px]">
              <Button
                text="Visual Settings"
                width="full"
                onClick={() => {
                  navigate('/training/settings')
                }}
              >
                <BiCog size={24} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
