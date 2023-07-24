import React from "react";
import { motion } from "framer-motion";
import { Songs } from "../_lib/types/songs-interface";
import Image from "next/image";

const TrackGrid = ({ props }: any) => {
  return (
    <div className="item-grid">
      {props.map(
        (
          { id, image, track, artist, streams: { total, monthly } }: Songs
        ) => (
          <motion.div
            key={id}
            className="card w-full aspect-square flex flex-col items-center justify-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0, translateY: 25 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            layout
          >
            <div className="w-full h-full flex  justify-center items-center backdrop-blur-md hover:bg-[#ffffff1c] transition-colors">
              <div className="flex flex-col max-w-[70%] sm:max-w-[60%] lg:max-w-[50%] mt-[0.8rem]">
                <Image
                  src={image}
                  alt={track}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                />
                <div className="mt-1 sm:mt-2 flex justify-between min-h-[4rem]">
                  <div className="font-medium text-white">
                    <h2 className="text-[10px] sm:text-[12px]  md:text-[14px] uppercase">
                      {track}
                    </h2>
                    <h3 className="text-[8px] sm:text-[10px] md:text-[11px] uppercase">
                      {"/" +
                        (artist.length < 30
                          ? artist
                          : artist.substring(0, 30) + "...")}
                    </h3>
                  </div>
                  <div className="text-right min-w-[50%]">
                    <p className="text-[10px] sm:text-[12px] font-medium text-white">
                      {Math.round(total / 1000000) + "m total streams"}
                    </p>
                    <p className="text-[9px] sm:text-[11px] text-[#8D8D8D] font-medium">
                      {Math.round(monthly / 1000) + "k monthly streams"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default TrackGrid;
