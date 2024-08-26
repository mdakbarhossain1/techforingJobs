import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TextField, Button, Container, Typography, Grid, CssBaseline, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
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
                        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1675802754634-3e0967bd3fab?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
                        <Typography variant="h4">Login</Typography>
                        <form onSubmit={handleSubmit}>
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
                                    Login
                                </Button>
                                <Link to="/register" >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
