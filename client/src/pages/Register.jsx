import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TextField, Button, Container, Typography, Grid, Paper, CssBaseline, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(name, email, password);
        navigate('/');
    };

    return (
        <Container>
            <Grid container spacing={2} columns={16} sx={{ my: 1, height: '100vh' }}>
                <CssBaseline />

                <Grid
                    item xs={8}
                    sx={{
                        height: '100vh',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1648878136531-15e7d3a88e76?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
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
                        <Typography variant="h4">Register</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <Grid item spacing={2} sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Button type="submit" variant="contained" color="primary">
                                    Register
                                </Button>
                                <Link to="/login" >
                                    {"All Ready have an account? Sign In"}
                                </Link>
                            </Grid>

                        </form>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Register;
