// lib/apiService.ts
import axiosInstance from "./axiosInstance";

type URL_TYPE = "GET" | "POST" | "PATCH" | "DELETE";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function apiRequest<T>(
  method: URL_TYPE,
  url: string,
  data?: object,
  params?: object
): Promise<T> {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
}
