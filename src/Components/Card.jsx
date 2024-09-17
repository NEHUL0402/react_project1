import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { CgCloseO } from "react-icons/cg";
import { motion } from "framer-motion"
const Card = ({ data,reference }) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} className="relative bg-zinc-300 text-black w-60 h-60 rounded-[30px] px-7 py-8 overflow-hidden flex-shrink-0">
        <FaRegFileAlt />
        <p className="leading-tight font-semibold text-sm mt-3">{data.desc}</p>
        {/* Footer */}
        <div className="footer absolute bottom-0 h-24 w-full left-0">
          <div className="flex justify-between px-5 py-3">
            <h5 className="font-semibold">{data.filesize}</h5>
            {data.close ? <CgCloseO size="1em" /> : <IoMdDownload size="1em" />}
          </div>
          {data.tag.isopen && (
            <div className="absolute w-full bg-slate-600 bottom-0 h-10 flex justify-center pt-2">
              <h5 className="font-semibold text-gray-300">{data.tag.tagtitle}</h5>
            </div>
          )}
        </div>
        {/* Footer */}
      </motion.div>
    </>
  );
};

export default Card;
