"use client";
import { Modal } from "@mui/material";
import Image from "next/image";
import s from "./../app/[locale]/app.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  activeStackIndex: number;
  index: number;
  setActiveStackIndex: any;
  item: any;
};

const ModalInfo = (props: Props) => {
  const { activeStackIndex, index, setActiveStackIndex, item } = props;
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const stackItemsRef = useRef<HTMLLIElement[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeStackIndex === index && modalRef.current) {
      const tl = gsap.timeline();
      
      // Backdrop fade in
      tl.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Modal entrance with elastic bounce
      tl.fromTo(
        modalRef.current,
        { 
          scale: 0.5, 
          opacity: 0,
          rotateX: -15,
          y: -50
        },
        { 
          scale: 1, 
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.75)"
        },
        "-=0.2"
      );

      // Content section slide from left
      tl.fromTo(
        contentRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.4"
      );

      // Image section slide and scale
      tl.fromTo(
        imageRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
        "-=0.5"
      );

      // Title animation with split effect
      tl.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
        "-=0.3"
      );

      // Description fade in
      tl.fromTo(
        descriptionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );

      // Stack items stagger animation
      tl.fromTo(
        stackItemsRef.current,
        { x: -30, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.2"
      );

      // Close button bounce
      tl.fromTo(
        closeButtonRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(2)" },
        "-=0.5"
      );
    }
  }, [activeStackIndex, index]);

  const toggleInfo = (index: number) => {
    if (activeStackIndex === index) {
      // Exit animation
      const tl = gsap.timeline({
        onComplete: () => setActiveStackIndex(-1)
      });

      tl.to(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: "power2.in"
      });

      tl.to(
        backdropRef.current,
        { opacity: 0, duration: 0.2 },
        "-=0.1"
      );
    } else {
      setActiveStackIndex(index);
    }
  };

  return (
    <Modal 
      open={activeStackIndex === index} 
      onClose={() => toggleInfo(index)} 
      className="flex justify-center items-center"
      BackdropProps={{
        style: { backgroundColor: 'transparent' }
      }}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Custom Backdrop */}
        <div 
          ref={backdropRef}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => toggleInfo(index)}
        />
        
        {activeStackIndex === index && (
          <div
            ref={modalRef}
            style={{ perspective: '1000px' }}
            className="relative grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl focus:outline-none overflow-hidden border border-slate-300 dark:border-slate-700
            2xl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12"
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={() => toggleInfo(index)}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 dark:bg-slate-200/80 text-white dark:text-slate-900 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg"
              aria-label="Close modal"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Content Section */}
            <section
              ref={contentRef}
              className="flex p-8 flex-col gap-6 items-start justify-between relative z-10"
            >
              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              
              <div className="space-y-4 w-full relative">
                <h2
                  ref={titleRef}
                  className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-primary-font relative inline-block"
                >
                  {item.title}
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h2>
                
                <p 
                  ref={descriptionRef}
                  className="text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed
                  lg:text-base md:text-sm"
                >
                  {item.jobDescription}
                </p>
              </div>

              <div className="w-full">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                  Tech Stack
                </h3>
                <ul className="space-y-3">
                  {Object.keys(item.stack).map((key, idx) => (
                    <li 
                      key={idx} 
                      ref={(el) => {
                        if (el) stackItemsRef.current[idx] = el;
                      }}
                      className="flex flex-col gap-2 p-3 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 hover:shadow-md transition-all duration-300"
                    >
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-sm capitalize font-primary-font flex items-center gap-2">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                        {key}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.stack[key].map((tech: string, techIdx: number) => (
                          <span 
                            key={techIdx}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600 text-slate-800 dark:text-slate-200 rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Image Section */}
            <section className="flex relative overflow-hidden">
              <div 
                ref={imageRef}
                className="flex justify-center items-center w-full h-full relative group"
              >
                <div className="w-full h-full relative">
                  <Image
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={`/imgs/experience/${item.img}${item.img.includes('.') ? '' : '.jpg'}`}
                    alt={item.title}
                    width={800}
                    height={800}
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-200 dark:from-slate-900 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 dark:from-slate-900/50 via-transparent to-transparent"></div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalInfo;
