import { RootState } from "@/app/store";

export const selectIsImagePreviewOpen = (state: RootState) => state.imageManager.imagePreview.isOpen;
export const selectActiveImage = (state: RootState) => state.imageManager.imagePreview.url;
export const selectImageName = (state: RootState) => state.imageManager.imagePreview.name;
export const selectImageThumbnails = (state: RootState) => state.imageManager.imageThumbnails;