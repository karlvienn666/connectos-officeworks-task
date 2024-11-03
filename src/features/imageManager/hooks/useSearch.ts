import { useAppDispatch } from "@/app/hooks"
import debounce from 'lodash.debounce';
import { ChangeEvent, useCallback } from "react";
import { setImageSearching } from "../imageManagerSlice";
import { fetchImages } from "../imageManagerAction";

export const useSearch = () => {

    const dispatch = useAppDispatch();

    const debounceData = useCallback(
        debounce((query: string) => {
            dispatch(setImageSearching(query));
            dispatch(fetchImages({pages:1, limit: 10, query: query}))
        },500),
        [dispatch]
    )

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        debounceData(query);
    }
    
    return {handleInputChange}

}