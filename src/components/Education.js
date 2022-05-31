import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import FactoryIcon from '@mui/icons-material/Factory';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Container, useTheme } from '@mui/material';

export default function CustomizedTimeline() {

    const theme = useTheme()

    return (
        <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Container sx={{ maxWidth: 900, [theme.breakpoints.only("xs")]: { width: "400px" } }}>
                <h1>Educación</h1>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <CodeIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" sx={{ [theme.breakpoints.only("xs")]: { fontSize: "18px" } }}>
                                <b>Alkemy</b>
                            </Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}><b>Septiembre 2021 a Noviembre 2021</b></Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}>Acelerado en ReactJS</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <CodeIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" sx={{ [theme.breakpoints.only("xs")]: { fontSize: "18px" } }}>
                                <b>Rolling Code School</b>
                            </Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}><b>Septiembre 2020 a Junio 2021</b></Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}>Programador Web Fullstack</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" sx={{ [theme.breakpoints.only("xs")]: { fontSize: "18px" } }}>
                                <b>Universidad Nacional de Tucumán</b>
                            </Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}><b>Marzo 2010 a Junio 2018</b></Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}>Ingeniero Industrial</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
            <Container sx={{ maxWidth: 900, [theme.breakpoints.only("xs")]: { width: "400px" } }}>
                <h1>Experiencia</h1>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <FactoryIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" sx={{ [theme.breakpoints.only("xs")]: { fontSize: "18px" } }}>
                                <b>Air Liquide Argentina</b>
                            </Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}><b>Noviembre 2019 a Actualidad</b></Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}>Responsable de distribución sucursal de Tucumán</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <ElectricBoltIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" sx={{ [theme.breakpoints.only("xs")]: { fontSize: "18px" } }}>
                                <b>GF Ingeniería</b>
                            </Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}><b>Agosto 2017 a Octubre 2019</b></Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}>Asistente técnico</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" sx={{ [theme.breakpoints.only("xs")]: { fontSize: "18px" } }}>
                                <b>Universidad Nacional de Tucumán</b>
                            </Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}><b>Septiembre 2013 a Septiembre 2018</b></Typography>
                            <Typography sx={{ [theme.breakpoints.only("xs")]: { fontSize: "14px" } }}>Ayudante estudiantil de la materia Economía</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </Container >
    );
}