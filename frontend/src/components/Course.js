import React from 'react';
import MediaCard from './MediaCard';
import '../index2.css';

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
        <div className="course_card">

            {video.map((d, i)=>{
                return(
                    <MediaCard key={i} data={d}></MediaCard>
                );
            })}

            {/* <MediaCard />
            <MediaCard />           
            <MediaCard /> */}
        </div>
    )
}

export default Course;
