// SearchInput.tsx
import React, { createContext, useState, ReactNode } from 'react';
import SelectCard from './SelectCard';
import SearchTitle from './SearchTitle';


interface InputContextType {
    selectCard: string[]; // Array of selected item names
    setSelectCard: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InputContext = createContext<InputContextType | undefined>(undefined);

const SearchInput: React.FC = () => {
    interface Types {
        id: string;
        name: string;
    }

    const titlesObj: Types[] = [
        { id: "0", name: "Frontend" },
        { id: "1", name: "Backend" },
        { id: "2", name: "Full Stack" },
        { id: "3", name: "Data Science" },
        { id: "4", name: "Machine Learning" },
        { id: "5", name: "DevOps" },
        { id: "6", name: "UX/UI Design" },
        { id: "7", name: "Mobile Development" },
        { id: "8", name: "Cloud Computing" }
    ];

    const [selectCard, setSelectCard] = useState<string[]>([])
    return (
        <InputContext.Provider value={{ selectCard, setSelectCard }}>
            <div className="flex md:flex-row-reverse flex-col-reverse gap-4 justify-between relative top-[-5rem]">
                <SelectCard titles={titlesObj} />
                <SearchTitle>{selectCard}</SearchTitle>
            </div>
        </InputContext.Provider>
    );
};

export default SearchInput;
