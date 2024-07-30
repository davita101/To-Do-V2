import * as React from "react"
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { IoCloseSharp } from 'react-icons/io5'
import { InputContext } from "./SearchInput"

interface Props {
    children?: Array
}

const SearchTitle: React.FC<Props> = ({ children, }) => {
    const { selectCard, setSelectCard } = React.useContext(InputContext)

    console.log(selectCard)

    const handleRemove = (itemId: string) => {
        // Remove the item with the given id from selectCard
        setSelectCard(prev => prev.filter(item => item.id !== itemId));
    };


    return (
        <Card className={` ${children != "" ? "h-full cursor-pointer" : "h-auto"} flex flex-1 px-6 justify-start w-full  gap-6 overflow-hidden py-6 flex-wrap items-center`}>
            {children.map((item, index) => (<div className="flex md:flex-none flex-1 justify-center items-center h-full rounded-sm ">
                <Badge
                    key={item.id}
                    variant="secondary"
                    className="h-[40px] pr-0 w-full text-[#5da4a2] flex justify-between font-bold text-1xl py-2 capitalize">
                    {children[index].name}
                    <IoCloseSharp
                        onClick={() => handleRemove(children[index].id)}
                        className="ml-2 cursor-pointer text-4xl h-[40px] bg-[#5da4a2] text-white flex " />
                </Badge>
            </div>))}
            <span
                onClick={() => { children != "" && setSelectCard([]) }}
                className='text-[#7e8686] font-bold  hover:text-black'>{children != "" ? "Clear" : "Add a title"}</span>
        </Card >
    )
}

export default SearchTitle
