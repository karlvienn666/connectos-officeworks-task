import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectImageThumbnails } from "../imageManagerSelector";
import { setImageThumbnails } from "../imageManagerSlice";
import { useAppDispatch } from "@/app/hooks";


export const useThumbnail = (acceptedFiles: File[]) => {

    const dispatch = useAppDispatch();

    const thumbnails = useSelector(selectImageThumbnails)

    useEffect(() => {

        const newThumbnails = acceptedFiles.map(file => ({
            id: file.name,
            key: file.name,
            value: URL.createObjectURL(file),
        }));
        
        console.log("SHEEESH", newThumbnails);
        dispatch(setImageThumbnails([...thumbnails, ...newThumbnails]));
        

        // To avoid memory leaks when unmounting
        return () => {
            newThumbnails.forEach(thumbnail => URL.revokeObjectURL(thumbnail.value));
            dispatch(setImageThumbnails([]));
        };

    },[acceptedFiles]);

    return {thumbnails}

}