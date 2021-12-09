import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'
const Project = (props) => {
    const { name, desc, img, id } = props.project || {};


    return (
        <>
            <div className="col-md-4 mx-auto ">
                <div className='preview'>
                    <div className="previewimg">
                        <img src={img} className='img-fluid' alt="" />
                    </div>
                </div>

                <div className='bg-dark p-3 w-100'>
                    <div className="d-flex align-items-center my-1">
                        <h4>{name}</h4>
                        <Link to={`/project/${id}`}>
                            <button className='btn btn-outline-danger px-3 ms-3'>Details Project</button>
                        </Link >
                    </div>
                    <p>{desc}</p>

                </div>
            </div>
        </>

    )
};

export default Project;

//

//

//                         <div>
//                             {/* <span className=" px-2 py-1">React</span>
//                             <span className=" px-2 py-1">Firebase authentication</span>
//                             <span className=" px-2 py-1">Bootstrap</span>
//                             <span className=" px-2 py-1">MongoDB</span>
//                             <span className=" px-2 py-1">Express.js</span>
//                             <span className=" px-2 py-1">Node.js</span> */}
//             //             </div >
//             //
//             //         </div >

//             //     </div >
//             //     <div className="col-md-4 mx-auto ">
//             //         <div className='preview2'>
//             //             <div className="previewimg2"></div>
//             //         </div>
//             //         <div className='bg-dark p-3 w-100'>
//             //             <h4>Travellers</h4>
//             //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti nihil dignissimos unde culpa omnis repellendus delectus accusantium tempore modi, earum, placeat voluptates error ipsam ea magnam natus iure quia!</p>

//             //             <div>
//             //                 {/* <span className=" px-2 py-1">React</span>
//             //                 <span className=" px-2 py-1">Firebase authentication</span>
//             //                 <span className=" px-2 py-1">Bootstrap</span>
//             //                 <span className=" px-2 py-1">MongoDB</span>
//             //                 <span className=" px-2 py-1">Express.js</span>
//             //                 <span className=" px-2 py-1">Node.js</span> */}
//             //             </div>
//             //             <a className='button p-2 mx-2' href="https://travelers-d5c96.web.app/">Live Link</a>
//             //             <a className='button p-2 mx-2' href='https://github.com/muhsin545/Tourism-client'>GitHub</a>
//             //         </div>

//             //     </div>
//             //     <div className="col-md-4 mx-auto ">
//             //         <div className='preview3'>
//             //             <div className="previewimg3"></div>
//             //         </div>
//             //         <div className='bg-dark p-3 w-100'>
//             //             <h4>Health Care</h4>
//             //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti nihil dignissimos unde culpa omnis repellendus delectus accusantium tempore modi, earum, placeat voluptates error ipsam ea magnam natus iure quia!</p>

//             //             <div>
//             //                 {/* <span className=" px-2 py-1">React</span>
//             //                 <span className=" px-2 py-1">Firebase authentication</span>
//             //                 <span className=" px-2 py-1">Bootstrap</span>
//             //                 <span className=" px-2 py-1">MongoDB</span>
//             //                 <span className=" px-2 py-1">Express.js</span>
//             //                 <span className=" px-2 py-1">Node.js</span> */}
//             //             </div>
//             //             <a className='button p-2 mx-2' href="https://health-care-ed6e1.firebaseapp.com/">Live Link</a>
//             //             <a className='button p-2 mx-2' href='https://github.com/muhsin545/Health-Care'>GitHub</a>
//             //         </div>

//             //     </div>
//             // </div >

