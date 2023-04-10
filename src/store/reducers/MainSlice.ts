import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ILessonColumnItem } from "types/interfaces/ILessonColumns";

interface MainState {
  schoolboyQuantity: number | null;
  columnWithMaxSumOfTitle: ILessonColumnItem | null;
}

const initialState: MainState = {
  schoolboyQuantity: null,
  columnWithMaxSumOfTitle: null,
};

export const mainSlise = createSlice({
  name: "main",
  initialState,
  reducers: {
    setSchoolboyQuantity(state, action: PayloadAction<number>) {
      state.schoolboyQuantity = action.payload;
    },

    setColumnWithMaxSumOfTitle(
      state,
      action: PayloadAction<ILessonColumnItem>
    ) {
      state.columnWithMaxSumOfTitle = action.payload;
    },
  },
});

export const { setSchoolboyQuantity } = mainSlise.actions;

export default mainSlise.reducer;
