import { useContext } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import { JobContext } from '../context/JobContext';

const JobList = () => {
    const { allJobs, deleteJob } = useContext(JobContext);


    const handleDelete = async (id) => {
        await deleteJob(id);
        // setJobs(jobs.filter(job => job._id !== id));
    };
    console.log(allJobs)
    return (
        <Container>
            <Typography variant="h5">All Job List</Typography>
            <List>
                {allJobs.map(job => (
                    <ListItem
                        sx={{
                            my: 2,
                            mx: 1,
                            py: 2,
                            px: 2
                        }}
                        key={job._id}
                        component={Paper}
                        elevation={6} square >
                        <ListItemText primary={job.title} secondary={job.description} />
                        <ListItemText secondary={job.createdAt} />
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
