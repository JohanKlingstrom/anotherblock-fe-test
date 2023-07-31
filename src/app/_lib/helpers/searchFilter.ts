import { Tracks } from "../interface/trackInterfaces";

export const searchFilter = (array: Tracks[], query: string) => {
  return array.filter(
    (el: { track: string; artist: string }) =>
      el.track.toLowerCase().includes(query) ||
      el.artist.toLowerCase().includes(query)
  );
};
