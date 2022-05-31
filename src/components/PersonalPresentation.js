import { Box, Container, Link } from '@mui/material'
import React from 'react'
import reduxIcon from "../assets/icons-redux.svg"
import materialIcon from "../assets/icons-material-ui.svg"
import bootstrapIcon from "../assets/icons-bootstrap.svg"
import { useTheme } from '@mui/material'

export default function PersonalPresentation({ personalInfo, icons }) {

    const { name, career, selfDescription, present } = personalInfo
    const { css, html, javascript, reactjs, nodejs, mongo, git } = icons

    const theme = useTheme()

    return (
        <div className='presentationContainer'>
            <Container sx={{ textAlign: "center", padding: 3 }}>
                <h1>{name}</h1>
                <h3 className='presentationTitle'>{career}</h3>
                <h3 className='presentationTitle'>{selfDescription}</h3>
                <h3 className='presentationTitle'>{present}</h3>
            </Container>
            <Container>
                <h2 style={{ marginTop: "3rem", fontWeight: 700 }}>Hard Skills</h2>
                <Container sx={{ display: "flex", justifyContent: "center", marginTop: -3, flexWrap: "wrap" }}>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>CSS</b></p>
                        <img src={css} alt="css3"></img>
                    </Box>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>HTML</b></p>
                        <img src={html} alt="html5"></img>
                    </Box>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>JAVASCRIPT</b></p>
                        <img src={javascript} alt="js"></img>
                    </Box>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>BOOTSTRAP</b></p>
                        <img src={bootstrapIcon} style={{ width: "60px" }} alt="bootstrap"></img>
                    </Box>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>REACTJS</b></p>
                        <img src={reactjs} alt="react"></img>
                    </Box>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>REDUX</b></p>
                        <img src={reduxIcon} style={{ width: "60px" }} alt="redux"></img>
                    </Box>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>NODEJS</b></p>
                        <img src={nodejs} alt="nodejs"></img>
                    </Box>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>MONGODB</b></p>
                        <img src={mongo} alt="mongo"></img>
                    </Box>
                    <Box sx={{ padding: 2, width: "115px" }}>
                        <p><b>GIT</b></p>
                        <img src={git} alt="git"></img>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        <p style={{ width: "100px" }}><b>MATERIAL UI</b></p>
                        <img src={materialIcon} style={{ width: "60px" }} alt="materialui"></img>
                    </Box>
                </Container>
                <Container sx={{ width: "480px", [theme.breakpoints.only("xs")]: { maxWidth: "400px" } }}>
                    <Box sx={{ marginTop: "3rem", textAlign: "center" }}>
                        <h2 style={{ fontWeight: 700 }}>Idiomas</h2>
                        <ul>
                            <li style={{ listStyle: "none", textAlign: "start" }}>
                                <b>Español:</b> nativo
                            </li>
                            <li style={{ listStyle: "none", textAlign: "start" }}>
                                <b>Inglés:</b> intermediate/upper-intermediate
                            </li>
                            <li style={{ listStyle: "none", textAlign: "start" }}>
                                <b>Certificado Efset:</b>
                                <Link underline="none" color="primary" target="_blank" href="https://www.efset.org/cert/Tw3k9Z"> https://www.efset.org/cert/Tw3k9Z</Link>
                            </li>
                        </ul>
                    </Box>
                </Container>
            </Container>
        </div >
    )
}
