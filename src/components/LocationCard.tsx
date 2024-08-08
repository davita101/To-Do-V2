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

export const LocationCard = () => {
    return (
        <Select>
            <SelectTrigger className="flex  w-full col-span-3">
                <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>Locations</SelectLabel>
                    {Array.from(new Set(data.map(item => item.location))) // Create unique set of locations
                        .map((location, index) => (
                            <SelectItem key={index} value={location}>
                                {location}
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}

