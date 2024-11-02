import { useAppDispatch } from "@/app/hooks"
import { useSelector } from "react-redux";
import { selectImageThumbnails } from "../imageManagerSelector";
import { setImageThumbnails } from "../imageManagerSlice";


export const useDeletePreviewImage = () => {

    const dispatch = useAppDispatch();
    const imageThumbnails = useSelector(selectImageThumbnails);

    const onDelete = (key: string) => {

        const filteredThumbnails = imageThumbnails.filter(thumbnail => thumbnail.key !== key);

        dispatch(setImageThumbnails(filteredThumbnails));
    }

    return {onDelete}

}