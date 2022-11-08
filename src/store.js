import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./feature/users/UserSlice";
import JobSlice from "./feature/jobs/JobSlice";
export const store=configureStore({
    reducer: {
         user: UserSlice,
         job: JobSlice
      },
});