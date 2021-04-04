import React from 'react';
import MediaCard from './MediaCard';
import '../index2.css';
import Nav from '../containers/global/Nav'
import Footer from '../containers/global/Footer';

function Course(props) {

    const video = [
        {
            "title": "Reduce Stress",
            "path": "https://youtu.be/YhpU8VME8Gw",
            "description": "Different tips & tricks to manage your stress in an efficient manner."
        },
        {
            "title": "Bullying in Schools: Classroom Lesson",
            "path": "https://www.youtube.com/watch?v=2meoVOc-RxU",
            "description": "A lesson for students, teachers, parents, administrators and more to get a basic understanding on what exactly is bullying in schools."
        },
        {
            "title": "Jordan Peterson - How to Deal With Bullies And Confronting Your Fears",
            "path": "https://www.youtube.com/watch?v=yZ8VXb-95vg",
            "description": "In this lecture, Dr. Jordan Peterson talks about how to stop bullying before it escalates full scale. "
        },
        {
            "title": "How I survived workplace bullying",
            "path": "https://www.youtube.com/watch?v=YmRKlZEXVQM",
            "description": "What happens when you’re on the bullying end or an organization meant to protect people?  Who do you go to for help? "
        },
        {
            "title": "Jordan Peterson : How he treats ANXIETY",
            "path": "https://www.youtube.com/watch?v=ijdr4eJcdHQ",
            "description": "Listen to the world famous psychologist and his methods to treat anxiety"
        },
        {
            "title": "Ways to stop bullying",
            "path": "https://www.youtube.com/watch?v=ynTuA_tlZDE",
            "description": "Are you being bullied?"
        }
    ]
    return (

        //     <div>
        //     <Nav />
        //     <div className="course_card">

        //         {video.map((d, i)=>{
        //             return(
        //                 <div className="mediacard"><MediaCard key={i} data={d}></MediaCard></div>
        //             );
        //         })}

        //     </div>
        //     <Footer />
        // </div>

        <div className="course">
            <Nav user={props.user} logout={props.logout} />
            <div className="course_wrap">
                <div className="course_title">
                    <h1>----- Course -----</h1>
                </div>

                <div className="course_card">

                    {video.map((d, i) => {
                        return (
                            <div className="mediacard"><MediaCard key={i} data={d}></MediaCard></div>
                        );
                    })}

                </div>

            </div>


            <Footer />
        </div>

    )
}

export default Course;
