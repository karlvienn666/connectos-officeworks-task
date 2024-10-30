import { useEffect, useState } from "react";

type Thumbnail = {
    key: string; 
    value: string;
};

export const useThumbnail = (acceptedFiles: File[]) => {
    const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);

    useEffect(() => {

        const newThumbnails = acceptedFiles.map(file => ({
            key: file.name,
            value: URL.createObjectURL(file),
        }));

        setThumbnails(prev => [...prev, ...newThumbnails]);

        // To avoid memory leaks when unmounting
        return () => {
            newThumbnails.forEach(thumbnail => URL.revokeObjectURL(thumbnail.value));
        };

    },[acceptedFiles]);



    return {thumbnails}

}