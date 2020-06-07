import './NavBar.scss'

import React, { FC } from 'react'

interface Props {}

const NavBar: FC<Props> = () => {
  return (
    <nav className="NavBar">
      <ul className="NavBar__list">
        <li>home</li>
        <li>hobby</li>
        <li>travel</li>
        <li>wiki</li>
      </ul>
    </nav>
  )
}

export default NavBar
