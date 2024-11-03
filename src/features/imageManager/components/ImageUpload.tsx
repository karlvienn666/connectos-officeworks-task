// Shared components
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { ImageGallery } from "../shared/ImageGallery";
import { DragDropForeground } from "../shared/DragDropForeground";

// Custom hooks
import { useDragImage } from "../hooks/useDragImage";
import { useThumbnail } from "../hooks/useThumbnail";
import { ImagePreview } from "../shared/ImagePreview";
import { selectActiveImage, selectImageName, selectIsImagePreviewOpen } from "../imageManagerSelector";
import { useSelector } from "react-redux";
import { Upload } from "lucide-react";
import { useUploadImage } from "../hooks/useUploadImage";

const ImageUpload: React.FC = () => {

    const {images, getRootProps, getInputProps, isDragActive, inputRef, openClickSave} = useDragImage();
    const {thumbnails} = useThumbnail(images);
    const {handleSubmit} = useUploadImage(images);

    //Selector
    const activeImageUrl = useSelector(selectActiveImage);
    const isImagePreviewOpen = useSelector(selectIsImagePreviewOpen);
    const activeImageName = useSelector(selectImageName);

    
    return (
        <section className="w-full flex-grow mx-7 h-full flex-wrap relative" {...getRootProps()}>
            <form action="" onSubmit={handleSubmit}>
                <div className="flex justify-between gap-1.5 items-center py-3">
                    <div className="flex  items-center">

                        <Input id="picture" className="border-gray-300 dark:border-white bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center px-1" {...getInputProps()} ref={inputRef}/>
                        <p>Drag & drop some images here, or click to select files</p>
                        <Button type="button" variant="link" onClick={openClickSave}>Add files</Button>

                    </div>
                
                    <Button type="submit" variant="default"><Upload />Upload</Button>
                </div>

            </form>
            
            <ImageGallery >
                <ImageGallery.ImageList thumbnails={thumbnails} />
            </ImageGallery >

            {isDragActive && <DragDropForeground />}

            {isImagePreviewOpen && 
                <ImagePreview url={activeImageUrl} imageName={activeImageName}/>
            }

        </section>
    )   
}

export default ImageUpload;