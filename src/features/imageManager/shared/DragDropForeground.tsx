import { Images } from "lucide-react"

export const DragDropForeground: React.FC = () => {
    
    return (
        <div className="flex justify-center items-center absolute w-full h-full bg-muted-transparent top-0 left-0 z-10">
            <div className="flex flex-col justify-center items-center">
                <Images className="w-40 h-40"/>
                <p>Drop Image</p>
            </div>
        </div>
    )
}