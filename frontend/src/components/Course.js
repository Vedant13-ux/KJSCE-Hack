import React from 'react';
import MediaCard from './MediaCard';
import '../index2.css';
import Nav from '../containers/global/Nav'

function Course() {

    const video = [
        {
            "title":"Reduce Stress",
            "path" : "https://youtu.be/YhpU8VME8Gw",
            "description" : "Different tips & tricks to manage your stress in an efficient manner."
        },
        {
            "title":"Reduce Stress",
            "path" : "https://youtu.be/YhpU8VME8Gw",
            "description" : "Different tips & tricks to manage your stress in an efficient manner."
        },
        {
            "title":"Reduce Stress",
            "path" : "https://youtu.be/YhpU8VME8Gw",
            "description" : "Different tips & tricks to manage your stress in an efficient manner."
        }
    ]
    return (
        
        <div>
        <Nav />
        <div className="course_card">

            {video.map((d, i)=>{
                return(
                    <MediaCard key={i} data={d}></MediaCard>
                );
            })}

        </div>
    </div>
    )
}

export default Course;
