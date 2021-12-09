import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'


const ProjectDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log(details);
    return (
        <div className="row mx-auto container-fluid align-items-center  my-5 py-5">
            <div className="col-md-5 mx-auto imgPreview">
                <div className='previewimgDetails'>
                    <img src={details[id]?.img} className='img-fluid' alt="" />
                </div>

            </div>
            <div className="col-md-7 details">
                <h3>{details[id]?.name}</h3>
                <p>{details[id]?.desc}</p>
                <ul>
                    <li>{details[id]?.features1}</li>
                    <li>{details[id]?.features2}</li>
                    <li>{details[id]?.features3}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetails;
/*
<a className='button p-2 mx-2' href="https://hero-honda-8272c.web.app/">Live Link</a>
                    <a className='button p-2 mx-2' href='https://github.com/muhsin545/The-Car-server'>GitHub</a>

*/