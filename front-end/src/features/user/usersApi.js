import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.query({
      query: (email) => `/user/${email}`,
    }),
  }),
});

export const { useUpdateUserQuery } = usersApi;
