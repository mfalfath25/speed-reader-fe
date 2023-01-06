import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ToastAlert } from '../atoms'
import { BiBookReader } from 'react-icons/bi'
import { homeMenu } from '../../static/staticData'
import { useUserStore } from '../../stores/UserStore'
import { useSettingStore } from '../../stores'

export const Home = () => {
  const navigate = useNavigate()
  const { userData, clearUserData } = useUserStore()
  const { clearSettingData } = useSettingStore()

  const handleLogout = () => {
    clearUserData()
    clearSettingData()
    ToastAlert('Logout berhasil', 'success')
    navigate('/login', { replace: true })
  }

  return (
    <>
      <input type="checkbox" id="logout-modal" className="modal-toggle" />
      <label htmlFor="logout-modal" className="modal cursor-pointer">
        <label className="modal-box relative grid grid-cols-1 auto-rows-auto gap-4" htmlFor="">
          <h3 className="text-xl font-bold mx-auto">Confirm Logout</h3>
          <div className="grid grid-cols-2 gap-4">
            <label
              htmlFor="logout-modal"
              className="btn text-lg btn-outline normal-case w-full no-animation active:text-white active:opacity-70"
              onClick={handleLogout}
            >
              Yes
            </label>
            <label
              htmlFor="logout-modal"
              className="btn text-lg normal-case w-full no-animation active:text-white active:opacity-70"
            >
              Cancel
            </label>
          </div>
        </label>
      </label>

      <p className="flex justify-center items-center text-xl sm:text-2xl pt-2 mb-4 sm:mb-10">
        Selamat datang, {userData.username}
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
                <div className="card-body bg-base-300 outline outline-2 rounded-lg p-4 xl:p-8">
                  <h1 className="card-title mx-auto text-lg md:text-2xl mb-2">
                    {menu.description}
                  </h1>
                  <div className="card-actions">
                    {menu.optionName === 'Logout' ? (
                      <label
                        htmlFor="logout-modal"
                        className="btn btn-error text-lg normal-case w-full no-animation active:text-white active:opacity-70"
                      >
                        {menu.optionName}
                        {menu.buttonIcon}
                      </label>
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
