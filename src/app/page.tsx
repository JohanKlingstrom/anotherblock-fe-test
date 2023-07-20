"use client";

import { useQuery } from "@tanstack/react-query";

interface Songs {
  id: number;
  artist: string;
  track: string;
  imageUrl: string;
  videoUrl: string;
  streams: {
    monthly: number;
    total: number;
  }
}

export default function Home() {
  const { data, isLoading } = useQuery<Songs[]>({
    queryKey: ["tracks"],
    queryFn: () => fetch("https://cdn.anotherblock.io/mock-data.json").then((res) => res.json())
  })

  if(isLoading || !data) return <div>Loading...</div>;

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <img src="https://cdn.anotherblock.io/logo.png" alt="logo" />
      {data.map((song) => (
        <div key={song.id} className="mb-2 text-center">
          <h2 className="text-white">{song.artist}</h2>
          <p className="text-white">{song.track}</p>
        </div>
      ))}
    </div>
  );
}
