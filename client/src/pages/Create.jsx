import { Button, CircularProgress, Container, Grid, Typography } from "@mui/material"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { JobProvider } from "../context/JobContext";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

export const Create = () => {

    const { user, logout, loading } = useContext(AuthContext);
    const navigate = useNavigate();


    if (loading) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }


    const handleLogout = () => {
        logout();
        navigate('/login');
    };


    return (
        <Container>
            <Grid item spacing={2} sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant="h4">Welcome, {user ? user.name : 'Guest'}</Typography>
                <Button variant="contained" color="secondary" onClick={handleLogout}>
                    Logout
                </Button>
            </Grid>
            <JobProvider>
                <JobForm />
                <JobList />
            </JobProvider>
        </Container>
    )
}
