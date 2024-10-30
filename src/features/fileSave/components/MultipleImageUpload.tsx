import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

const MultipleImageUpload: React.FC = () => {
    return (
        <>
            <section className="w-full mx-7">
                <form action="">
                    <Label htmlFor="picture">Image to Upload</Label>
                    <div className="flex gap-1.5 items-center py-3">
                        <Input id="picture" type="file" className="border-gray-300 dark:border-white bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center px-1" accept="image/*" multiple />
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default MultipleImageUpload;