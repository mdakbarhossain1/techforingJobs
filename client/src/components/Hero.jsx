import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import {  useNavigate } from "react-router-dom"

const Hero = () => {
    const navigate = useNavigate();
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mt:2,
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: 'url("https://images.unsplash.com/photo-1717446405442-2d955599fe99?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
        >
            {/* Increase the priority of the hero background image */}
            {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Welcome to TechForing
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Shaping Tomorrow&apos;s Cybersecurity
                        </Typography>
                        <Button type="submit" variant="contained" color="secondary" onClick={()=>navigate('/create')}>
                            Create Jobs
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Hero