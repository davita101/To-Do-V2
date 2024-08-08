import * as React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import CardTitleSet from "./CardTitleSet"
import CardTitleAdd from "./CardTitleAdd"
import { LocationCard } from "./LocationCard";
import { LevelCard } from "./LevelCard";
import DragDrop from "./DragDrop";
import { FeaturedCard } from "./FeaturedCard";
import { ContactCard } from "./ContactCard";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { PositionCard } from "./PositionCard";

const AddNewCardButton = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="mt-6" asChild>

                <div className="w-full md:flex-none flex-1 flex justify-center items-center">
                    <Button
                        className="md:w-[150px] w-full "
                        variant="outline">Add New Card
                    </Button>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex justify-between">Edit Card<AlertDialogCancel className="border-none">X</AlertDialogCancel></AlertDialogTitle>
                    <AlertDialogDescription>
                        Make changes to your card here. Click save when you're done.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Company Name
                        </Label>
                        <Input
                            id="title"
                            placeholder="Google..."
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="position" className="text-right">
                            Position
                        </Label>
                        {/* this is PositionCard of card */}
                        <PositionCard />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right">
                            Location
                        </Label>
                        {/* this is LocationCard of card */}
                        <LocationCard />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="level" className="text-right">
                            Level
                        </Label>
                        {/* this is LevelCard of card */}
                        <LevelCard />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="level" className="text-right">
                            Featured
                        </Label>
                        {/* this is FeaturedCard of card */}
                        <FeaturedCard />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="level" className="text-right">
                            Contacts
                        </Label>
                        {/* this is ContactCard of card */}
                        <ContactCard />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="level" className="text-right">
                            Icon
                        </Label>
                        {/* this is DragDrop of card */}
                        <DragDrop />
                    </div>
                    <div className="flex justify-end items-center w-full gap-4">
                        {/* this is title add section*/}
                        <CardTitleAdd />
                        <CardTitleSet />
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <AlertDialogCancel
                        className="flex" >
                        Save changes
                    </AlertDialogCancel>
                    <AlertDialogCancel
                        className="flex bg-black text-white" >
                        Cancel
                    </AlertDialogCancel>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AddNewCardButton
