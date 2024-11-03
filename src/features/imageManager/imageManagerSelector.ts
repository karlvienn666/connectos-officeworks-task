import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectIsImagePreviewOpen = (state: RootState) => state.imageManager.imagePreview.isOpen;
export const selectActiveImage = (state: RootState) => state.imageManager.imagePreview.url;
export const selectImageName = (state: RootState) => state.imageManager.imagePreview.name;
export const selectImageThumbnails = (state: RootState) => state.imageManager.imageThumbnails;
export const selectImages = (state: RootState) => state.imageManager.images;
export const selectLoading = (state: RootState) => state.imageManager.loading;
export const selectPage = (state: RootState) => state.imageManager.page;
export const selectIsImageLoading = (state: RootState) => state.imageManager.images.isLoading;
export const selectImageQuery = (state: RootState) => state.imageManager.query;

//Memoized data
export const selectMemoImages = createSelector(
    [selectImages],
    (images) => images.data
);