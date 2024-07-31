import React, { useContext } from 'react'
import { Badge } from './ui/badge'
import { Context } from '@/App'
import { IoCloseSharp } from 'react-icons/io5'

function CardTitleAdd() {
    const [addBox, setAddBox, selectCard, setSelectCard] = useContext(Context)
    // console.log(selectCard)
    const handleRemove = (itemId: string) => {
        setSelectCard(prev => prev.filter(item => item.id !== itemId));
    };

    return (
        <div className='flex gap-2 flex-wrap justify-center items-center h-full'>
            {selectCard.map((item, index) =>
                <Badge className='rounded-full hover:text-[#5da4a2] uppercase bg-[#5da4a2]'>
                    {item.name}
                    <IoCloseSharp
                        onClick={() => handleRemove(item.id)}
                        className="ml-2 cursor-pointer text-1xl h-[full]text-white hover:text-[#5da4a2] " />
                </Badge>)}
            <span
                onClick={() => { selectCard != "" && setSelectCard([]) }}
                className='text-[#7e8686] font-bold  hover:text-black'>{selectCard != "" ? "Clear" : "Add a title"}</span>
        </div >
    )
}

export default CardTitleAdd
