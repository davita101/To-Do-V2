import * as React from "react"
import ButtonTitle from './ButtonTitle'

interface Props {
    name?: string,
    img?: string,
    title?: string,
    status?: string,
    timeObj?: object,
    search?: string

}


const BoxMobile: React.FC<Props> = ({ name, img, title, status, timeObj, search }) => {
    return (
        <div className='md:hidden flex flex-col gap-3 '>
            <div className="w-[.3rem] h-full bg-[#6aa09d] rounded-l-lg absolute left-[-1px] top-0" />
            <div className="flex relative items-start ">
                <img
                    src={img}
                    alt="company logo"
                    className='absolute top-[-4.5rem] z-[99] w-[80px]' />
                <div className=" grid gap-3 pt-4">
                    <div className="flex flex-wrap  ">
                        <h4 className="mr-4 capitalize text-[#5da4a2] font-bold">{name}</h4>
                        <div className="flex">
                            <ButtonTitle color={"#5da4a2"}>{name}</ButtonTitle>
                            <ButtonTitle color={"#2e3838"}>{title}</ButtonTitle>
                        </div>
                    </div>
                    <h3 className="capitalize font-bold">{status}</h3>
                    <div className="flex gap-10 text-[#417c7a]">
                        <h5>{timeObj.time}</h5>
                        <ul className="list-disc flex gap-10">
                            <li>
                                {timeObj.rate}
                            </li>
                            <li>
                                {timeObj.country}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full h-[.05rem] bg-[#5da4a2] rounded-full' />
        </div>
    )
}

export default BoxMobile
