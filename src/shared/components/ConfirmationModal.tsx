import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Trash2 } from "lucide-react";

interface ConfirmationDialogProps{
    onOk: () => void;
    onClose?: () => void;
    details?: string;
    okLabel?: string;
    closeLabel?: string;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({onOk, onClose, details, okLabel, closeLabel}) => {

    return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="ghost" className="outline-none focus:outline-none dark:bg-transparent dark:text-white border-none w-full justify-start">
                <Trash2 /> Delete
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete?</DialogTitle>
            <DialogDescription>
              This is cannot be undone, are you sure?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" onClick={onOk}>Yes</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
    )

}



