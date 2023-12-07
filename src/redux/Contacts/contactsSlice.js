import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({
        url: '/contacts/',
        method: 'get',
        providesTags: ['Contacts'],
      }),
    }),

    addContact: build.mutation({
      query: ({ name = '', number = '' }) => ({
        url: '/contacts',
        method: 'post',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Contacts'],
    }),
    filteredContacts: build.mutation({
      query: ({ name = '' }) => ({
        url: '/contacts',
        method: 'put',
        body: { name },
        invalidatesTags: ['Contacts'],
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useFilteredContactsMutation,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
