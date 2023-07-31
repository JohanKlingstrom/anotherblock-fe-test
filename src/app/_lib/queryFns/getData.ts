import axios from "axios";

export const getData = async () => {
  const { data } = await axios.get(
    "https://cdn.anotherblock.io/mock-data.json"
  );
  return data;
};
