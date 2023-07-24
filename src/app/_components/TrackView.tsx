/* eslint-disable @next/next/no-img-element */
"use client";

import { useQuery } from "@tanstack/react-query";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { getData } from "../_lib/queryFns/getData";
import TrackGrid from "./TrackGrid";
import { Songs } from "../_lib/types/songs-interface";
import Loading from "./loading";

// TODO: fix types
const TrackView = (props: { posts: any }) => {
  const [query, setQuery] = useState("");
  let filtered!: any[];

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value);
  };

  //Search Filter
  const searchFilter = (array: any[]) => {
    return array.filter(
      (el: { track: string; artist: string }) =>
        el.track.toLowerCase().includes(query) ||
        el.artist.toLowerCase().includes(query)
    );
  };

  const { data, isLoading } = useQuery<Songs[]>({
    queryKey: ["tracks"],
    queryFn: getData,
    initialData: props.posts,
    keepPreviousData: true,
  });

  if (data) {
    filtered = searchFilter(data);
  }

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <div className="max-w-[100rem] me-auto ms-auto ps-5 pe-5 sm:ps-7 sm:pe-7 lg:ps-10 lg:pe-10">
      <div className="flex h-[170px] justify-center items-center">
        {/* TODO: animate in underline from left */}
        <motion.input
          type="text"
          className="appearance-none bg-transparent border-b-2 border-white w-[90%] py-4 text-[20px] sm:text-[28px] text-white focus:outline-none transition-all hover:placeholder:text-white"
          placeholder="filter on artist or track"
          value={query}
          onChange={handleChange}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <TrackGrid props={filtered} />
    </div>
  );
};

export default TrackView;
