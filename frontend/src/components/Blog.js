import React from 'react';
import BlogCard from './BlogCard';
import '../index2.css';
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

                <BlogCard className="blogCard"/>
                <BlogCard className="blogCard"/>           
                <BlogCard className="blogCard"/>
                <BlogCard className="blogCard"/>
                
            </div>
            
        </div>
    )
}

export default Blog
