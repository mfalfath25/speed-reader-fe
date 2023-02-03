import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { titles } from '../../static/staticData'
import { useTrainingStore } from '../../stores/TrainingStore'
import { LoaderBar } from '../atoms'
import { Breadcrumb, Navbar, Title } from '../molecules'

export const Base = () => {
  const location = useLocation()
  const [title, setTitle] = useState('')
  const { setAnimationStatus } = useTrainingStore()

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
    setAnimationStatus(false)
    matchTitle(location.pathname)
  }, [location])

  return (
    <>
      <div className="container h-screen">
        <LoaderBar />
        <Navbar />
        {/* <Breadcrumb /> */}
        <Title pageTitle={title} />
        <div className="my-auto mt-0 p-2 sm:mt-4">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Base
