import { Container, Box, useTheme, Link } from '@mui/material'
import React from 'react'

export default function ProyectoHeroTeam({ projectHeroTeam }) {

    const theme = useTheme()
    const { image, title, description, technologies, demoPage } = projectHeroTeam

    return (
        <Container sx={{
            display: "flex",
            margin: "auto",
            flexDirection: "column",
            maxWidth: 400,
            [theme.breakpoints.up("sm")]: { maxWidth: 750 },
            [theme.breakpoints.up("md")]: { maxWidth: 850 },
            [theme.breakpoints.up("lg")]: { maxWidth: 1000 }
        }}>
            <h1>{title}</h1>
            <img src={image} alt="AMD"></img>

            <Box sx={{ marginTop: "20px", marginRight: "auto", textAlign: "justify" }}>
                <h2>Sobre este proyecto</h2>
                {description}
            </Box>
            <Box sx={{ marginRight: "auto", textAlign: "start" }}>
                <h2>Tecnologías utilizadas</h2>
                <ul>
                    {technologies.map(
                        (technology) => (<li key={`technology-${technology}`}>{technology}</li>)
                    )}
                </ul>
            </Box>
            {demoPage && <Box sx={{ marginBottom: 2, textAlign: "justify" }}>
                <h2>Ver demo</h2>
                <Link href={demoPage} target="_blank">{demoPage}</Link>
            </Box>}
        </Container>
    )
}
