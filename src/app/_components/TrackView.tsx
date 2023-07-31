"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getData } from "../_lib/queryFns/getData";
import TrackGrid from "./TrackGrid";
import { Tracks, TrackProps } from "../_lib/interface/trackInterfaces";
import Loading from "./Loading";
import { searchFilter } from "../_lib/helpers/searchFilter";
import SearchInput from "./SearchInput";

const TrackView = ({ props }: TrackProps) => {
  const [query, setQuery] = useState<string>("");
  let filtered: Tracks[];

  const { data, isLoading } = useQuery<Tracks[]>({
    queryKey: ["tracks"],
    queryFn: getData,
    initialData: props,
    keepPreviousData: true,
  });

  if (data) {
    filtered = searchFilter(data, query);
  }

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <div className="max-w-[100rem] me-auto ms-auto ps-5 pe-5 sm:ps-7 sm:pe-7 lg:ps-10 lg:pe-10">
      <SearchInput onQuery={setQuery} />
      <TrackGrid props={filtered!} />
    </div>
  );
};

export default TrackView;
