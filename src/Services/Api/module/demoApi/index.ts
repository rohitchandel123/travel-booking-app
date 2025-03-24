import api from '../../api';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    demoApi: build.query({
      query: () => 'todos',
    }),
    getAttraction: build.query({
      query:(id)=> `attraction/searchAttractions?id=${id}&sortBy=trending&page=1&currency_code=INR&languagecode=en-us`,
    }),
  }),
  overrideExisting: false,
});

// We can use the Lazy Query as well for GET requests depends on our Requirements.
// For POST request we will use mutations.
export const { useDemoApiQuery, useGetAttractionQuery } = userApi;
