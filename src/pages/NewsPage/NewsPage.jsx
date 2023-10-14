import React from "react";
import cls from "./NewsPage.module.scss";
import Back from "../../components/Back/Back";

export default function NewsPage() {
  return (
    <div className={cls.con}>
      <Back />
     
      <div className={cls.blockNews}>
        <p className={cls.title}>Достижения</p>
        <p className={cls.newsItem}>
          Скоро у нас появится блок с достижениями, где вы узнаете, как получить
          разнообразные награды и бонусы. Следите за обновлениями и не упустите
          возможность стать настоящим чемпионом!
        </p>
      </div>
      <div className={cls.blockNews}>
        <p className={cls.title}>Обновление 1.1</p>
        <p className={cls.newsItem}>
          Мы рады объявить об обновлениях на нашем сайте! Теперь у нас появился
          блок с правилами игр. Если вы хотите узнать правила вашей любимой
          игры, просто перейдите в этот раздел. И это еще не всё! Мы также
          внесли изменения в список игр. Дартс и блекджек были заменены на
          Морской бой и Домино. Эти игры обещают стать вашими новыми фаворитами.
          Но это еще не все сюрпризы! Если вы готовы испытать свою удачу, у нас
          есть еще больше игр для вас. Присоединяйтесь к нам и погрузитесь в мир
          азарта и развлечений. Ссылки на игры доступны в нашем разделе с
          правилами.
        </p>
        <p className={cls.data}>Дата обновления 14.10.2023</p>
      </div>
    </div>
  );
}
