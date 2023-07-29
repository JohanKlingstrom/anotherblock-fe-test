  //Search Filter
  export const searchFilter = (array: any[], query: string) => {
    return array.filter(
      (el: { track: string; artist: string }) =>
        el.track.toLowerCase().includes(query) ||
        el.artist.toLowerCase().includes(query)
    );
  };