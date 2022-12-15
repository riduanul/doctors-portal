import { apiSlice } from "../api/apiSlice";

export const servicesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/services/",
    }),
    getService: builder.query({
      query: (id) => `/services/${id}`,
    }),
    addService: builder.mutation({
      query: () => ({
        url: "/services/",
        method: "POST",
        body,
      }),
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "delete",
      }),
    }),
  }),
});

export const {
  useGetServiceQuery,
  useGetServicesQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = servicesApi;
