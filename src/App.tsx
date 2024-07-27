import AddNewCardButton from "./components/AddNewCardButton"
import Box from "./components/Box"
import Header from "./components/Header"
import React, { useState } from "react"
import SearchInput from "./components/SearchInput"

export const Context = React.createContext()

const App = () => {
  const [addBox, setAddBox] = useState(false)
  return (
    <Context.Provider value={[addBox, setAddBox]}>
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
