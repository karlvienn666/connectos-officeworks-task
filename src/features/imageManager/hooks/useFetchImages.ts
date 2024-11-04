import { useAppDispatch } from "@/app/hooks";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchImages } from "../imageManagerAction";
import { useSelector } from "react-redux";
import { selectImageQuery, selectImages, selectLoading, selectPage } from "../imageManagerSelector";
import { Thumbnail } from "../types";


export const useFetchImages = () => {

    const dispatch = useAppDispatch();
    const [mappedImages, setMappedImages] = useState<Thumbnail[]>([]);

    
    //Selector
    const images = useSelector(selectImages);
    const page = useSelector(selectPage);
    const loading = useSelector(selectLoading);
    const query = useSelector(selectImageQuery);


    const hasFetchedRef = useRef<boolean>(false);
    const bottomRef = useRef<HTMLDivElement | null>(null);


    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0];  

        if(target.isIntersecting && !hasFetchedRef.current){
            dispatch(fetchImages({pages:page, limit: 10, query: query}))
            hasFetchedRef.current = true;
        }
        else{
            console.log(hasFetchedRef);
            hasFetchedRef.current = false;
        }

    }, [dispatch, page, loading]);

    useEffect(() =>{

        const observer = new IntersectionObserver(handleObserver, { threshold: 1.0 });

        if (bottomRef.current) observer.observe(bottomRef.  current);

        // Unsubscribe when component unmounts to avoid memory leak. 
        return () => {
            if (bottomRef.current) observer.unobserve(bottomRef.current);
        };

    }, [handleObserver])

    useEffect(() => {

        console.log("Image array", images);


        const mapped = images.data?.map((img) => ({
                id: img._id,
                key: img.name,
                value: img.url
            }));
    
            setMappedImages(mapped);



    }, [images.data])

    return {
        images,
        mappedImages,
        bottomRef
    }
}