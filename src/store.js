import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./feature/users/UserSlice";

export const store=configureStore({
    reducer: {
         user: UserSlice,
      },
});