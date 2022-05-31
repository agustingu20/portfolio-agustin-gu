import { Box, Container, Link } from '@mui/material'
import React from 'react'
import linkedinIcon from "../assets/icons-linkedin.svg"
import gitIconColor from "../assets/icons-github-color.svg"
import whatsappIcon from "../assets/icons-whatsapp.svg"

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Box sx={{ marginBottom: "2rem", paddingTop: "1rem", color: "#EFEFEF" }}>
                    <b>Portfolio de Agustín Gómez Urrutia ©</b>
                </Box>
                <Box>
                    <Link sx={{ margin: "0.5rem" }} href="https://www.linkedin.com/in/raulagustingomezurrutia/" target="_blank"><img src={linkedinIcon} alt="linkedin"></img></Link>
                    <Link sx={{ margin: "0.5rem" }} href="https://github.com/agustingu20" target="_blank"><img src={gitIconColor} alt="git"></img></Link>
                    <Link sx={{ margin: "0.5rem" }} href="https://wa.me/543814470368" target="_blank"><img src={whatsappIcon} alt="whatsapp"></img></Link>
                </Box>
                <Box sx={{ paddingBottom: "0.5rem", marginTop: "2rem", color: "#EFEFEF" }}>
                    <p><b>Portfolio powered by</b>
                        <span> </span>
                        <b>
                            <a className='reactLink' href="https://es.reactjs.org/" target="_blank" rel='noreferrer'>
                                React
                            </a>
                        </b>
                    </p>
                </Box>
            </Container>
        </div>
    )
}
