import { useAppDispatch } from "@/app/hooks";
import { FormEvent } from "react"
import { insertImages } from "../imageManagerAction";

export const useUploadImage = (files: File[]) => {
    
    const dispatch = useAppDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const formData = new FormData();
        files.forEach(file => formData.append('images', file));

        dispatch(insertImages(formData));
    }
    
    return {
        handleSubmit
    }


}