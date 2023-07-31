import React from "react";
import { motion } from "framer-motion";
import { Tracks, TrackProps } from "../_lib/interface/trackInterfaces";
import TrackCard from "./TrackCard";

const TrackGrid = ({ props }: TrackProps) => {
  return (
    <motion.div 
      className="item-grid"
      layout
    >
      {props.map(
        (track: Tracks) => (
          <TrackCard key={track.id} {...track} />
        )
      )}
    </motion.div>
  );
};

export default TrackGrid;