import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  name: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }),
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }),
    }),
    getAllFreelancers: builder.query({
      query: (payload) => ({
        url: "/api/freelancers/search?page=1",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetAllFreelancersQuery,
} = apiSlice;
