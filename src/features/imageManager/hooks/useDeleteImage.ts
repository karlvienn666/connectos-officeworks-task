import { useAppDispatch } from "@/app/hooks"
import { deleteImage } from "../imageManagerAction";
import { useToast } from "@/hooks/use-toast";


export const useDeleteImage = () => {

    const {toast} = useToast();

    const dispatch = useAppDispatch();

    const handleDelete = (id: string) =>{
        dispatch(deleteImage(id));
        toast({
            title: "Delete Operation",
            description: "Successful",
            className: 'dark:bg-muted'
        })
    }

    return {handleDelete}

}