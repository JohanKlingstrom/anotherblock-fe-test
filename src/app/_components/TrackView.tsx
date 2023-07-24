"use client";

import { useQuery } from "@tanstack/react-query";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { getData } from "../_lib/queryFns/getData";
import TrackGrid from "./TrackGrid";
import { Songs } from "../_lib/songs-interface";
import Loading from "./Loading";

const TrackView = (props: { props: any }) => {
  const [query, setQuery] = useState("");
  let filtered: Songs[];

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
    initialData: props.props,
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
      <div className="flex flex-col h-[170px] justify-center items-center">
        <motion.input
          type="text"
          className="appearance-none bg-transparent w-[90%] py-4 text-[20px] sm:text-[28px] text-white focus:outline-none transition-all hover:placeholder:text-white"
          placeholder="filter on artist or track"
          value={query}
          onChange={handleChange}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.span className="w-0 left-0 block h-[1px] bg-white" 
          initial={{ width: 0 }}
          animate={{ width: "90%" }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
      </div>
      <TrackGrid props={filtered!} />
    </div>
  );
};

export default TrackView;
