import { Route, Routes } from "react-router-dom"
import Main from "./views/Main/Main"
import Detail from "./views/Detail/Detail"
import { createContext, useState } from "react";

export const Context = createContext()


function App() {

  const [language, setLanguage] = useState('uz');

  return (
    <Context.Provider value={{language, setLanguage}}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
    </Context.Provider>
  )
}

export default App
