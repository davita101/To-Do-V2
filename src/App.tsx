import AddNewCardButton from "./components/AddNewCardButton"
import Box from "./components/Box"
import Header from "./components/Header"
import React, { useState } from "react"
import SearchInput from "./components/SearchInput"
import { AlertButton } from "./components/AlertButton"

export const Context = React.createContext()

const App = () => {
  const [addBox, setAddBox] = useState(false)
  const [cardObjMain, setCardObjMain] = useState([])
  const [imgSrc, setImgSrc] = useState('')

  console.log(cardObjMain)
  return (
    <Context.Provider value={[addBox, setAddBox, cardObjMain, setCardObjMain, imgSrc, setImgSrc]}>
      <div className="bg-[#f0fafb] h-[100vh]">
        <Header />
        <div className="container">
          <SearchInput />
          <div>
            <Box />
            <AddNewCardButton />
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
