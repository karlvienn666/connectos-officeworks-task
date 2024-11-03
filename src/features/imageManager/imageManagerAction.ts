import { ApiService } from "@/app/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImages = createAsyncThunk('imageManager/fetchImages', async () => {
    const response = await ApiService.get('images'); 

    console.log(response);

    return  response.data.docs;

});

export const insertImages = createAsyncThunk('imageManager/insertImages', async (formData: FormData) => {
    const response = await ApiService.postFormData('images', formData);

    console.log(response);
});