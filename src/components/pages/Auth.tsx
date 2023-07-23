import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../atoms'

export const Auth = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid-cols-auto rows-auto-rows mt-4 grid gap-20 pt-2 sm:mt-20">
        <div className="mx-auto flex">
          <h1 className="font-base text-2xl">
            Latih kemampuan membaca cepat secara senyap{' '}
            <span className="font-bold">(silent speed reading)</span> dengan
            teks Bahasa Inggris
          </h1>
        </div>
        <div className="mx-auto flex w-full flex-col gap-4 sm:w-[300px]">
          <span className="mx-auto text-xl font-bold">
            Terdaftar sebagai Trainee?
          </span>
          <Button
            text="Login"
            width="full"
            style="primary"
            onClick={() => navigate('/login')}
          />
          <span className="mx-auto text-xl font-bold">atau</span>
          <Button text="Register" onClick={() => navigate('/register')} />
        </div>
      </div>
    </>
  )
}
