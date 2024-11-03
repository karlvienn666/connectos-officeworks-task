import { ApiService } from "@/app/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImages = createAsyncThunk('imageManager/fetchImages', async (query: {pages: number, limit: number, query?: string}) => {
    const response = await ApiService.get(`images?pages=${query.pages}&limit=${query.limit}&query=${query.query}`); 

    console.log(response);
    return  response.data.docs;

});

export const insertImages = createAsyncThunk('imageManager/insertImages', async (formData: FormData) => {

    const response = await ApiService.postFormData('images', formData);
    console.log(response);
});


export const deleteImage = createAsyncThunk('imageManager/deleteImage', async (id: string) => {

    const response = await ApiService.delete('images', id);
    console.log(response);
    return response.data;
});