import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "workoutsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/workouts",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => "/",
    }),
    getWorkout: builder.query({
      query: (id) => `/${id}`,
    }),
    addWorkout: builder.mutation({
      query: () => ({
        url: "/post",
        method: "POST",
        body,
      }),
    }),
    deleteWorkout: builder.mutation({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  useGetWorkoutQuery,
  useDeleteWorkoutMutation,
} = apiSlice;
