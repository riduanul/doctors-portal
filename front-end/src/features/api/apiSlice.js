import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/services",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/",
    }),
    getService: builder.query({
      query: (id) => `/${id}`,
    }),
    addService: builder.mutation({
      query: () => ({
        url: "/",
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
  useGetServicesQuery,
  useGetServiceQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
} = apiSlice;
