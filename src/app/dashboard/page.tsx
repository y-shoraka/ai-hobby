"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { useGetUserDetails } from "@/common/apis/user-details/user-details";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type FormData = {
  search: string;
};

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const { register, handleSubmit, watch } = useForm<FormData>();
  const { data, isSuccess } = useGetUserDetails(searchValue);

  const submitHandler = (data: FormData) => {
    const { search } = data;
    setSearchValue(search);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex gap-4 justify-between mb-4">
          <Input
            {...register("search", { required: "Search is required" })}
            placeholder="Enter search term"
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <div className="px-4 flex flex-col gap-3">
        {data?.data &&
          isSuccess &&
          data.data?.items.map((item: any) => (
            <Card key={item?.snippet?.channelId}>
              <CardHeader>
                <CardTitle>{item.snippet.channelTitle}</CardTitle>
                <Image
                  height={70}
                  width={70}
                  src={item.snippet.thumbnails.default.url}
                  alt={item.snippet.channelTitle}
                />
              </CardHeader>
              <CardContent>
                <p>{item.snippet.description}</p>
              </CardContent>
              <CardFooter>
                <Button>view details</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
