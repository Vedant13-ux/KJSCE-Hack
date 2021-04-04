import React from 'react';
import BlogCard from './BlogCard';
import '../index2.css';
import Nav from '../containers/global/Nav';
import Footer from '../containers/global/Footer'
import FloatingButtons from './FloatingButton';


function Blog() {
    return (
        <div className="course">
            <Nav />
            <div className="course_wrap">
                <div className="course_title">
                    <h1>----- Blog -----</h1>
                </div>
                
                <div className="course_card">
                    <div className="blogCard"><BlogCard /></div> 
                    <div className="blogCard"><BlogCard /></div>
                    <div className="blogCard"><BlogCard /></div>
                    <div className="blogCard"><BlogCard /></div>
                    <div className="blogCard"><BlogCard /></div>
                    <div className="blogCard"><BlogCard /></div>
                    <div className="add_icon"><FloatingButtons /></div>
                </div>

            </div>
            
            
            <Footer />
        </div>
    )
}

export default Blog
