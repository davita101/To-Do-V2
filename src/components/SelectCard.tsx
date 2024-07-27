import React from 'react';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
interface Props {
    children: React.ReactNode
}

import { InputContext } from "./SearchInput"

const SelectCard: React.FC<Props> = ({ children }) => {
    const [searchTitle, setSearchTitle] = React.useContext(InputContext)
    const [selectCard, setSelectCard] = React.useContext(InputContext)


    return (
        <Card className="flex justify-between items-center md:flex-row flex-col">
            <CardContent className="w-full">
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 pt-5">
                            <Select>
                                <SelectTrigger className="md:w-[180px] w-full capitalize">
                                    <SelectValue placeholder="Select a Title" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Titles</SelectLabel>
                                        {children && <SelectItem value={children}>{children}</SelectItem>}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="w-full h-aut md:p-0 pb-6">
                <Button className="bg-[#5da4a2] w-full md:mr-6" >Search</Button>
            </CardFooter>
        </Card>
    )
}

export default SelectCard
