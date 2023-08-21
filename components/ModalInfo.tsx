"use client";
import { Modal } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import s from "./../app/[locale]/app.module.scss";
import { useEffect } from "react";

type Props = {
  activeStackIndex: number;
  index: number;
  setActiveStackIndex: any;
  item: any;
};

const ModalInfo = (props: Props) => {
  const { activeStackIndex, index, setActiveStackIndex, item } = props;

  const toggleInfo = (index: number) => {
    if (activeStackIndex === index) {
      return setActiveStackIndex(-1);
    }
    setActiveStackIndex(index);
  };

  return (
    <Modal open={activeStackIndex === index} onClose={() => toggleInfo(index)} className="flex justify-center items-center">
      <AnimatePresence>
        {activeStackIndex === index && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -100 }}
            className="grid grid-cols-2 w-11/12 mx-auto bg-slate-300 dark:bg-slate-800  rounded-md focus:outline-none justify-center
            2xl:w-5/12 xl:w-1/2 lg:w-7/12 md:w-8/12 sm:w-10/12"
          >
            <section
                className="flex p-4 flex-col gap-4 items-start justify-between"
                >
              <h2
                className="text-2xl font-bold text-slate-800 dark:text-slate-500 font-primary-font underline w-full"
                >
                {item.title}
              </h2>
              <p 
                className="text-sm w-11/12 font-medium mb-2 text-slate-600 dark:text-slate-300
                lg:text-sm md:text-xs">
                {item.jobDescription}
              </p>
              <ul className="text-slate-800 dark:text-slate-300 ">
                {Object.keys(item.stack).map((key, index) => (
                  <li key={index} className="flex items-center gap-1 text-xs">
                    <span className="font-semibold text-slate-900 dark:text-slate-500 text-base capitalize font-primary-font">
                      {key}:
                    </span>
                    {item.stack[key].map((item: any, index: number) => (
                      <p key={key}>{item}</p>
                    ))}
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex">
              {/* img */}
              <div className="flex justify-center items-center">
                <div className="w-full relative h-full">
                  <Image
                    className="h-full w-full rounded-md hover:opacity-75 ease-in-out duration-150"
                    src={`/imgs/experience/${item.img}.jpg`}
                    alt="Picture of the author"
                    width={800}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent"></div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default ModalInfo;
