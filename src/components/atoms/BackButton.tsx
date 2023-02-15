import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { Button } from './Button'

export const BackButton = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="absolute">
        <Button onClick={() => navigate(-1)}>
          <BiArrowBack size={24} />
        </Button>
      </div>
    </>
  )
}
