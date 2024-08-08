import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardTitleSet from "./CardTitleSet";
import CardTitleAdd from "./CardTitleAdd";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { PositionCard } from "./PositionCard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "./ui/use-toast";
import DragDrop from "./DragDrop";
import { dropDownArray } from "../constants"
const FormSchema = z.object({
    title: z.string().min(1, { message: "*" }),
    position: z.string().min(1, { message: "*" }),
    company: z.string().min(1, { message: "*" }),
    role: z.string().min(1, { message: "*" }),
    contract: z.string().min(1, { message: "*" }),
    location: z.string().min(1, { message: "*" }),
    level: z.string().min(1, { message: "*" }),

});
export const ObjectCard = React.createContext()
import { useFormObj } from "../constants"
const AddNewCardButton = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: useFormObj
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }
    const [objCard, setObjectCard] = React.useState([])
    return (
        <ObjectCard.Provider value={[objCard, setObjectCard]}>
            <AlertDialog>
                <AlertDialogTrigger className="mt-6" asChild>
                    <div className="w-full md:flex-none flex-1 flex justify-center items-center">
                        <Button className="md:w-[150px] w-full" variant="outline">
                            Add New Card
                        </Button>
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="flex justify-between">
                                    Edit Card
                                    <AlertDialogCancel className="border-none">X</AlertDialogCancel>
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Make changes to your card here. Click save when you're done.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <div className="grid grid-cols-1 gap-4 py-4">
                                {dropDownArray.map((item, index) => (
                                    <FormItem key={index} className="flex flex-col items-start gap-2">
                                        <FormLabel htmlFor="position" className="text-right capitalize">{item}</FormLabel>
                                        <div className="w-full flex items-center gap-2  ">
                                            <FormControl>
                                                <Controller
                                                    key={index}
                                                    name={item}
                                                    control={form.control}
                                                    render={({ field }) => (
                                                        <PositionCard
                                                            engine={item}
                                                            {...field}
                                                            className={`${form.formState.errors[item] ? 'border-red-500' : ''}`}
                                                        />
                                                    )}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500">
                                                {form.formState.errors.position?.message}
                                            </FormMessage>
                                        </div>
                                    </FormItem>))}

                                <FormItem className="flex justify-end items-end items-center gap-4">
                                    <FormLabel htmlFor="icon" className="text-right">Icon</FormLabel>
                                    <FormControl className="grid-cols-2">
                                        <DragDrop />
                                    </FormControl>

                                </FormItem>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="submit"
                                    className="flex bg-blue-500 text-white px-4 py-2 rounded-md">
                                    Save changes
                                </button>
                                <AlertDialogCancel
                                    className="flex bg-black text-white px-4 py-2 rounded-md">
                                    Cancel
                                </AlertDialogCancel>
                            </div>
                        </form>
                    </Form>
                </AlertDialogContent>
            </AlertDialog>
        </ObjectCard.Provider>
    )
}

export default AddNewCardButton
