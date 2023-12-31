import React from 'react'
import cls from './ProfileCard.module.scss'
import { Link } from 'react-router-dom';

export default function ProfileCard({ img, nick, txt,link,pendulumAnimation }) {
  const pendulumClass = cls[`pendulum${pendulumAnimation}`];
  return (
    <div>
      <Link className={cls.link} to={link}>
      <div className={cls.card}>
        <div className={cls.cardHead}>
        <div className={`${cls.avatar} ${cls.swingingAvatar} ${pendulumClass}`}>
        <img
              src="/images/chain.svg"
              alt="Маятник"
              className={cls.pendulumImage}
            />
            <img
              src={img}
              alt="icon"
              className={cls.avatarImage} // Дополнительный класс для изображения аватара
            />
        </div>
      
          <div className={cls.nickName}>{nick}</div>
        </div>
        <div className={cls.cardInfo}>
          <span>{txt}</span>
        </div>
      </div>
      </Link>
    </div>
  );
}
