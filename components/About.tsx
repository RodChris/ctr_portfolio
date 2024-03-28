"use client";

import React from 'react'
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


const About = () => {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Greetings! I&apos;m thrilled to share my journey with you, which began with a passion for technology ignited during my high school years. This passion led me to pursue a{" "}
                <span className="font-bold italic">Bachelor&apos;s degree in Computer Science</span>, where I delved deeper into the world of programming and software development.
                Upon graduating from college, I embarked on my professional journey, initially focusing on web applications.
            </p>
            <p className="mb-3">
                As I gained hands-on experience and explored various technologies,
                I found myself drawn to the captivating realm of{" "}
                <span className="font-bold italic">frontend development</span>. In particular, I developed a deep affinity for frontend frameworks, with{" "}
                <span className="font-bold italic">React</span> quickly becoming my tool of choice for crafting dynamic and engaging user interfaces.
                Over the years, my role as a developer has evolved, transitioning from a focus on frontend development to embracing the full spectrum of software development as a{" "}
                <span className="font-bold italic">full-stack developer</span>.
            </p>
            <p className="mb-3">
                Today, I find myself deeply entrenched in the dynamic world of{" "}
                <span className="font-bold italic">financial technology (FinTech)</span>, where I&apos;ve had the privilege of contributing to multiple banks and financial centers.
                As a full-stack developer, I thrive on the diverse and ever-evolving nature of my work, leveraging my proficiency in frontend technologies like{" "}
                <span className="font-bold italic">React and Next.js</span> alongside backend technologies (including{" "}
                <span className="font-bold italic">Java and Node.js</span>) to drive innovation and deliver impactful solutions.
            </p>
            <p>
                I am continuously receptive to employment opportunities aligned with my skill set,
                offering the potential for professional growth and advancement in
                the field of software development.
            </p>
        </motion.section>
    );
}

export default About