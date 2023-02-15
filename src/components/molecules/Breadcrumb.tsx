import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../logic/utils'

export const Breadcrumb = () => {
  const location = useLocation()

  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index) => {
      currentLink += `/${crumb}`
      return (
        <li key={index}>
          <Link to={currentLink}>{capitalizeFirstLetter(crumb)}</Link>
        </li>
      )
    })

  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  return (
    <>
      <div className="px-2">
        <div className="breadcrumbs text-sm">
          <ul>{crumbs}</ul>
        </div>
      </div>
    </>
  )
}
