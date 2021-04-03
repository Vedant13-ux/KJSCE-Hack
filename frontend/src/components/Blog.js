import React from 'react';
import BlogCard from './BlogCard';

function Blog() {
    return (
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
    )
}

export default Blog
