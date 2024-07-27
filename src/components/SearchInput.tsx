import React, { createContext, useState, useContext } from 'react';
import SearchTitle from "./SearchTitle"
import SelectCard from "./SelectCard"

export const InputContext = React.createContext()

export function SearchInput() {
    const [searchTitle, setSearchTitle] = useState([])
    const [selectCard, setSelectCard] = useState([])
    return (
        <InputContext.Provider value={[searchTitle, setSearchTitle, selectCard, setSelectCard]}>
            <div className="flex md:flex-row-reverse flex-col-reverse gap-4 justify-between relative top-[-5rem]">
                <SelectCard></SelectCard>
                <SearchTitle></SearchTitle>
            </div >
        </InputContext.Provider>
    )
}

export default SearchInput