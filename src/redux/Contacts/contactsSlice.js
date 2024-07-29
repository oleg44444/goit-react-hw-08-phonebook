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
      console.log('Axios Response:', result);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      console.error('Axios Error:', err);
      return {
        error: {
          status: err.response?.status,
          message: err.response?.data?.message || err.message,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.goit.global',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({
        url: '/contacts',
        method: 'get',
        providesTags: ['Contacts'],
      }),
    }),

    addContact: build.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'post',
        data: { name, number },
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
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
