
import { Eye } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { ImageOptions } from "./ImageOptions";
import { useImagePreview } from "../hooks/useImagePreview";
import { useDeletePreviewImage } from "../hooks/useDeletePreviewImage";
import { Thumbnail } from "../types";
import { useDeleteImage } from "../hooks/useDeleteImage";
import { useSelector } from "react-redux";
import { selectIsImageLoading } from "../imageManagerSelector";
import { Skeleton } from "@/shared/components/ui/skeleton";

interface ImageGalleryProps {
    children: React.ReactNode;
}

interface ImageListProps{
    thumbnails: Thumbnail[];
}

interface ImageCardProps{
    thumbnail: Thumbnail;
    handleDelete?: (id: string) => void;
}

interface ImageGalleryComponent extends React.FC<ImageGalleryProps> {
    ImageList: React.FC<ImageListProps>;
    ImagePreviewList: React.FC<ImageListProps>;
}

export const ImageGallery: ImageGalleryComponent = ({children}) => {
    return (
        <div className="flex flex-row flex-wrap justify-start">
            {children}
        </div>
    )
}


const ImageList: React.FC<ImageListProps> = ({thumbnails}) => {

    const {handleDelete} = useDeleteImage();
    const isLoading = useSelector(selectIsImageLoading);

    const baseClassNameSkeleton = 'h-[300px] w-[200px] m-2 rounded-3xl p-4'

    return (
    <>
        
        {
            thumbnails.map((thumb) => (
                <ImageCard thumbnail={thumb} key={thumb.value} handleDelete={handleDelete}/>
            ))
        }
        
        {isLoading&& (<>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
            <Skeleton className={baseClassNameSkeleton}/>
        </>)}
    </>
    )
}

const ImagePreviewList: React.FC<ImageListProps> = ({thumbnails}) => {

    
    const {onDelete} = useDeletePreviewImage();

    return (
    <>
        {
            thumbnails.map((thumb) => (
                <ImageCard thumbnail={thumb} key={thumb.value} handleDelete={onDelete}/>
            ))
        }
        
    </>
    )
}

const ImageCard: React.FC<ImageCardProps> = ({thumbnail, handleDelete}) => {

    const {openActiveImage} = useImagePreview();

    const baseButtonClass = "h-7 w-0.5 outline-none focus:outline-none dark:bg-transparent dark:text-white dark:hover:bg-transparent";

    return (
        <div className="h-[300px] w-[200px] m-2 border-muted border-solid rounded-3xl p-4">
            <div className="w-[200px] h-[200px] justify-center">
                <div className="h-full bg-cover bg-center border rounded-lg overflow-hidden" style= {{backgroundImage: `url(${thumbnail.value})`}}>
                </div>
            </div>
            <div className="h-20 overflow-ellipsis overflow-hidden">
                <p className=" overflow-ellipsis line-clamp-2">{thumbnail.key}</p>
            </div>
            <div className="flex justify-end w-full">
                <Button className={baseButtonClass} onClick={() => openActiveImage(thumbnail.value, thumbnail.key)}>
                    <Eye className=""/>
                </Button>
                <ImageOptions onDelete={() => handleDelete?.(thumbnail?.id || thumbnail.key)} />
            </div>
        </div>
    )
}

ImageGallery.ImageList = ImageList;
ImageGallery.ImagePreviewList = ImagePreviewList;

