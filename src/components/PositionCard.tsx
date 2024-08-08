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

export const PositionCard = () => {
    return (
        <Select>
            <SelectTrigger className="flex  w-full col-span-3">
                <SelectValue placeholder="Select a position" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>Position</SelectLabel>
                    {Array.from(new Set(data.map(item => item.position))) // Create unique set of locations
                        .map((pos, index) => (
                            <SelectItem key={index} value={pos}>
                                {pos}
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}

