import { useCallback, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"


export const useDragImage = () => {

    const [images, setImages] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // setImages((prevImages) => [...prevImages, ...acceptedFiles])
        setImages(acceptedFiles)
    }, [])

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
        },
        multiple: true,
        noClick: true
    })

    const openClickSave = () => {
        inputRef.current?.click();
    }

    return {images, setImages, getRootProps, getInputProps, isDragActive, acceptedFiles, inputRef, openClickSave}

}