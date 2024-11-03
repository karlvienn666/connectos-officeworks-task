import { createSlice } from "@reduxjs/toolkit"
import { deleteImage, fetchImages, insertImages } from "./imageManagerAction";
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
    },
    loading: boolean;
    page: number;
    query: string;
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
    },
    loading: false,
    page:1,
    query: ""
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
        },
        setImageSearching:(state, action)=> {
            state.query = action.payload;
            state.images.data = [];
            state.page = 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.images.isLoading = false;
            state.images.data = [...state.images.data, ...action.payload];

            console.log(state.images.data);

            if(action.payload.length>0)
                state.page +=1;
        })
        .addCase(fetchImages.pending, (state) => {
            state.images.isLoading = true;
        })
        .addCase(insertImages.fulfilled, (state) => {
            state.imageThumbnails = [];
            state.loading = false;
        })
        .addCase(insertImages.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteImage.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteImage.fulfilled, (state, action) => {
            state.loading = false;
            state.images.data = state.images.data.filter((d) => d._id != action.payload.id);

        })
    },
})
  
export const { toggleImagePreview, setActiveImage, setActiveImageName, setImageThumbnails, setImageSearching } = imageManagerSlice.actions

export default imageManagerSlice.reducer