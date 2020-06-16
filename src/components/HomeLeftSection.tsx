import './HomeLeftSection.scss'

import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const links = [
  {
    link: '/profile',
    imgSrc: '/images/profile.jpg',
    imgAlt: 'profile',
    title: '김지은',
  },
  {
    link: '/github',
    imgSrc: '/images/github.png',
    imgAlt: 'github',
    title: 'repository',
  },
]

const HomeLeftSection: FC<Props> = () => {
  return (
    <div className="HomeLeftSection">
      <ul className="HomeLeftSection__list">
        {links.map(({ link, imgSrc, imgAlt, title }) => (
          <li key={imgAlt} className="HomeLeftSection__item">
            <Link className="HomeLeftSection__link" to={link}>
              <img
                className="HomeLeftSection__image"
                src={imgSrc}
                alt={imgAlt}
              ></img>
              <span className="HomeLeftSection__title">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeLeftSection
