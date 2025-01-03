"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const userApi = async (query: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/search?part=snippet&q=${query}&type=channel&key=${process.env.NEXT_PUBLIC_GOOGLE_CONSOLE_KEY}`;

  try {
    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

export const getSubscriberCount = (data: any) => {
  const nextUrl = ` https://www.googleapis.com/youtube/v3/channels?part=statistics&id=CHANNEL_ID&key=YOUR_API_KEY`;
  console.log(data.items.ids.map());
};

export const useGetUserDetails = (query: string) => {
  return useQuery({
    queryKey: ["userDetails", query],
    queryFn: () => userApi(query),
    retry: 1,
    enabled: !!query,
  });
};
