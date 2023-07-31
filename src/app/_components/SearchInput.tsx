import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface Props {
    onQuery: Dispatch<SetStateAction<string>>
}

const SearchInput: React.FC<Props> = ({ onQuery }) => {
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    onQuery(e.target.value);
  };
  return (
    <div className="flex flex-col h-[170px] justify-center items-center">
      <motion.input
        type="text"
        className="appearance-none bg-transparent w-[90%] py-4 text-[20px] sm:text-[28px] text-white outline-none focus:outline-none transition-all hover:placeholder:text-white"
        placeholder="filter on artist or track"
        onChange={handleChange}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.span
        className="w-0 left-0 block h-[1px] bg-white"
        initial={{ width: 0 }}
        animate={{ width: "90%" }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
    </div>
  );
};

export default SearchInput;
