import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, yellow } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export default function MediaCard({ title, description, image, technologies, demoPage, github, gitBack, name }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: grey[900]
            },
            secondary: {
                main: yellow[800]
            }
        }
    })


    return (
        <Card
            sx={{
                maxWidth: 400,
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 3,
                [theme.breakpoints.up("sm")]: { maxWidth: 600 }
            }}>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt="proyecto amd"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardContent sx={{ marginTop: "-20px" }}>
                {
                    technologies.map((technology) =>
                        <Button key={`card-${technology}`} sx={{ margin: 0.5 }} size="small" variant="outlined" disabled>
                            {technology}
                        </Button>)
                }
            </CardContent>
            <CardActions sx={{ marginTop: "auto", flexWrap: "wrap" }}>
                {demoPage && <Button
                    variant="contained"
                    color="error"
                    size="small"
                    href={demoPage}
                    target="_blank"
                >
                    Ver página
                </Button>}
                <ThemeProvider theme={theme}>
                    <Button
                        startIcon={<GitHubIcon></GitHubIcon>}
                        variant="contained"
                        color="primary"
                        size="small"
                        href={github}
                        target="_blank"
                    >
                        Link a Github
                    </Button>
                    {gitBack && <Button
                        sx={{ [theme.breakpoints.only("xs")]: { marginLeft: "0px !important", marginTop: "8px" } }}
                        startIcon={<GitHubIcon></GitHubIcon>}
                        variant="contained"
                        color="primary"
                        size="small"
                        href={gitBack}
                        target="_blank"
                    >
                        Link a Github Backend
                    </Button>}
                    <Button
                        sx={gitBack
                            ? { marginLeft: "8px", [theme.breakpoints.only("xs")]: { marginLeft: "8px !important", marginTop: "8px" } }
                            : { marginLeft: "8px", [theme.breakpoints.only("xs")]: { marginLeft: "8px !important" } }
                        }
                        variant="contained"
                        color="secondary"
                        size="small"
                    >
                        <Link to={name} className='moreInfoLink'>
                            Más info
                        </Link>
                    </Button>
                </ThemeProvider>
            </CardActions>
        </Card >
    );
}
