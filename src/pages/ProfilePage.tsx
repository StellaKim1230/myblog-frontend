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
      <h1 className="ProfilePage__name">김지은</h1>
      <div className="ProfilePage__introAdd">소개 추가</div>
    </div>
  )
}

export default ProfilePage
