import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
    filePath: string
}
  
const initialState: CounterState = {
    filePath: '',
}


export const fileSaveSlice = createSlice({
    name: 'fileSave',
    initialState,
    reducers: {
        save: (state, action) => {
            state.filePath = action.payload
        },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})
  
export const { save } = fileSaveSlice.actions

export default fileSaveSlice.reducer