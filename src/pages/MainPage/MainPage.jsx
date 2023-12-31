import React, { useState } from "react";
import cls from "./MainPage.module.scss";
import { Link } from "react-router-dom";
import TourList from './../../components/TourList/TourList';
import Leaderboard from './../../components/Leaderboard/Leaderboard';
import TimeCon from './../../components/TimeCon/TimeCon';
import CountdownTimer from './../../components/CountdownTimer/CountdownTimer';
import CardsBlock from "../../components/CardCon/CardsBlock/CardsBlock";
import BoxPage from "../BoxPage/BoxPage";

export default function MainPage() {
  const [firstDateFromChild, setFirstDateFromChild] = useState(null);
  const [gameName, setGameName] = useState("");
  const handleFirstDateFromChild = (date, gameName) => {
    setFirstDateFromChild(date);
    // Добавьте название игры в состояние или передайте его другим компонентам
    setGameName(gameName);
  };
  // console.log(gameName);
  let targetDate = null; // Изначально установите targetDate как null

  if (firstDateFromChild) {
    const dateParts = firstDateFromChild.split(".");
    if (dateParts.length === 3) {
      const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T20:30:00`;
      targetDate = new Date(formattedDate);
    }
  }

  return (
    <div className={cls.container}>
      <header id="hed" className={cls.header}>
        <nav className={cls.navbar}>
          <Link className={cls.link} to="/rule">
            <img src="/icons/head/medalicon.svg" alt="icon" />
            <p className={cls.headerTxt}>Правила</p>
          </Link>
          <Link className={cls.link} to="/info">
            <img src="/icons/head/info.svg" alt="icon" />
            <p className={cls.headerTxt}>Инструкция</p>
          </Link>
          <Link className={cls.link} to="/archive">
            <img src="/icons/head/archive.svg" alt="icon" />
            <p className={cls.headerTxt}>Архив игр</p>
          </Link>
          <Link className={cls.link} to="/news">
            <img src="/icons/head/news.svg" alt="icon" />
            <p className={cls.headerTxt}>Новости</p>
          </Link>
        </nav>
      </header>
      <div className={cls.newsItem}>
        <img className={cls.newsImg} src="/icons/timeIcon/tick.svg" alt="" />
      <p>Этот значок озночает,что победивший в этой игре получает попытку выбить персонажа</p>
      </div>
      <div className={cls.main}>
        <CountdownTimer targetDate={new Date("2023-12-10T00:00:00")} text='Отсчет до глобального турнира'/>
      </div>
      <div className={cls.taimer}>
        <CountdownTimer targetDate={targetDate} name={gameName} text='Время доказать свои навыки: начало близко!' />
      </div>
      <TimeCon onFirstDateFromChild={handleFirstDateFromChild} />
      <div className={cls.tourCon}>
        <Leaderboard />
        <TourList />
      </div>
      <Link className={cls.dostCon} to="/achiv">
      <h1 className={cls.bTitle}>Достижения</h1>
        <img className={cls.dostImg} src="/images/dost.jpg" alt="" />
      </Link>
      <Link className={cls.dostCon} to="/box">
        <h1 className={cls.bTitle}>Крути карточку</h1>
        <img className={cls.boxImg} src="/images/boxCon.svg" alt="" />
      </Link>
      <CardsBlock  />
      <div className={cls.block}></div>
    </div>
  );
}
