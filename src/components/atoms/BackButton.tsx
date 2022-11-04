import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

export const BackButton = () => {
  const navigate = useNavigate()
  return (
    <>
      <button className="btn btn-square absolute" onClick={() => navigate(-1)}>
        <BiArrowBack size={20} />
      </button>
    </>
  )
}
