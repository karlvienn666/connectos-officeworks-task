import { useAppDispatch } from "@/app/hooks";
import { FormEvent } from "react"
import { insertImages } from "../imageManagerAction";
import { useToast } from "@/hooks/use-toast";

export const useUploadImage = (files: File[]) => {
    
    const dispatch = useAppDispatch();
    const {toast} = useToast();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const formData = new FormData();
        files.forEach(file => formData.append('images', file));

        try {
            await dispatch(insertImages(formData)).unwrap();
            toast({
                title: "Insert Images",
                description: "Successful",
                className: 'dark:bg-muted'
            })
            
        } catch (error) {
            toast({
                title: "Insert Images",
                description: "Failed",
                className: 'dark:bg-muted'
            })
        }
    }
    
    return {
        handleSubmit
    }


}