import './NavBar.scss'

import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const navbars = [
  { link: '/', iconSrc: '/icons/home.png', iconTitle: 'home' },
  { link: '/', iconSrc: '/icons/like.png', iconTitle: 'like' },
  { link: '/', iconSrc: '/icons/pencel.png', iconTitle: 'pencel' },
  { link: '/', iconSrc: '/icons/camera.png', iconTitle: 'camera' },
]

const NavBar: FC<Props> = () => {
  return (
    <nav className="NavBar" role="navigation">
      <ul className="NavBar__list">
        {navbars.map(({ link, iconSrc, iconTitle }) => (
          <li key={iconTitle} className="NavBar__item">
            <Link to={link}>
              <img src={iconSrc} alt={iconTitle}></img>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
