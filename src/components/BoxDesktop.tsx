import * as React from "react"
import ButtonTitle from "./ButtonTitle"
import { EditCard } from "./EditCard"

interface Props {
    name?: string,
    img?: string,
    title?: string,
    status?: string,
    timeObj?: object,
    search?: string

}


const BoxDesktop: React.FC<Props> = ({ name, img, title, status, timeObj, search }) => {
    return (
        <div className="md:flex hidden justify-between items-center ">
            <div className="w-[.5rem]  h-full shadow-md bg-[#6aa09d] rounded-l-lg absolute left-[-1px] top-0" />
            <div className="flex items-start">
                <img src={img} alt="company logo" />
                <div className="ml-4 grid gap-1">
                    <div className="flex">
                        <h4 className="mr-4 capitalize text-[#5da4a2] font-bold">{name}</h4>
                        <ButtonTitle color={"#5da4a2"}>{title}</ButtonTitle>
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
            <EditCard />
        </div>
    )
}

export default BoxDesktop
