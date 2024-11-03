import { createSlice } from "@reduxjs/toolkit"
import { fetchImages, insertImages } from "./imageManagerAction";
import { Image, Thumbnail } from "./types";

interface ImageManagerState {
    imagePreview: {
        isOpen: boolean;
        url: string;
        name: string
    };
    imageThumbnails: Thumbnail[],
    images: {
        isLoading: boolean;
        data: Image[]
    }
}
  
const initialState: ImageManagerState = {
    imagePreview: {
        isOpen: false,
        url: '',
        name: ''
    },
    imageThumbnails: [],
    images: {
        isLoading: false,
        data: []
    }
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
    extraReducers: (builder) => {
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.images.isLoading = false;
            state.images.data = action.payload;
        })
        .addCase(fetchImages.pending, (state) => {
            state.images.isLoading = true;
        })
        .addCase(insertImages.fulfilled, (state) => {
            state.imageThumbnails = [];
        })
    },
})
  
export const { toggleImagePreview, setActiveImage, setActiveImageName, setImageThumbnails } = imageManagerSlice.actions

export default imageManagerSlice.reducer