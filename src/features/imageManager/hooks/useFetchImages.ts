import { useAppDispatch } from "@/app/hooks";
import { useEffect, useState } from "react";
import { fetchImages } from "../imageManagerAction";
import { useSelector } from "react-redux";
import { selectImages } from "../imageManagerSelector";
import { Thumbnail } from "../types";


export const useFetchImages = () => {

    const [mappedImages, setMappedImages] = useState<Thumbnail[]>([]);
    const dispatch = useAppDispatch();
    const images = useSelector(selectImages)
    

    useEffect(() => {
        dispatch(fetchImages());
    }, []);

    useEffect(() => {

        const mapped = images.data.map((img) => ({
            key: img.name,
            value: img.url
        }));

        setMappedImages(mapped);


    }, [images.data])

    return {
        images,
        mappedImages
    }
}