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
export const FeaturedCard = () => {
    return (
        <Select>
            <SelectTrigger className="flex  w-full col-span-3">
                <SelectValue placeholder="Select a featured" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>Yes / No</SelectLabel>
                    <SelectItem
                        key="Yes"
                        value="Yes"
                    >
                        Yes
                    </SelectItem>
                    <SelectItem
                        key="No"
                        value="No"
                    >
                        No
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}

