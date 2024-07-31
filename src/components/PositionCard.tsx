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

export function PositionCard() {

    interface Types {
        id: string;
        name: string;
    }

    const titlesObj: Types[] = [
        { id: "0", name: "Frontend" },
        { id: "1", name: "Backend" },
        { id: "2", name: "Full Stack" },
        { id: "3", name: "Data Science" },
        { id: "4", name: "Machine Learning" },
        { id: "5", name: "DevOps" },
        { id: "6", name: "UX/UI Design" },
        { id: "7", name: "Mobile Development" },
        { id: "8", name: "Cloud Computing" }
    ];
    return (
        <Select >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a profession" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    {titlesObj.map((item, index) => (
                        <SelectItem value={index}>{item.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
