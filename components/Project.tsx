"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, siteUrl, srcUrl }: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="bg-gray-200 max-w-[40rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[25rem] h-[15rem] hover:bg-gray-300 
                                hover:border-black/50 hover:border-2 transition sm:group-even:pl-8 dark:text-white dark:bg-white/30 dark:hover:bg-gray-500 dark:hover:border-white/50">
                <div className="sm:pl-7 sm:pr-1 sm:pt-8 sm:max-w-[50%] sm:h-[20rem] h-[10rem] flex flex-col sm:group-even:ml-[18rem] ">
                    <div className="flex flex-row sm:pr-8">


                        <div className="flex flex-col">

                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white">
                                {description}
                            </p>
                            <ul className="flex flex-wrap gap-2 md:mt-5 leading-5">
                                <h3 className="font-bold ">*Techs:</h3>{tags.map((tag, index) => (
                                    <li key={index}>
                                        <p className="font-semibold italic text-gray-700 dark:text-white/70">{tag}{(index !== tags.length - 1) && `,`}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <Image
                            src={imageUrl}
                            alt="Project I worked on"
                            quality={95}
                            className="absolute hidden sm:block top-5 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                                    transition 
                                    group-hover:scale-[1.04]
                                    group-hover:-translate-x-3
                                    group-hover:translate-y-3
                                    group-hover:-rotate-2

                                    group-even:group-hover:translate-x-3
                                    group-even:group-hover:translate-y-3
                                    group-even:group-hover:rotate-2

                                    group-even:right-[initial] group-even:-left-40"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center h-[5rem] mt-1 space-x-20 bg-gray-300 dark:bg-gray-500">
                    <Link
                        href={siteUrl}
                        className="group bg-gray-700 text-white text-[0.9rem] px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition"
                        target="_blank"
                    >
                        Project Site {" "}
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>
                    <Link
                        href={srcUrl}
                        className="group bg-gray-700 text-white text-[0.9rem] px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition"
                        target="_blank"
                    >
                        Source Code {" "}
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>
                </div>
            </section>
        </motion.div>
    )
}

export default Project
