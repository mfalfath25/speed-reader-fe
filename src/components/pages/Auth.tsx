import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../atoms'

export const Auth = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid grid-cols-auto rows-auto-rows gap-20 pt-2 mt-4 sm:mt-20">
        <div className="flex mx-auto">
          <h1 className="text-2xl font-base">
            Latih kemampuan membaca cepat secara senyap{' '}
            <span className="font-bold">(silent speed reading)</span> dengan teks Bahasa Inggris
          </h1>
        </div>
        <div className="flex flex-col mx-auto gap-4 w-full sm:w-[300px]">
          <span className="text-xl font-bold mx-auto">Terdaftar sebagai Trainee?</span>
          <Button weight="primary" text="Login" width="full" onClick={() => navigate('/login')} />
          <span className="text-xl font-bold mx-auto">atau</span>
          <Button text="Register" onClick={() => navigate('/register')} />
        </div>
      </div>
    </>
  )
}
