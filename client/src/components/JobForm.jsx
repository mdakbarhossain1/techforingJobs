import { useState, useContext } from 'react';
import { TextField, Button, Container, Typography, Grid, CssBaseline, Box, Paper } from '@mui/material';
import { JobContext } from '../context/JobContext';

const JobForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { createJob } = useContext(JobContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createJob(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <Container>
            <Grid container spacing={2} columns={16} sx={{ mt: 3 }}>
                <CssBaseline />
                <Grid item xs={8} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            py: 4,
                            px: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h4">Create Job Post</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <Button type="submit" variant="contained" color="secondary">
                                Create
                            </Button>
                        </form>
                    </Box>
                </Grid>
                <Grid
                    item xs={8}
                    sx={{

                        backgroundImage: 'url("https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </Grid>


        </Container>
    );
};

export default JobForm;
