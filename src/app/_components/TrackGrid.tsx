import React from "react";
import { motion } from "framer-motion";
import { Songs } from "../_lib/songs-interface";
import TrackCard from "./TrackCard";

const TrackGrid = ({ props }: any) => {
  const tracks = props;

  return (
    <motion.div 
      className="item-grid"
      layout
    >
      {tracks.map(
        (track: Songs) => (
          <TrackCard key={track.id} {...track} />
        )
      )}
    </motion.div>
  );
};

export default TrackGrid;