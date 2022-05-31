import { Box } from '@mui/system'
import React from 'react'
import ProjectCard from "./ProjectCard"
import { projects } from '../helpers/projectsArrayInfo'

export default function Portfolio() {


    return (
        <>
            <h1>Proyectos</h1>
            <Box sx={{ display: 'flex', flexWrap: "wrap", justifyContent: "flex-center", marginBottom: 3 }} >
                {projects.map((project) =>
                    <ProjectCard
                        key={`project-${project.name}`}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technology}
                        demoPage={project.demoPage}
                        github={project.github}
                        gitBack={project.githubBack}
                        name={project.name}
                    />
                )
                }
            </Box>
        </>
    )
}
