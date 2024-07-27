import * as React from "react"
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { IoCloseSharp } from 'react-icons/io5'

interface Props {
    children?: React.ReactNode
}


const SearchTitle: React.FC<Props> = ({ children, }) => {

    return (
        <Card className={`${children && "flex"} md:flex flex-1 px-6 justify-start w-full gap-6 overflow-hidden h-auto py-6 flex-wrap items-center`}>
            <div className="flex md:flex-none flex-1 justify-center items-center h-full rounded-sm ">
                {children && <Badge variant="secondary" className="h-[40px] pr-0 w-full text-[#5da4a2] flex justify-between font-bold text-1xl py-2 capitalize">
                    {children}
                    <IoCloseSharp className="ml-2 cursor-pointer text-4xl h-[40px] bg-[#5da4a2] text-white flex " />
                </Badge>}
            </div>
            <span className='text-[#7e8686] font-bold'>{children ? "Clear" : "Add a title"}</span>
        </Card >
    )
}

export default SearchTitle
