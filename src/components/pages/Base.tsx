import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { titles } from '../../static/staticData'
import { useUserStore } from '../../stores'
import { useTrainingStore } from '../../stores/TrainingStore'
import { Breadcrumb, Navbar, Title } from '../molecules'

export const Base = () => {
  const location = useLocation()
  const [title, setTitle] = useState('')
  const { userData } = useUserStore()
  const { trainingData } = useTrainingStore()

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
    // console.log(userData)
    // console.log('Training Data ', trainingData)
    matchTitle(location.pathname)
  }, [location])

  return (
    <>
      <div className="container h-screen">
        <Navbar />
        {/* <Breadcrumb /> */}
        <Title pageTitle={title} />
        <div className="my-auto p-2 mt-0 sm:mt-4">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Base
