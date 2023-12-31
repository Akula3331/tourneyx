import { Route, Routes } from "react-router";
import cls from "./App.module.scss";
import { Link } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import PageInfo from './../pages/PageInfo/PageInfo';
import ArchivePage from "../pages/ArchivePage/ArchivePage";
import NewsPage from './../pages/NewsPage/NewsPage';
import RulesPages from './../pages/RulesPages/RulesPages';
import AchievementsPage from "../pages/AchievementsPage/AchievementsPage";
import PagesC from './../pages/PagesC/PagesC';
import PagesG from './../pages/PagesG/PagesG';
import PagesK from './../pages/PagesK/PagesK';
import PagesB from './../pages/PagesB/PagesB';
import BoxPage from './../pages/BoxPage/BoxPage';
import Achievements from "../components/Achievements/Achievements";

function App() {
    return (
        <>
            <div className={cls.App}>
                 <Routes>
                    <Route path="b" element={<PagesB/>}/>
                    <Route path="k" element={<PagesK/>}/>
                    <Route path="g" element={<PagesG/>}/>
                    <Route path="c" element={<PagesC/>}/>
                    <Route path="info" element={<PageInfo/>}/>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/archive" element={<ArchivePage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/rule" element={<RulesPages/>}/>
                    <Route path="/achiv" element={<AchievementsPage/>}/>
                    <Route path="/box" element={<BoxPage/>}/>
                </Routes> 
            </div>
        </>
    );
}

export default App;
