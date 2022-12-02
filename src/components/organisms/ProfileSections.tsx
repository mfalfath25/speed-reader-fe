import React from 'react'
import { useParams } from 'react-router-dom'
import { EditProfile, MyProgress } from '../molecules'

export const ProfileSections = () => {
  const { userId } = useParams()

  const renderSection = () => {
    if (location.pathname.includes('edit')) {
      return <EditProfile />
    } else if (location.pathname.includes('progress')) {
      return <MyProgress />
    }
  }

  return <>{renderSection()}</>
}
