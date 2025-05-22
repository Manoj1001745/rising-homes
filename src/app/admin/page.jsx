"use client"
import React from 'react'


function Page() {
    const [user, setUser] = React.useState(null);
    const [project, setProject] = React.useState(null);
    const [completeProject, setCompleteProject] = React.useState(null);
    const [review, setReview] = React.useState(null);

    const handleGetUser = () => {
        // Simulate fetching user data
        setUser('User Data');
    };

    const handleGetProject = () => {
        // Simulate fetching project data
        setProject('Project Data');
    };

    const handleAddCompleteProject = () => {
        // Simulate adding complete project
        setCompleteProject('Complete Project Data');
    };

    const handleViewReview = () => {
        // Simulate viewing review
        setReview('Review Data');
    };

    return (
        <>
        <section>
        <div className="admin-profile my-5 py-5">
            <h1 className="admin-name">Admin Page</h1>
            <div className="admin-actions ">
                <div className='d-flex border-bottom my-4 justify-content-between align-items-center'>
                    <h3>Get User</h3>
                    <button className='btn btn-warning' onClick={handleGetUser}>View</button>
                    {user && <p>{user}</p>}
                </div>
                <div className='d-flex border-bottom my-4 justify-content-between align-items-center'>
                    <h3>Get Project</h3>
                    <button className='btn btn-warning' onClick={handleGetProject}>View</button>
                    {project && <p>{project}</p>}
                </div>
                <div className='d-flex border-bottom my-4 justify-content-between align-items-center'>
                    <h3>Add Complete Project</h3>
                    <button className='btn btn-info' onClick={handleAddCompleteProject}>Add.</button>
                    {completeProject && <p>{completeProject}</p>}
                </div>
                <div className='d-flex border-bottom my-4 justify-content-between align-items-center'>
                    <h3>View Review</h3>
                    <button className='btn btn-warning' onClick={handleViewReview}>View</button>
                    {review && <p>{review}</p>}
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Page;