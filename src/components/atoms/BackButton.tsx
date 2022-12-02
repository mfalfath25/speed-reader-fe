import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { Button } from './Button'

interface BackButtonProps {
  isAnimationActive?: boolean
}

export const BackButton = (props: BackButtonProps) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="absolute">
        <Button disabled={props.isAnimationActive} onClick={() => navigate(-1)}>
          <BiArrowBack size={24} />
        </Button>
      </div>
      {/* <button className="btn btn-square absolute " onClick={() => navigate(-1)}>
        <BiArrowBack size={20} />
      </button> */}
    </>
  )
}
