import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { ChangeEvent } from "react";
import { useSearch } from "../hooks/useSearch";


export const SearchBar: React.FC = () => {

    const {handleInputChange} = useSearch();

    return (
    <div className="flex items-center gap-2">
        <Input
            placeholder="Search images..."
            // value={query}
            onChange={handleInputChange}
            // onKeyDown={handleKeyDown}
            className="w-full border border-gray-300 rounded-lg"
        />  
    </div>
    )
}