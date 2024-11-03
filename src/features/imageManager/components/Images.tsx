import { useSelector } from "react-redux";
import { useFetchImages } from "../hooks/useFetchImages"
import { selectIsImagePreviewOpen, selectImageName, selectActiveImage } from "../imageManagerSelector";
import { ImageGallery } from "../shared/ImageGallery"
import { ImagePreview } from "../shared/ImagePreview";


const Images: React.FC = () => {

    const { mappedImages} = useFetchImages();

    //Selector
    const isImagePreviewOpen = useSelector(selectIsImagePreviewOpen);
    const activeImageName = useSelector(selectImageName);
    const activeImageUrl = useSelector(selectActiveImage);

    return (
    <section className="w-full flex-grow mx-7 h-full flex-wrap relative">
        <ImageGallery >
            <ImageGallery.ImageList thumbnails={mappedImages} />
        </ImageGallery >

        {isImagePreviewOpen && 
            <ImagePreview url={activeImageUrl} imageName={activeImageName}/>
        }
    </section>
    )
    
}

export default Images