import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiBookReader } from 'react-icons/bi'
import { homeMenu } from '../../static/staticData'
import { Button, ToastAlert } from '../atoms'
import { useClearStore } from '../../hooks'
import { useUserStore } from '../../stores'

export const Home = () => {
  const navigate = useNavigate()
  const { userData } = useUserStore()
  const { clearStores } = useClearStore()

  const handleLogout = () => {
    setTimeout(() => {
      ToastAlert('Logout berhasil', 'success')
      clearStores()
      navigate('/login', { replace: true })
    }, 500)
  }

  return (
    <>
      <dialog id="logout_modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-center text-lg font-bold">Confirm logout?</h3>
          <div className="modal-action justify-center ">
            <button
              onClick={handleLogout}
              className="btn btn-primary no-animation w-1/2 text-lg normal-case active:opacity-70"
            >
              Yes
            </button>
            <button className="btn btn-neutral no-animation w-1/2 text-lg normal-case active:opacity-70">
              Cancel
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* <input type="checkbox" id="logout_modal" className="modal-toggle" />
      <label htmlFor="logout-modal" className="modal cursor-pointer">
        <label
          className="modal-box relative grid auto-rows-auto grid-cols-1 gap-4"
          htmlFor=""
        >
          <h3 className="mx-auto text-xl font-bold">Confirm Logout</h3>
          <div className="grid grid-cols-2 gap-4">
            <label
              htmlFor="logout-modal"
              className="btn btn-primary no-animation w-full text-lg normal-case active:text-white active:opacity-70"
              onClick={handleLogout}
            >
              Yes
            </label>
            <label
              htmlFor="logout-modal"
              className="btn btn-neutral no-animation w-full text-lg normal-case active:text-white active:opacity-70"
            >
              Cancel
            </label>
          </div>
        </label>
      </label> */}

      <p className="mb-4 flex items-center justify-center text-xl sm:mb-10 sm:text-2xl">
        Selamat datang, {userData.username}
      </p>

      <div className="grid grid-cols-1 space-y-2 sm:space-y-20">
        <div className="card-body w-full rounded-lg bg-base-300 p-2 outline outline-2 sm:p-4 lg:p-8">
          <h1 className="card-title mx-auto mb-2 text-lg md:text-xl">
            Mulai berlatih latihan membaca cepat
          </h1>
          <div className="card-actions justify-end">
            <Button
              text="Training"
              width="full"
              style="primary"
              onClick={() => navigate('/training')}
            >
              <BiBookReader size={24} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 space-y-10">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
            {homeMenu.map((menu, index) => (
              <div key={index} className="m-0 w-full">
                <div className="card-body rounded-lg bg-base-300 p-2 outline outline-2 sm:p-4 xl:p-8">
                  <h1 className="card-title mx-auto mb-2 text-lg md:text-xl">
                    {menu.description}
                  </h1>
                  <div className="card-actions">
                    {menu.optionName === 'Logout' ? (
                      <button
                        className="btn btn-error no-animation w-full text-lg normal-case hover:contrast-125 active:text-white active:opacity-70"
                        onClick={() => {
                          if (document) {
                            ;(
                              document.getElementById(
                                'logout_modal'
                              ) as HTMLFormElement
                            ).showModal()
                          }
                        }}
                      >
                        {menu.optionName}
                        {menu.buttonIcon}
                      </button>
                    ) : (
                      // <label
                      //   htmlFor="logout-modal"
                      //   className="btn btn-error no-animation w-full text-lg normal-case hover:contrast-125 active:text-white active:opacity-70"
                      // >
                      //   {menu.optionName}
                      //   {menu.buttonIcon}
                      // </label>
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
