

import { useAppDispatch } from "@/app/hooks"
import { setActiveImage, setActiveImageName, toggleImagePreview } from "../imageManagerSlice";

export const useImagePreview = () => {

    const dispatch = useAppDispatch();

    const openActiveImage = (activeImageUrl: string, activeImageName: string) => {
        dispatch(setActiveImage(activeImageUrl));
        dispatch(setActiveImageName(activeImageName))
        dispatch(toggleImagePreview());
        console.log("HUH?", activeImageName);
    }

    const togglePreview = () => {
        dispatch(toggleImagePreview());
    }

    return {
        openActiveImage,
        togglePreview
    }
}