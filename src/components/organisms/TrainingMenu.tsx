import React, { useEffect } from 'react'
import { BiCog } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../hooks'
import { trainingMenu } from '../../static/staticData'
import { useSettingStore } from '../../stores'
import { Button } from '../atoms'

export const TrainingMenu = () => {
  const navigate = useNavigate()
  const fetcher = fetchUserData()
  const { setSettingData } = useSettingStore()

  useEffect(() => {
    if (fetcher.data) {
      setSettingData({
        ...setSettingData,
        isFontSerif: fetcher.data.data.data.setting.isFontSerif,
        fixationCount: fetcher.data.data.data.setting.fixationCount,
        fontColor: fetcher.data.data.data.setting.fontColor,
      })
    }
  }, [fetcher.data])
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-8">
        <div>
          <p className="mb-4 flex items-center justify-center text-xl sm:text-2xl">
            Pilih mode latihan
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {trainingMenu.map((menu, index) => (
              <div key={index} className="h-full w-auto">
                <div className="card-body h-full w-full rounded-lg bg-base-300 p-4 shadow-xl outline outline-2 xl:p-8">
                  <h2 className="card-title text-base sm:text-xl">
                    {menu.description}
                  </h2>
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
          <div className="h-fits w-auto">
            <p className="mb-4 flex items-center justify-center text-xl sm:text-2xl">
              Ubah tampilan simulasi
            </p>
            <div className="mt-2 flex justify-center sm:mx-auto sm:w-[200px]">
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
