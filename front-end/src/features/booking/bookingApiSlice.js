import { apiSlice } from "../services/apiSlice";

export const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: () => "/booking/",
    }),
    getBooking: builder.query({
      query: (id) => `/booking/${id}`,
    }),
    addtBooking: builder.mutation({
      query: () => ({
        url: "/booking/",
        method: "POST",
        body,
      }),
    }),
    updateBooking: builder.mutation({
      query: ({ id, data }) => ({
        url: `/booking/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "delete",
      }),
    }),
  }),
});

export const {
  useGetBookingQuery,
  useGetBookingsQuery,
  useAddServiceMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;
