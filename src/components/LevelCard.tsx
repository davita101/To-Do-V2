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

export const LevelCard = () => {
    return (
        <Select>
            <SelectTrigger className="flex  w-full col-span-3">
                <SelectValue placeholder="Select a level" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>Position</SelectLabel>
                    {Array.from(new Set(data.map(item => item.level))) // Create unique set of locations
                        .map((level, index) => (
                            <SelectItem key={index} value={level}>
                                {level}
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}

