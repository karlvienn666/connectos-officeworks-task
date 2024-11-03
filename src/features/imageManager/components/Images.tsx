import { useSelector } from "react-redux";
import { useFetchImages } from "../hooks/useFetchImages"
import { selectIsImagePreviewOpen, selectImageName, selectActiveImage } from "../imageManagerSelector";
import { ImageGallery } from "../shared/ImageGallery"
import { ImagePreview } from "../shared/ImagePreview";
import { SearchBar } from "./SearchBar";


const Images: React.FC = () => {

    const { mappedImages, bottomRef} = useFetchImages();

    //Selector
    const isImagePreviewOpen = useSelector(selectIsImagePreviewOpen);
    const activeImageName = useSelector(selectImageName);
    const activeImageUrl = useSelector(selectActiveImage);

    return (
    <section className="w-full flex-grow mx-7 h-full flex-wrap relative">

        <SearchBar />
        <ImageGallery >
            <ImageGallery.ImageList thumbnails={mappedImages} />
        </ImageGallery >

        {isImagePreviewOpen && 
            <ImagePreview url={activeImageUrl} imageName={activeImageName}/>
        }

        <div ref={bottomRef} style={{ height: '1px' }}></div>
    </section>
    )
    
}

export default Images