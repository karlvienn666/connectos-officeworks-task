import { useAppDispatch } from "@/app/hooks"
import { deleteImage } from "../imageManagerAction";
import { useToast } from "@/hooks/use-toast";


export const useDeleteImage = () => {

    const {toast} = useToast();
    const dispatch = useAppDispatch();

    const handleDelete = async (id: string) =>{


        try {
            await dispatch(deleteImage(id)).unwrap();
            toast({
                title: "Delete Operation",
                description: "Successful",
                className: 'dark:bg-muted'
            })

        } catch (error) {
            toast({
                title: "Delete Operation",
                description: "Failed",
                className: 'dark:bg-muted'
            }) 
        }
    }

    return {handleDelete}

}