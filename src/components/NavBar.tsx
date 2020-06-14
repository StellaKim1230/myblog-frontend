import './NavBar.scss'

import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const navbars = [
  { link: '/', imgSrc: '/icons/home.png', imgAlt: 'home' },
  { link: '/likes', imgSrc: '/icons/like.png', imgAlt: 'like' },
  { link: '/blogs', imgSrc: '/icons/pencel.png', imgAlt: 'pencel' },
  { link: '/photos', imgSrc: '/icons/camera.png', imgAlt: 'camera' },
]

const NavBar: FC<Props> = () => {
  return (
    <nav className="NavBar" role="navigation">
      <ul className="NavBar__list">
        {navbars.map(({ link, imgSrc, imgAlt }) => (
          <li key={imgAlt} className="NavBar__item">
            <Link to={link}>
              <img src={imgSrc} alt={imgAlt}></img>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
