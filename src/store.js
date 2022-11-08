import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./feature/users/UserSlice";
import JobSlice from "./feature/users/JobSlice";
export const store=configureStore({
    reducer: {
         user: UserSlice,
         job: JobSlice
      },
});