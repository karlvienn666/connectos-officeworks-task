import { useAppDispatch } from "@/app/hooks"
import { deleteImage } from "../imageManagerAction";
import { useToast } from "@/hooks/use-toast";


export const useDeleteImage = () => {

    const {toast} = useToast();

    const dispatch = useAppDispatch();

    const handleDelete = async (id: string) =>{

        console.log(id, "Bakit ayaw ma close?");
        await dispatch(deleteImage(id));


        toast({
            title: "Delete Operation",
            description: "Successful",
            className: 'dark:bg-muted'
        })
    }

    return {handleDelete}

}