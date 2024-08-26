import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const JobContext = createContext();

const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await axios.get('http://localhost:5000/api/jobs');
            setJobs(res.data);
        };
        fetchJobs();
    }, []);

    useEffect(() => {
        const fetchAllJobs = async () => {
            const res = await axios.get('http://localhost:5000/api/jobs/allJobs');
            setAllJobs(res.data);
        };
        fetchAllJobs();
    }, [])

    const createJob = async (title, description) => {
        const res = await axios.post('http://localhost:5000/api/jobs', { title, description });
        setJobs(prevJobs => [...prevJobs, res.data]);
    };

    const deleteJob = async (id) => {
        await axios.delete(`http://localhost:5000/api/jobs/${id}`);
        setJobs(jobs.filter(job => job._id !== id));
    };

    return (
        <JobContext.Provider value={{ jobs, allJobs, createJob, deleteJob }}>
            {children}
        </JobContext.Provider>
    );
};

export { JobProvider, JobContext };
