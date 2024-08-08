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

export const ContactCard = () => {
    return (
        <Select>
            <SelectTrigger className="flex  w-full col-span-3">
                <SelectValue placeholder="Select a contact" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>Contact</SelectLabel>
                    {Array.from(new Set(data.map(item => item.contract))) // Create unique set of locations
                        .map((contact, index) => (
                            <SelectItem key={index} value={contact}>
                                {contact}
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}

