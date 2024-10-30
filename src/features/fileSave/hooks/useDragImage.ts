import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"


export const useDragImage = () => {

    const [images, setImages] = useState<File[]>([])

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setImages((prevImages) => [...prevImages, ...acceptedFiles])
    }, [])

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
        },
        multiple: true
    })

    return {images, setImages, getRootProps, getInputProps, isDragActive, acceptedFiles}

}