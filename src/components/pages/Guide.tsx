import React from 'react'

export const Guide = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center mx-auto">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="m-4">
            <div className="card-body max-w-md bg-base-300 shadow-xl outline outline-2 rounded-lg">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose? sadasdasd asdasd asdas</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
