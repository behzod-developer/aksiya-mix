import { Route, Routes } from "react-router-dom"
import Main from "./views/Main/Main"
import Detail from "./views/Detail/Detail"


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
    </>
  )
}

export default App
