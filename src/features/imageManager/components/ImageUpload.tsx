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

const ImageUpload: React.FC = () => {

    const {images, getRootProps, getInputProps, isDragActive, inputRef, openClickSave} = useDragImage();
    const {thumbnails} = useThumbnail(images);

    //Selector
    const activeImageUrl = useSelector(selectActiveImage);
    const isImagePreviewOpen = useSelector(selectIsImagePreviewOpen);
    const activeImageName = useSelector(selectImageName);

    
    return (
        <section className="w-full flex-grow mx-7 h-full flex-wrap relative" {...getRootProps()}>
            <form action="">
                <div className="flex gap-1.5 items-center py-3">
                    <Input id="picture" className="border-gray-300 dark:border-white bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center px-1" {...getInputProps()} ref={inputRef}/>
                    <p>Drag & drop some images here, or click to select files</p>
                    <Button type="button" onClick={openClickSave}>Upload</Button>
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