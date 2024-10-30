import { convertPathToTitle } from "@/lib/stringUtils";
import { useLocation } from "react-router"


export const useUrlPath = () => {

    const location = useLocation();
    

    return {
        formattedUrl: convertPathToTitle(location.pathname),
        url: location.pathname
    }
}