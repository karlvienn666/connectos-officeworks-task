import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useDragImage } from "../hooks/useDragImage";
import { useThumbnail } from "../hooks/useThumbnail";

const ImageUpload: React.FC = () => {

    const {images, getRootProps, getInputProps, isDragActive} = useDragImage();

    const {thumbnails} = useThumbnail(images);
    
    return (
        <>
            <section className="w-full flex-grow mx-7 h-full flex-wrap" {...getRootProps()}>
                <form action="">
                    {/* <Label htmlFor="picture">Image to Upload</Label> */}
                    <div className="flex gap-1.5 items-center py-3">
                        <Input id="picture" className="border-gray-300 dark:border-white bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center px-1" {...getInputProps()} />

                        {isDragActive ? (
                            <p>Drop the images here ...</p>
                        ) : (
                            <p>Drag & drop some images here, or click to select files</p>
                        )}
                        <Button type="submit">Submit</Button>
                    </div>
                </form>

                <div className="flex flex-row h-full flex-wrap">
                {
                    thumbnails.map((thumb, index) => (
                        <div className="flex flex-col w-28 h-44">
                            <div key={thumb.key} className="w-24 h-24 border rounded overflow-hidden">
                                    <img
                                    src={thumb.value}
                                    alt={`thumbnail-${index}`}
                                    className="w-full h-full object-cover"
                                    />
                            </div>
                            <p className=" overflow-ellipsis overflow-hidden m-0">{thumb.key}</p>
                        </div>
                    ))
                }
                </div>
            </section>
        </>
    )
}

export default ImageUpload;