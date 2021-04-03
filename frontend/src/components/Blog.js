import React from 'react';
import BlogCard from './BlogCard';
import Nav from '../containers/global/Nav';
import Footer from '../containers/global/Footer'

function Blog() {
    return (
        <div>
            <Nav />
            <div className="course_card">

                {/* {video.map((d, i)=>{
                    return(
                        <MediaCard key={i} data={d}></MediaCard>
                    );
                })} */}

                <BlogCard />
                <BlogCard />           
                <BlogCard />
                <BlogCard />
                
            </div>
            
        </div>
    )
}

export default Blog
