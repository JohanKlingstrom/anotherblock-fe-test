import React from "react";
import { motion } from "framer-motion";
import { Songs } from "../_lib/interface/songs-interface";
import TrackCard from "./TrackCard";

const TrackGrid = ({ props }: any) => {

  return (
    <motion.div 
      className="item-grid"
      layout
    >
      {props.map(
        (track: Songs) => (
          <TrackCard key={track.id} {...track} />
        )
      )}
    </motion.div>
  );
};

export default TrackGrid;