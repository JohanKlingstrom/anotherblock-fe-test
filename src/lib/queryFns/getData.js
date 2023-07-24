import axios from "axios";

// turn into separate component
export const getData = async () => {
  const { data } = await axios.get(
    "https://cdn.anotherblock.io/mock-data.json"
  );
  return data;
};
