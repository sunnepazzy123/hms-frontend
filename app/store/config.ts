import axios from 'axios';
import { getSession } from 'next-auth/react';

export const getUserToken = async () => {
  const session = await getSession();
  return session?.user || '';
};

export const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
});

// Add a request interceptor
Axios.interceptors.request.use(
  async (config) => {
    // Modify the request configuration here
    const user = await getUserToken() as any;
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
