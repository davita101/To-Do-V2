import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import CardTitleSet from "./CardTitleSet"
import CardTitleAdd from "./CardTitleAdd"
import { DialogClose } from "@radix-ui/react-dialog";
import { AlertButton } from "./AlertButton";
import { PositionCard } from "./PositionCard";
interface Item {
    id: string;
    name: string;
}

const AddNewCardButton = () => {
    return (
        <Dialog>
            <DialogTrigger className="mt-6" asChild>
                <div className="w-full md:flex-none flex-1 flex justify-center items-center">
                    <Button
                        className="md:w-[150px] w-full "
                        variant="outline">Add New Card</Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Card</DialogTitle>
                    <DialogDescription>
                        Make changes to your card here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Company Name
                        </Label>
                        <Input
                            id="title"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Position
                        </Label>
                        <PositionCard />
                    </div>
                    <div className="flex justify-end items-center w-full gap-4">
                        <CardTitleAdd />
                        <CardTitleSet />
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <DialogClose className="flex" >
                        <Button type="submit">Save changes</Button>
                    </DialogClose>
                    <AlertButton />
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default AddNewCardButton
