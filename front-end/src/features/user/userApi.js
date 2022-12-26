import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, data }) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ email, data }) => ({
        url: `/user/login/${email}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
} = userApi;
