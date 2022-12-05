import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../atoms'
import { BiBookReader } from 'react-icons/bi'
import { homeMenu } from '../../static/staticData'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <p className="flex justify-center items-center text-xl sm:text-2xl pt-2 mb-4 sm:mb-20">
        Welcome, {'name'}
      </p>
      <div className="grid grid-cols-1 space-y-2 sm:space-y-20">
        <div className="card-body w-full bg-base-300 outline outline-2 outline-blue-400 rounded-lg p-4 lg:p-8">
          <h1 className="card-title mx-auto text-lg md:text-2xl mb-2">
            Mulai berlatih latihan membaca cepat
          </h1>
          <div className="card-actions justify-end">
            <Button
              text="Training"
              width="full"
              weight="primary"
              onClick={() => navigate('/training')}
            >
              <BiBookReader size={24} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
            {homeMenu.map((menu, index) => (
              <div key={index} className="m-0 w-full">
                <div className="card-body bg-base-300 outline outline-2 rounded-lg p-4 lg:p-8">
                  <h1 className="card-title mx-auto text-lg md:text-2xl mb-2">
                    {menu.description}
                  </h1>
                  <div className="card-actions">
                    {menu.optionName === 'Logout' ? (
                      <Button
                        text="Logout"
                        width="full"
                        status="error"
                        // className="btn btn-error"
                        onClick={() => navigate(menu.navitgateTo)}
                      >
                        {menu.buttonIcon}
                      </Button>
                    ) : (
                      <Button
                        text={menu.optionName}
                        width="full"
                        onClick={() => navigate(menu.navitgateTo)}
                      >
                        {menu.buttonIcon}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
