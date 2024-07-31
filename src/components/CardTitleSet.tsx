import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Context } from "@/App";
import { Card, CardContent } from './ui/card';

function CardTitleSet() {
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

    const [addBox, setAddBox, selectCard, setSelectCard] = useContext(Context)
    const handleSelectChange = (id: string) => {
        setSelectCard(prev => {
            // Check if the item is already selected
            const isSelected = prev.some(item => item.id === id);
            if (isSelected) {
                // Remove the item if it's already selected
                return prev.filter(item => item.id !== id);
            } else {
                // Add the item if it's not selected
                const selectedItem = titlesObj.find(item => item.id === id);
                if (selectedItem) {
                    return [...prev, selectedItem];
                }
                return prev;
            }
        });
    };

    return (
        <div>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Select A Title</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {titlesObj.map(title => (
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
            </form>
        </div>
    );
}

export default CardTitleSet;
