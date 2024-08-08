import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import data from "../constants/data.json"
import { ObjectCard } from "./AddNewCardButton"

export const PositionCard = ({ value, onChange, className, engine }) => {
    const [objCard, setObjectCard] = React.useContext(ObjectCard)
    return (
        <Select
            value={value}
            onValueChange={onChange}
        >
            <SelectTrigger className={`${className} flex  w-full col-span-3`}>
                <SelectValue placeholder={`Select a ${engine}`} />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel className="capitalize font-bold">{engine}</SelectLabel>
                    {Array.from(new Set(data.map(item => item[engine]))) // Create unique set of locations
                        .map((item, index) => (
                            <SelectItem
                                onChange={(e) => console.log(e.target)}
                                key={index}
                                value={item}>
                                {item}
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}

