import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul className='flex gap-5' >
        <li>
          <NavLink to='/' className={({isActive})=> isActive ? 'text-blue-400 underline' : '' } >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/create-blog' className={({isActive}) =>isActive ? 'text-blue-400 underline' : '' } >
            Create Blog
          </NavLink>
        </li>     
      </ul>
      <Outlet />
    </div>
  )
}
