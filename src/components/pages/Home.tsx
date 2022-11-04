import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col justify-center items-center h-5/6">
        <h1 className="text-2xl font-bold">Train your speed reading skills</h1>
        <p className="text-lg mb-10 text-gray-500">
          Speedre is an app to help you train speed reading with customizable options
        </p>

        <div className="grid grid-cols-2 space-x-5">
          <div className="card w-80 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center p-4">
              <h2 className="card-title">Normal Mode</h2>
              <p>Train using existing text & test your comprehension accuracy</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary btn-sm normal-case rounded-md"
                  onClick={() => {
                    navigate('/training/normal')
                  }}
                >
                  Normal
                </button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center p-4">
              <h2 className="card-title">Custom Mode</h2>
              <p>Train using your own text as the input, comprehension will not be measured</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary btn-sm normal-case rounded-md"
                  onClick={() => {
                    navigate('/training/custom')
                  }}
                >
                  Custom
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
