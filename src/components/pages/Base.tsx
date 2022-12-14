import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { titles } from '../../static/staticData'
import { useTrainingStore } from '../../store/TrainingStore'
import { Navbar, Title } from '../molecules'
import { Home } from './Home'

export const Base = () => {
  const location = useLocation()
  const [title, setTitle] = useState('')
  const { trainingData, animatedText, animationStatus } = useTrainingStore()

  const matchTitle = (path: string) => {
    const match = titles.find((title) => title.path.includes(path))
    if (match) {
      setTitle(match.title)
    } else {
      if (path.includes('profile/edit')) {
        setTitle('Edit Profile')
      } else if (path.includes('profile/progress')) {
        setTitle('My Progress')
      }
    }
  }

  useEffect(() => {
    // console.log('Training Data ', trainingData)
    // console.log('animationStatus ', animationStatus)
    matchTitle(location.pathname)
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
              <Home />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Base
