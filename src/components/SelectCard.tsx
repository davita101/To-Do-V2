import React, { useContext } from 'react';
"use client"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { InputContext } from "./SearchInput";
import { Card, CardContent } from './ui/card';

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
    const handleSelectChange = (id: string) => {
        setSelectCard(prev => {
            // Check if the item is already selected
            const isSelected = prev.some(item => item.id === id);
            if (isSelected) {
                // Remove the item if it's already selected
                return prev.filter(item => item.id !== id);
            } else {
                // Add the item if it's not selected
                const selectedItem = titles.find(item => item.id === id);
                if (selectedItem) {
                    return [...prev, selectedItem];
                }
                return prev;
            }
        });
    };


    return (
        <Card className="flex justify-between items-center md:flex-row flex-col">
            <CardContent className="w-full">
                {true && <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 pt-5">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Select A Title</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {titles.map(title => (
                                        <DropdownMenuCheckboxItem
                                            key={title.id}
                                            checked={selectCard.some(item => item.id === title.id)}
                                            onCheckedChange={() => handleSelectChange(title.id)}
                                        >
                                            {title.name}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </form>}
            </CardContent>
        </Card>
    );
};

export default SelectCard;
