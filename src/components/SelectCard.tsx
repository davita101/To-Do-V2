// SelectCard.tsx
import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { InputContext } from "./SearchInput";

interface Item {
    id: string;
    name: string;
}

interface Props {
    titles: Item[];
}

const SelectCard: React.FC<Props> = ({ titles }) => {
    const context = useContext(InputContext);

    if (!context) {
        throw new Error('SelectCard must be used within an InputProvider');
    }

    const { selectCard, setSelectCard } = context;

    // Handle the selection change
    const handleSelectChange = (value: string) => {
        const selectedItem = titles.find(item => item.id === value);
        if (selectedItem) {
            setSelectCard(prev => {
                // Prevent adding duplicate items
                if (prev.some(item => item.id === selectedItem.id)) {
                    return prev;
                }
                return [...prev, selectedItem];
            });
        }
    };

    return (
        <Card className="flex justify-between items-center md:flex-row flex-col">
            <CardContent className="w-full">
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 pt-5">
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="md:w-[180px] w-full capitalize">
                                    <SelectValue placeholder="Select a Title" />
                                </SelectTrigger>
                                <SelectContent className='relative z-[99] '>
                                    <SelectGroup>
                                        <SelectLabel>Titles</SelectLabel>
                                        {titles.map((item, index) => (
                                            <SelectItem
                                                key={index}
                                                value={item.id}
                                            >
                                                {item.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default SelectCard;
