import Head from "next/head";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const container = useRef(null);
  const child = useRef(null);

  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (child.current) {
      setWidth(child.current.height);
      console.log(child.current.height);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-4">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-[1000px]  ">
        <div className=" order-2 grid grid-cols-4 h-[240px] lg:h-[450px] gap-6 relative overflow-hidden rounded-tl-md rounded-tr-md lg:rounded-tl-none lg:rounded-tr-none lg:rounded-tr-md lg:rounded-br-md lg:order-2">
          <div className="flex flex-col card relative h-[400px] mt-4 overflow-hidden whitespace-nowrap">
            <motion.img
              animate={{
                y: "-100%",
              }}
              initial={{ y: "0" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear",
              }}
              src="/1.png"
              ref={child}
            />

            <motion.img
              animate={{
                y: "-100%",
              }}
              initial={{ y: "0" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear",
              }}
              className=""
              src="/1.png"
            />
          </div>
          <div className="flex flex-col cards   whitespace-nowrap">
            <motion.img
              animate={{
                y: "0%",
              }}
              initial={{ y: "-100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,

                ease: "linear",
              }}
              src="/2.png"
              ref={child}
            />

            <motion.img
              animate={{
                y: "0%",
              }}
              initial={{ y: "-100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,

                ease: "linear",
              }}
              className=""
              src="/2.png"
            />
          </div>
          <div className="flex flex-col card h-[400px] overflow-hidden relative  whitespace-nowrap">
            <motion.img
              animate={{
                y: "-100%",
              }}
              initial={{ y: "0%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear",
              }}
              src="/3.png"
              ref={child}
            />

            <motion.img
              animate={{
                y: "-100%",
              }}
              initial={{ y: "0%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear",
              }}
              className=""
              src="/3.png"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center pt-4 pb-16 lg:pb-4 px-8 h-[400px] order-2 lg:right-1">
          <h3 className=" text-2xl lg:text-4xl font-bold text-[#4D4E61] ">
            Home Sweet <br />
            Home Warranty Plans
          </h3>
        </div>
      </div>
    </div>
  );
}
