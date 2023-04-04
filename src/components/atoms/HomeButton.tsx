import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
import { Button } from './Button'

export const HomeButton = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="absolute">
        <Button onClick={() => navigate('/home')}>
          <BiHome size={24} />
        </Button>
      </div>
    </>
  )
}
