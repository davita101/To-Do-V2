import AddNewCardButton from "./components/AddNewCardButton"
import Box from "./components/Box"
import Header from "./components/Header"
import React, { useState } from "react"
import SearchInput from "./components/SearchInput"
import { AlertButton } from "./components/AlertButton"

export const Context = React.createContext()

const App = () => {
  const [addBox, setAddBox] = useState(false)

  interface CardTypes {
    id: string,
    name: string,
  }




  const [cardObjMain, setCardObjMain] = useState([])
  console.log(cardObjMain)
  return (
    <Context.Provider value={[addBox, setAddBox, cardObjMain, setCardObjMain]}>
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
