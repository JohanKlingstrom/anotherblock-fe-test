/* eslint-disable @next/next/no-img-element */
"use client";

import { useQuery } from "@tanstack/react-query";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { getData } from "../lib/queryFns/getData";

interface Songs {
  id: number;
  artist: string;
  track: string;
  image: string;
  video: string;
  streams: {
    monthly: number;
    total: number;
  };
}

// TODO: fix types
const Posts = (props: { posts: any }) => {
  const [query, setQuery] = useState("");

  //Search Filter
  const searchFilter = (array: any[]) => {
    return array.filter(
      (el: { track: string; artist: string }) =>
        el.track.toLowerCase().includes(query) ||
        el.artist.toLowerCase().includes(query)
    );
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    //TODO: debounce?
    setQuery(e.target.value);
  };

  const { data, isLoading } = useQuery<Songs[]>({
    queryKey: ["tracks"],
    queryFn: getData,
    initialData: props.posts,
    keepPreviousData: true,
  });

  let filtered!: any[];

  if (data) {
    filtered = searchFilter(data);
  }

  if (isLoading || !data)
  // Create loading.js component
    return (
      <div className="bg-black h-screen flex flex-col justify-center items-center">
        <img src="https://cdn.anotherblock.io/logo.png" alt="logo" />
        <h1 className="text-white">Loading...</h1>
      </div>
    );

  return (
    <div className="max-w-[100rem] me-auto ms-auto ps-5 pe-5 sm:ps-7 sm:pe-7 lg:ps-10 lg:pe-10">
      {/* Search Bar */}
      {/* TODO: animate in underline from left */}
      <div className="flex h-[170px] justify-center items-center">
        <motion.input
          type="text"
          className="appearance-none bg-transparent border-b-2 border-white w-[90%] py-4 text-[28px] text-white focus:outline-none transition-all hover:placeholder:text-white"
          placeholder="filter on artist or track"
          value={query}
          onChange={handleChange}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Item Grid */}
      <div className="item-grid">
        {filtered.map(
          (
            { id, image, track, artist, streams: { total, monthly } },
            index
          ) => (
            //TODO: add hover animation
            <motion.div
              key={id}
              className="card w-full aspect-square flex flex-col items-center justify-center bg-cover"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0, translateY: 25 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <div className="w-full h-full flex  justify-center items-center backdrop-blur-md">
                <div className="flex flex-col max-w-[70%] sm:max-w-[60%] lg:max-w-[50%] mt-[0.8rem]">
                  <img
                    src={image}
                    alt={"cover for " + track}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="mt-1 sm:mt-2 flex justify-between min-h-[4rem]">
                    <div className="font-medium text-white">
                      <h2 className="text-[10px] sm:text-[12px]  md:text-[14px] uppercase">
                        {track}
                      </h2>
                      <h3 className="text-[8px] sm:text-[10px] md:text-[11px] uppercase">
                        {"/" +
                          (artist.length < 30
                            ? artist
                            : artist.substring(0, 30) + "...")}
                      </h3>
                    </div>
                    <div className="text-right min-w-[50%]">
                      <p className="text-[10px] sm:text-[12px] font-medium text-white">
                        {Math.round(total / 1000000) + "m total streams"}
                      </p>
                      <p className="text-[9px] sm:text-[11px] text-[#8D8D8D] font-medium">
                        {Math.round(monthly / 1000) + "k monthly streams"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Posts;
