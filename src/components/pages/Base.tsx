import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { titles } from '../../static/staticData'
import { useTrainingStore } from '../../store/TrainingStore'
import { Navbar, Title } from '../molecules'
import { Home } from './Home'

export const Base = () => {
  const location = useLocation()
  const [title, setTitle] = useState('-')
  const { trainingText } = useTrainingStore()

  useEffect(() => {
    console.log(trainingText)
    const curTitle = titles.find((item) => item.path.includes(location.pathname))
    if (curTitle && curTitle.title) {
      setTitle(curTitle.title)
    }
  }, [location])
  return (
    <>
      <div className="container h-screen">
        <Navbar />
        {location.pathname !== '/' ? (
          <>
            <Title pageTitle={title} />
            <div className="my-auto p-2 mt-0 sm:mt-20">
              <Outlet />
            </div>
          </>
        ) : (
          <>
            <div className="p-2 pt-0 mt-0">
              <Title pageTitle={title} />
              <Home />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Base
