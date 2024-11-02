import { Button } from "@/shared/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover"
import { EllipsisVertical, MoreHorizontal, Trash2 } from "lucide-react"


interface ImageOptionsProps{
    onDelete: () => void;
}

export const ImageOptions: React.FC<ImageOptionsProps> = ({onDelete}) => {
    
    const baseButtonClass = "outline-none focus:outline-none dark:bg-transparent dark:text-white dark:hover:bg-transparent border-none";

    return (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className={`h-7 w-0.5 ${baseButtonClass}`}>
                <EllipsisVertical className="" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className=" w-32 dark:bg-slate-900 p-0" side="bottom" align="end">
            <Button variant="ghost" className="outline-none focus:outline-none dark:bg-transparent dark:text-white border-none w-full justify-start" onClick={onDelete}>
                <Trash2 /> Delete
            </Button>
            {/* Popover content goes here */}
        </PopoverContent>
    </Popover>
    )
}