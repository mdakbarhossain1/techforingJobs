import { useContext } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import { JobContext } from '../context/JobContext';

const JobList = () => {
    const { jobs, deleteJob} = useContext(JobContext);

   
    const handleDelete = async (id) => {
        await deleteJob(id);
        // setJobs(jobs.filter(job => job._id !== id));
    };

    return (
        <Container sx={{my:2}}>
            <Typography variant="h4">My Job List</Typography>
            <List>
                {jobs.map(job => (
                    <ListItem sx={{
                        my: 2,
                        mx: 1,
                        py: 2,
                        px: 2
                    }}
                    key={job._id}
                    component={Paper}
                    elevation={6} square>
                        <ListItemText primary={job.title} secondary={job.description} />
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(job._id)}>
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default JobList;
