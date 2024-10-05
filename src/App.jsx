import { Route, Routes } from "react-router-dom"
import Main from "./views/Main/Main"
import Detail from "./views/Detail/Detail"
import { createContext, useEffect, useState } from "react";
import MobileCategoryPage from "./container/Categories/MobileCategoryPage";
import HeaderBottomMenu from "./components/Header/HeaderMenuMobile";
import Header from "./components/Header/Header";

export const Context = createContext()


function App() {

  const [language, setLanguage] = useState('uz');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Context.Provider value={{ language, setLanguage }}>
      <Header />
      {windowWidth > 767 ? <Header /> : <HeaderBottomMenu />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail" element={<Detail />} />

        <Route path="/categories" element={<MobileCategoryPage />} />
        <Route path="/best-ads" element={<h1>Лучшие объявления</h1>} />
        <Route path="/discounts-start" element={<h1>Объявления о начале скидки</h1>} />
        <Route path="/for-you" element={<h1>для тебя</h1>} />
        <Route path="/discounts-nearby" element={<h1>Скидки рядом</h1>} />
        <Route path="/recent-ads" element={<h1>Последние просмотренные объявления</h1>} />
        <Route path="/paused-ads" element={<h1>Остановленные объявления</h1>} />

        <Route path="/favorites" element={<h1>Остановленные объявления</h1>} />
        <Route path="/profile" element={<h1>Остановленныеee объявления</h1>} />
        <Route path="/menu" element={<h1>Остановленныеcc объявления</h1>} />
      </Routes>
    </Context.Provider>
  )
}

export default App
