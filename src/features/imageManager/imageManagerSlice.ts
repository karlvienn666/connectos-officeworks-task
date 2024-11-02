import { createSlice } from "@reduxjs/toolkit"
import { Thumbnail } from "./hooks/useThumbnail";

interface ImageManagerState {
    imagePreview: {
        isOpen: boolean;
        url: string;
        name: string
    };
    imageThumbnails: Thumbnail[]
}
  
const initialState: ImageManagerState = {
    imagePreview: {
        isOpen: false,
        url: '',
        name: ''
    },
    imageThumbnails: []
}


export const imageManagerSlice = createSlice({
    name: 'imageManager',
    initialState,
    reducers: {
        toggleImagePreview: (state) => {
            state.imagePreview.isOpen = !state.imagePreview.isOpen;
        },
        setActiveImage: (state, action) => {
            state.imagePreview.url = action.payload
        },
        setActiveImageName: (state, action) => {
            state.imagePreview.name = action.payload
        },
        setImageThumbnails: (state, action) => {
            state.imageThumbnails = action.payload
        }
    },
})
  
export const { toggleImagePreview, setActiveImage, setActiveImageName, setImageThumbnails } = imageManagerSlice.actions

export default imageManagerSlice.reducer