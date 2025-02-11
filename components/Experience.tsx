"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

function renderDescription(description: string) {
    return (
        <span dangerouslySetInnerHTML={{
            __html: description.replace(
                'IPaC',
                '<a href="https://ipac.ecosphere.fws.gov/" target="_blank" rel="noopener noreferrer" style="color: #4a90e2; text-decoration: none;" onmouseover="this.style.textDecoration=\'underline\';" onmouseout="this.style.textDecoration=\'none\';">IPaC</a>'
            )
        }} />
    );
}


const Experience = () => {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    return (
        <motion.section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-40 max-w-[80rem]">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline animate lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible
                            contentStyle={{
                                background:
                                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h2 className="font-semibold dark:text-white/75">{item.title}</h2>

                            <div className="flex flex-row">
                                {item.company && <h3 className="font-semibold italic">{item.company} -&nbsp;</h3>}
                                <p className="font-normal !mt-0">{item.location}</p>
                            </div>

                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {renderDescription(item.description)}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </motion.section >
    )
}

export default Experience
