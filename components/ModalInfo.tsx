"use client";
import { Modal } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./../app/[locale]/app.module.scss";
import {
  faAngular,
  faAws,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faA, faTerminal } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type Props = {
  activeStackIndex: number;
  index: number;
  setActiveStackIndex: any;
  item: any;
};

const ModalInfo = (props: Props) => {
  const { activeStackIndex, index, setActiveStackIndex, item } = props;

  const stacksIcons = {
    react: faReact,
    angular: faAngular,
    aws: faAws,
    python: faPython,
    terminal: faTerminal,
  };

  const toggleInfo = (index: number) => {
    if (activeStackIndex === index) {
      return setActiveStackIndex(-1);
    }
    setActiveStackIndex(index);
  };

  return (
    <Modal open={activeStackIndex === index} onClose={() => toggleInfo(index)}>
      <AnimatePresence>
        {activeStackIndex === index && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -100 }}
            className="grid grid-cols-2 w-1/2 relative top-1/3 left-1/4  bg-slate-300 dark:bg-slate-800 p-4 rounded-md focus:outline-none"
          >
            <section>
              <h3 className="text-sm font-medium mb-2 text-slate-600 dark:text-slate-300">
                {item.jobDescription}
              </h3>
              <ul className="text-slate-800 dark:text-slate-300 ">
                {Object.keys(item.stack).map((key, index) => (
                  <li key={index} className="flex items-center gap-1 text-xs">
                    <span className="font-semibold text-slate-900 text-base capitalize font-primary-font">
                      {key}:
                    </span>
                    {item.stack[key].map((item: any, index: number) => (
                      <p>{item}</p>
                    ))}
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex">
              {/* img */}
              <div className="flex justify-center items-center">
                <div className="w-full relative">
                  <Image
                    className="h-full w-full rounded-md hover:opacity-75 ease-in-out duration-150"
                    src={`/imgs/experience/${item.img}.jpg`}
                    alt="Picture of the author"
                    width={500}
                    height={600}
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
