import { Button } from "@/shared/components/ui/button";
import { X } from "lucide-react";
import ReactDOM from "react-dom";
import { useImagePreview } from "../hooks/useImagePreview";

interface ImagePreview {
    url: string;
    imageName: string;
}

export const ImagePreview: React.FC<ImagePreview> = ({url, imageName}) => {

    
    const {togglePreview} = useImagePreview();

    return ReactDOM.createPortal(
        <div className="absolute bg-muted-transparent w-full h-full left-0 top-0 z-20">
            <div className="h-full flex flex-col">
                <div className="flex justify-end">
                    <div className="p-2">
                        <Button variant="ghost" onClick={togglePreview} >
                            <X />
                        </Button>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center h-full">
                    <img src={url} alt="" className="max-h-[80vh] h-full" />
                    <p>{imageName}</p>
                </div>
            </div>
        </div>,
        document.body
    )

}