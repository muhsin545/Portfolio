import React, { useEffect, useState } from 'react';
import assignment12 from '../../../images/assignment-12.png'
import assignment11 from '../../../images/assignment-11.png'
import assignment10 from '../../../images/assignment-10.png'
import Project from './Project';

const Projects = () => {
    const [myProjects, setMyProjects] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setMyProjects(data))
    }, [])
    return (
        <div className='my-5 pt-3' id='project'>
            <h1 style={{ color: 'rgb(249, 0, 77)', textTransform: 'uppercase' }} className='text-center my-3 '>My Recent Projects</h1>
            <div className="row container mx-auto">
                {
                    myProjects.map(project => <Project project={project}></Project>)
                }
            </div>
        </div >
    );
};

export default Projects;