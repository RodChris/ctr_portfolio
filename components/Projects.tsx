"use client";

import React, { useState } from "react";

import SectionHeading from "./SectionHeading";
import Project from "./Project";

import { projectTypes } from "@/lib/data";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

interface FilterTypeProps {
    value: string;
    name: string;
}

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState<FilterTypeProps>({ value: 'all', name: 'All' });
    const { ref } = useSectionInView("Projects");

    const handleFilterSelect = (filter: FilterTypeProps) => {
        setSelectedFilter(filter);
    }

    const getFilteredProjects = () => {
        if (!selectedFilter.value || selectedFilter.value === 'all') {
            return projectsData
        } else {
            return projectsData.filter(project => project.type === selectedFilter.value)
        }
    }


    return (
        <section
            ref={ref}
            id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>

            {projectTypes?.length > 0 &&
                <div className="flex flex-row my-6 justify-center items-center">
                    {projectTypes.map(type =>
                        <button
                            key={type.value}
                            className={`mx-6 h-[2.5rem] w-[8rem] rounded-full                                   
                                      hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-500
                                       ${selectedFilter.value === type.value ? 'bg-gray-900 text-gray-300 dark:bg-gray-300 dark:text-gray-500' :
                                    'bg-gray-300 text-gray-800 dark:bg-gray-500 dark:text-gray-300 '}
                                    `}
                            disabled={selectedFilter.value === type.value}
                            onClick={() => handleFilterSelect({ value: type.value, name: type.name })}>
                            {type.name}
                        </button>
                    )}
                </div>
            }
            <div className="flex flex-wrap justify-center max-w-[80rem]">
                {getFilteredProjects().map((project, index) => (
                    <div key={index} className={`md:w-auto py-2 px-3 justify-center ${getFilteredProjects().length === 1 ? 'w-full' : 'lg:w-1/2 '}`}>
                        <Project {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects