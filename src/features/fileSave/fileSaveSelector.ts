import { RootState } from "@/app/store";

export const selectFilePath = (state: RootState) => state.fileSave.filePath;