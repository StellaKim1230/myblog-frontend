import './ProfilePage.scss'

import React, { FC } from 'react'

interface Props {}

const ProfilePage: FC<Props> = () => {
  return (
    <div className="ProfilePage__introduce">
      <img
        className="ProfilePage__image"
        src="/images/mypage-profile.jpg"
        alt="mypage profile"
      />
    </div>
  )
}

export default ProfilePage
