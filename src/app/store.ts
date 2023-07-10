import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import mainPageReducer from "./../features/MainPage/MainPageSlice";
import modalPopupReducer from "./../features/ModalPopup/ModalPopupSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mainPage: mainPageReducer,
    modalPopup: modalPopupReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
